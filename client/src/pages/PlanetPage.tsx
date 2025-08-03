import { useParams } from "react-router-dom";

export default function PlanetPage() {
  const { planetName } = useParams();

  return (
    <div style={{ padding: 20 }}>
      <h1>Planet: {planetName}</h1>
      <p>This page shows information about the planet {planetName}.</p>
    </div>
  );
}
