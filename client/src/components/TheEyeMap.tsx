import React, { useState } from "react";

import '../styles/TheEyeMap.css';

import { Maps, POIs, PoliticalOverlays } from "./TheEyeMapData";


const InteractiveMap: React.FC = () => {
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

        {selectedMap === "Political Map" && hoveredLegend && (
            (() => {
                const overlay = PoliticalOverlays.find((o) => o.name === hoveredLegend);
                return overlay ? (
                <img
                    src={overlay.image}
                    alt={overlay.label}
                    className="overlay-map"
                />
                ) : null;
            })()
        )}


        {visiblePOIs.map((poi) => (
          <div
            key={poi.name}
            className={`poi-dot ${hoveredPOI === poi.name ? "hovered" : ""}`}
            style={{ 
                left: `${poi.x}%`, 
                top: `${poi.y}%`
            }}
            title={poi.name}
          />
        ))}
      </div>
    </div>
  );
};

export default InteractiveMap;
