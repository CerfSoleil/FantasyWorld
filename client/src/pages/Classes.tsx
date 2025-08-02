// Route is /Classes
import React from "react";
import ClassCards from "../components/ClassComponents/ClassCards";

/////// Do all of this as seperate components. Descriptor card, Class Table, Core Traits + Multiclassing, and the abilities in full.
// Data and Sources

//// For the Table
// ProficiencyLevels from ClassBase.ts
// Spell information from CasterTypes.ts, but defined in [Class] or [Class]Subclasses (Testing with Bard.ts and Rogue.ts)
// Feature information from [Class] and togglable from [Class]Subclasses

///// For the Listed Levels
// Feature information from [Class] and togglable from [Class]Subclasses
const ClassSelectPage: React.FC = () => {
  return (
    <div>
      <h1>Select a Class</h1>
      <ClassCards />
    </div>
  );
};

export default ClassSelectPage;
