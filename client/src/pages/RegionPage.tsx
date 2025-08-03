import { useParams } from "react-router-dom";
import planetComponents from "../components/PlanetComponents/Esteria/planetComponent";

export default function RegionPage() {
  const { planetName, regionName } = useParams();

  const planet = planetName?.toLowerCase() || "";
  const region = regionName?.toLowerCase() || "";

  const planetEntry = planetComponents[planet];

  if (planetEntry) {
    // Render region-level component if it exists
    if (regionName && planetEntry[region]) {
      const RegionComponent = planetEntry[region];
      return <RegionComponent />;
    }

    // Render a planet overview if only planet is provided
    if (!regionName) {
      return (
        <div style={{ padding: 20 }}>
          <h1>Planet: {planet}</h1>
          <p>This is the overview page for planet {planet}.</p>
        </div>
      );
    }
  }

  // Default fallback for unknown planet or region
  return (
    <div style={{ padding: 20 }}>
      <h1>Not Found</h1>
      <p>
        {regionName
          ? `Region "${region}" not found on planet "${planet}".`
          : `Planet "${planet}" not found.`}
      </p>
    </div>
  );
}
