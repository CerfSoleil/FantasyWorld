// components/ClassComponents/SubclassButtons.tsx
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { subclassMap } from "../ClassesData/AllSubclasses";

const SubclassButtons: React.FC = () => {
  const navigate = useNavigate();
  const { className } = useParams<{ className: string }>();
  const subclasses = subclassMap[className?.toLowerCase() || ""];

  if (!subclasses) return <p>No subclasses found for this class.</p>;

  const handleSubclassClick = (subclassName: string) => {
    const subclassId = subclassName.toLowerCase().replace(/\s+/g, "");
    navigate(`/class/${className}/${subclassId}`);
  };

  return (
    <div>
      <h2>Select a Subclass</h2>
      <div className="subclass-buttons">
        {subclasses.map((subclass) => (
          <button
            key={subclass.subclassName}
            onClick={() => handleSubclassClick(subclass.subclassName)}
            className="subclass-button"
          >
            {subclass.subclassName}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SubclassButtons;
