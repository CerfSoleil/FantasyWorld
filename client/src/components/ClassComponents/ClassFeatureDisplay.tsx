import React from 'react';
import { useParams } from 'react-router-dom';

import { classLevelMap } from '../ClassesData/AllClasses';
import { subclassMap } from '../ClassesData/AllSubclasses';
import { SubclassBase } from '../ClassesData/ClassBase';

import "../../styles/ClassFeatures.css"

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
                    ? 'feature-subheading'
                    : 'feature-description'
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


const ClassFeatureDisplay: React.FC = () => {
  const { className, subclassName } = useParams<{ className: string; subclassName?: string }>();

  const classLower = className?.toLowerCase();

  const levels = classLower && classLevelMap[classLower] ? classLevelMap[classLower] : [];


  let subclassFeatures: SubclassBase | undefined;
  if (subclassName && subclassMap[classLower!]) {
    subclassFeatures = subclassMap[classLower!].find(
      (sc) => sc.subclassName.toLowerCase().replace(/\s+/g, '') === subclassName.toLowerCase()
    );
  }

  return (
    <div className="class-feature-container">
      {levels.map(({ level, ...featureSet }) => {
        const features: string[][] = [];

        Object.values(featureSet).forEach((feature) => {
          if (Array.isArray(feature)) {
            if (
              feature[0].toLowerCase().includes(`${className} subclass feature`.toLowerCase()) &&
              subclassFeatures
            ) {
              const subclassLevelFeatures = subclassFeatures.features.find((f) => f.level === level);
              if (subclassLevelFeatures) {
                Object.values(subclassLevelFeatures).forEach((subF) => {
                  if (Array.isArray(subF)) features.push(subF);
                });
              }
            } else {
              features.push(feature);
            }
          }
        });

        return <FeatureBlock key={level} level={level} features={features} />;
      })}
    </div>
  );
};

export default ClassFeatureDisplay;
