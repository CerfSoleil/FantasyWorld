

// Data and Sources
//// For the Card
// Info from [Class]
// Only show Class Name, Class Description, Hit Dice, Primary ability
//// For the Table
// Proficiency from GeneralLevelData
// Spell information from CasterTypes, but defined in [Class] or [Class]Subclasses
// Feature information from [Class] and togglable from [Class]Subclasses
///// For the Listed Levels
// Feature information from [Class] and togglable from [Class]Subclasses
function Classes() {
  return (
    <div className="ClassPage">
      <h1>Classes</h1>
      <p>This page will render all the classes + Subclasses. It should be laid out with cards ([classname]Card) in a grid with a brief description of what the class does.</p>
      <p>When clicking a card, the page will change to have the code from that class.</p>
      <p>There should be a back button at the top left that clears all the class information and brings back the class cards.</p>
      <p> There should also be a list of all the classes in the sidebar, which will also change the page to that class.</p>
        <p>Classes will be imported from the ClassesData folder, which will have a file for each class.</p>

      <p>Each class will need a table at the top with variable amount of colums, but always 20 rows.</p>
      <p>Table format from any given column will have [Level], [Proficiency Bonus], [Feature1?, Feature2?, Feature3?]</p>
        <p>However, individual classes will have other colum titles after that. Such as bard, which has [Bardic Die], [Cantrips], [Prepared Spells], [Spell Slots: 1st, 2nd, 3rd, through 9th]</p>
            <p>Spell Slots over the 1st-9th should have a title for them only if the class has spell slots.</p>
        <p>Only render columns that have data for them.</p>
        <p>When a subclass is selected, the table should read the subclass features instead of `[ClassName] Subclass Feature` </p>
      
      <p>Every class will need toggle buttons to select subclass. Some of these subclasses might add colums to the table.</p>
      <p>These subclasses toggles will insert text into the section below at the relevant levels (read in the subclass array).</p>
        <p>Subclasses will be imported from the [ClassName]Subclasses file in the ClassesData folder.</p>

      <p>There will be Level FeatureLevel: FeatureName where the question marks will be variables from the class sheet.</p>
      <p>There might be a table needed here, detected yes/no.</p>
      <p>After this are written out features.</p>
      <p>Then it repeats for however many given features there are.</p>

      <p>Lastly, there are credits at the end of the page.</p>
    </div>
  );
}

export default Classes;