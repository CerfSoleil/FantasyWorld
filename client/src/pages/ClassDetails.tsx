// pages/ClassDetailsPage.tsx
import React from "react";
import { useParams } from "react-router-dom";

import ClassFeatureDisplay from "../components/ClassComponents/ClassFeatureDisplay";
import SubclassButtons from "../components/ClassComponents/SubclassButtons";

const ClassDetailsPage: React.FC = () => {
  const { className, subclassId } = useParams();

  return (
    <div>
      <h1>{className?.toUpperCase()}</h1>
      {!subclassId ? (
        <SubclassButtons />
      ) : (
        <div>
          <h2>Selected Subclass: {subclassId}</h2>
          {/* You could render subclass details here based on subclassId */}
        </div>
      )}

      <ClassFeatureDisplay />
    </div>
  );
};

export default ClassDetailsPage;
