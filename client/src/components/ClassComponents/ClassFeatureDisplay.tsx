import React from 'react';
import { useParams } from 'react-router-dom';

import { classLevelMap } from '../ClassesData/AllClasses';
import { subclassMap } from '../ClassesData/AllSubclasses';
import { SubclassBase } from '../ClassesData/ClassBase';

import "../../styles/ClassFeatures.css";

interface FeatureBlockProps {
  level: number;
  features: string[][];
}

const FeatureBlock: React.FC<FeatureBlockProps> = ({ level, features }) => {
  return (
    <div className="feature-block">
      <h1 className="feature-level-title">Level {level}</h1>
      <hr className="feature-divider" />
      {features.length === 0 ? (
        <p className="feature-empty">There are no Features on this level.</p>
      ) : (
        features.map((feature, i) => (
          <div key={i} className="feature-group">
            {feature.map((text, idx) => (
              <div
                key={idx}
                className={
                  idx === 0
                    ? 'feature-title'
                    : idx % 2 === 1
                    ? 'feature-description'
                    : 'feature-subheading'
                }
              >
                <p dangerouslySetInnerHTML={{ __html: text }} />
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
};

// Function to Replace Subclass Placeholder Features
function resolveSubclassFeatures(
  featureArray: string[][],
  level: number,
  classCapitalized: string,
  subclassFeatures?: SubclassBase
): string[][] {
  if (!subclassFeatures) return featureArray;

  return featureArray.flatMap((feature) => {
    const isSubclassFeaturePlaceholder =
      feature[0].toLowerCase() === `${classCapitalized} subclass feature`.toLowerCase();

    if (isSubclassFeaturePlaceholder) {
      const subclassLevel = subclassFeatures.features.find((f) => f.level === level);
      if (!subclassLevel) return [];

      // Extract all subclassFeature1 - subclassFeature4
      const subclassFeaturesAtLevel: string[][] = Object.entries(subclassLevel)
        .filter(([key, val]) => key.startsWith('subclassFeature') && Array.isArray(val))
        .map(([_, val]) => val as string[]);

      return subclassFeaturesAtLevel;
    }

    // Not a placeholder — keep the original feature
    return [feature];
  });
};

const ClassFeatureDisplay: React.FC = () => {
  const { className, subclassName } = useParams<{ className: string; subclassName?: string }>();

  const classLower = className?.toLowerCase();
  const classCapitalized = className
    ? className.charAt(0).toUpperCase() + className.slice(1).toLowerCase()
    : '';

  const levels = classLower && classLevelMap[classLower] ? classLevelMap[classLower] : [];

  let subclassFeatures: SubclassBase | undefined;
  if (subclassName && subclassMap[classLower!]) {
    subclassFeatures = subclassMap[classLower!].find(
      (sc) => sc.subclassName.toLowerCase().replace(/\s+/g, '') === subclassName.toLowerCase()
    );
  }

///// This is Testing Ground

console.log ("This is the class name.", className)

// This should find "[className] Subclass Feature" and report it
if (classLower && classLevelMap[classLower]) {
  const subclassPlaceholder = `${classCapitalized} Subclass Feature`;

  classLevelMap[classLower].forEach((levelData, index) => {
    const features = Object.values(levelData).filter(Array.isArray);
    features.forEach((arr) => {
      if (arr[0] === subclassPlaceholder) {
        console.log(`Level ${index + 1} contains Subclass Placeholder: ${subclassPlaceholder}`);
      }
    });
  });
}



console.log("Requested subclass:", subclassName);

console.log ("This should read the current subclass features:", subclassFeatures);
// The following should display subclass features by level
interface SubclassFeatureBlock {
  level: number;
  [key: `subclassFeature${number}`]: string[] | undefined;
}

if (subclassFeatures && Array.isArray(subclassFeatures.features)) {
  subclassFeatures.features.forEach((featureBlock: SubclassFeatureBlock) => {
    const level = featureBlock.level;
    console.log(`--- Level ${level} ---`);

    for (let i = 1; i <= 4; i++) {
      const key = `subclassFeature${i}` as keyof SubclassFeatureBlock;
      const features = featureBlock[key];
      if (features) {
        console.log(`${key}:`, features);
      }
    }
  });
}




  return (
    <div className="class-feature-container">
      {levels.map(({ level, ...featureSet }) => {
        let features: string[][] = [];

        // Step 1: Collect all features from the base class
        Object.values(featureSet).forEach((feature) => {
          if (Array.isArray(feature)) {
            features.push(feature);
          }
        });

        // Step 2: Resolve subclass features if needed
        features = resolveSubclassFeatures(features, level, classCapitalized, subclassFeatures);

        return <FeatureBlock key={level} level={level} features={features} />;
      })}
    </div>
  );
};

export default ClassFeatureDisplay;
