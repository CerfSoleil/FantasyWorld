// DropdownItem.tsx
import React from "react";
import { Link } from "react-router-dom";
import { MenuItem } from "./MenuData";

interface Props {
  item: MenuItem;
  parentPath?: string;
  isTopLevel?: boolean;
}

const pathMap: Record<string, string> = {
  "Character Creation": "/character-creation",
  "Classes": "/classes",
  "Races": "/species",
  "Origins": "/origins",
  "Gods": "/gods",
  "Maps": "/maps",
  "The Eye": "/maps/TheEye",
  "Players": "/players",

  "Esteria": "/planets/esteria",
  "Beluus": "/planets/beluus",
  "Naraka": "/planets/naraka",

  "Sera": "/planets/esteria/sera",
  "Cazro El": "/planets/esteria/cazro-el",
  "El Castim": "/planets/esteria/el-castim",
  "Aetember": "/planets/esteria/aetember",
  "Kaito": "/planets/esteria/kaito",
};

export const DropdownItem: React.FC<Props> = ({
  item,
  parentPath = "",
  isTopLevel = false,
}) => {
  const hasChildren = item.children && item.children.length > 0;
  const slug = item.name.toLowerCase().replace(/\s+/g, "-");
  const mappedPath = pathMap[item.name] || `${parentPath}/${slug}`;

  return (
    <div className={`dropdown-item ${isTopLevel ? "top-level" : ""}`}>
      <Link to={mappedPath} className="dropdown-link">
        {item.name}
      </Link>
      {hasChildren && (
        <div className="dropdown-children">
          {item.children!.map((child, idx) => (
            <DropdownItem
              key={idx}
              item={child}
              parentPath={mappedPath}
              isTopLevel={false}
            />
          ))}
        </div>
      )}
    </div>
  );
};
