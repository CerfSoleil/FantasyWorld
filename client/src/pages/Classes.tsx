
function Classes() {
  return (
    <div className="ClassPage">
      <h1>Classes</h1>
      <p>This page will be a landing page for links to all the classes. It should have cards with a brief description of what the class does.</p>
      <p>When clicking a card, the page will change to have the code from that class.</p>
      <p>There should be a back button that reverses this page to the previous state of class cards.</p>

      <p>Each class will need a table at the top with variable amount of colums, but always 20 rows.</p>
      <p>These colums will always contain "Level", "Proficiency Bonus", and "Features", but will need to pull from class files for the rest of the rows.</p>
      
      <p>Every class will need toggle buttons to select subclass. Some of these subclasses might add colums to the table.</p>
      <p>These subclasses toggles will insert text into the section below.</p>

      <p>There will be Level FeatureLevel: FeatureName where the question marks will be variables from the class sheet.</p>
      <p>There might be a table needed here, detected yes/no.</p>
      <p>After this are written out features.</p>
      <p>Then it repeats for however many given features there are.</p>

      <p>Lastly, there are credits.</p>
    </div>
  );
}

export default Classes;