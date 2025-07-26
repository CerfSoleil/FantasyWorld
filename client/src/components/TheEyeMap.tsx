import React, { useState } from "react";

import '../styles/TheEyeMap.css';

interface MapItem {
  name: string;
  label: string;
  image: string;
}

interface POI {
  name: string;
  label: string;
  x: number;
  y: number;
}

interface Overlay {
  name: string;
  label: string;
  image: string;
}

const InteractiveMap: React.FC = () => {
  const Maps: MapItem[] = [
    { name: "Physical Map", label: "Default", image: "../images/maps/TheEyeMap/Physical-Map.png" },
    { name: "Political Map", label: "Political", image: "../images/maps/TheEyeMap/Political-Base.png" },
    { name: "Cultural Map", label: "Cultural", image: "../images/maps/TheEyeMap/Cultural-Map.png" },
  ];

  const POIs: POI[] = [
    { name: "Broadsheet Press", label: "Other", x: 150, y: 240 },
    { name: "The Matron's Tower", label: "Residence", x: 310, y: 390 },
    { name: "Xeriman's First Estate", label: "Residence", x: 420, y: 360 },
    { name: "Golden Grin Theatre", label: "Entertainment", x: 500, y: 300 },
  ];

  const PoliticalOverlays: Overlay[] = [
    { name: "Babel-Sectional", label: "Guild of Babel", image: "../images/maps/TheEyeMap/Babel-Sectional.png" },
    { name: "Bartlett-Sectional", label: "Bartlett1", image: "../images/maps/TheEyeMap/Bartlett-Sectional.png" },
    { name: "Casho-Sectional", label: "Casho1", image: "../images/maps/TheEyeMap/Casho-Sectional.png" },
    { name: "Conveyence-Sectional", label: "Conveyence1", image: "../images/maps/TheEyeMap/Conveyence-Sectional.png" },
    { name: "Emrin-Sectional", label: "Emrin1", image: "../images/maps/TheEyeMap/Emrin-Sectional.png" },
    { name: "Gear-Sectional", label: "Gear1", image: "../images/maps/TheEyeMap/Gear-Sectional.png" },
    { name: "Mabre-Sectional", label: "Mabre1", image: "../images/maps/TheEyeMap/Mabre-Sectional.png" },
    { name: "Matron-Sectional", label: "Matron1", image: "../images/maps/TheEyeMap/Matron-Sectional.png" },
    { name: "Theatre-Sectional", label: "Theatre1", image: "../images/maps/TheEyeMap/Theatre-Sectional.png" },
    { name: "Treasury-Sectional", label: "Treasury1", image: "../images/maps/TheEyeMap/Treasury-Sectional.png" },
    { name: "Xeriman-Sectional", label: "Xeriman1", image: "../images/maps/TheEyeMap/Xeriman-Sectional.png" },
  ];

  const categories = Array.from(new Set(POIs.map((poi) => poi.label)));

  const [selectedMap, setSelectedMap] = useState<string>(Maps[0].name);
  const [activeCategories, setActiveCategories] = useState<string[]>([]);
  const [hoveredPOI, setHoveredPOI] = useState<string | null>(null);
  const [hoveredLegend, setHoveredLegend] = useState<string | null>(null);

  const visiblePOIs = POIs.filter((poi) => activeCategories.includes(poi.label));

  const handleMapChange = (name: string) => {
    setSelectedMap(name);
    setHoveredLegend(null);
  };

  const toggleCategory = (label: string) => {
    setActiveCategories((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
    );
  };

  return (
    <div className="interactive-map-wrapper">
      <aside className="legend-panel">
        <div className="map-selection">
          <h3>Map Type</h3>
          {Maps.map((map) => (
            <label key={map.name}>
              <input
                type="radio"
                name="map"
                checked={selectedMap === map.name}
                onChange={() => handleMapChange(map.name)}
              />
              {map.label}
            </label>
          ))}
        </div>

        <div className="category-selection">
          <h3>POI Categories</h3>
          {categories.map((cat) => (
            <label key={cat}>
              <input
                type="checkbox"
                checked={activeCategories.includes(cat)}
                onChange={() => toggleCategory(cat)}
              />
              {cat}
            </label>
          ))}

          <ul className="poi-list">
            {visiblePOIs.map((poi) => (
              <li
                key={poi.name}
                onMouseEnter={() => setHoveredPOI(poi.name)}
                onMouseLeave={() => setHoveredPOI(null)}
              >
                {poi.name}
              </li>
            ))}
          </ul>
        </div>

        {selectedMap === "Political Map" && (
          <div className="political-overlays">
            <h3>Political Sections</h3>
            {PoliticalOverlays.map((overlay) => (
              <div
                key={overlay.name}
                onMouseEnter={() => setHoveredLegend(overlay.name)}
                onMouseLeave={() => setHoveredLegend(null)}
              >
                {overlay.label}
              </div>
            ))}
          </div>
        )}
      </aside>

      <div className="map-container">
        <img
          src={Maps.find((map) => map.name === selectedMap)?.image}
          alt={selectedMap}
          className="base-map"
        />

        {hoveredLegend && selectedMap === "Political Map" && (
          <img
            src={
              PoliticalOverlays.find((o) => o.name === hoveredLegend)?.image
            }
            alt={hoveredLegend}
            className="overlay-map"
          />
        )}

        {visiblePOIs.map((poi) => (
          <div
            key={poi.name}
            className={`poi-dot ${hoveredPOI === poi.name ? "hovered" : ""}`}
            style={{ left: poi.x, top: poi.y }}
            title={poi.name}
          />
        ))}
      </div>
    </div>
  );
};

export default InteractiveMap;
