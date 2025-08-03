import { useParams } from "react-router-dom";

export default function RegionPage() {
  const { planetName, regionName } = useParams();

  return (
    <div style={{ padding: 20 }}>
      <h1>Region: {regionName}</h1>
      <p>This region is part of planet {planetName}.</p>
    </div>
  );
}
