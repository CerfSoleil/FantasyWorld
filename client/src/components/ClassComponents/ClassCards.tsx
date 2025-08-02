import React from "react";
import { useNavigate } from "react-router-dom";
import { allClasses } from "../ClassesData/AllClasses";
import { ClassBase } from "../ClassesData/ClassBase";

import "../../styles/ClassCard.css"

const ClassCards: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = (className: string) => {
    navigate(`/class/${className.toLowerCase()}`);
  };

  return (
    <div className="class-grid">
      {allClasses.map((classData: ClassBase) => (
        <div
          key={classData.className}
          className="class-card"
          onClick={() => handleClick(classData.className)}
        >
          <h2>{classData.className}</h2>
          <p><strong>Hit Die:</strong> {classData.hitDie}</p>
          <p><strong>Description:</strong> {classData.description}</p>
          <p><strong>Primary Ability:</strong> {classData.primaryAbility}</p>
        </div>
      ))}
    </div>
  );
};

export default ClassCards;
