// src/data/mapData.ts

export interface MapItem {
  name: string;
  label: string;
  image: string;
}

export interface POI {
  name: string;
  label: string;
  x: number; // These are percentages
  y: number;
}

export interface Overlay {
  name: string;
  label: string;
  image: string;
}

export const Maps: MapItem[] = [
  { name: "Default Map", label: "Default", image: "../images/maps/TheEyeMap/Default-Map.png" },
  { name: "Political Map", label: "Political", image: "../images/maps/TheEyeMap/Political-Base.png" },
  { name: "Architectural Map", label: "Architectural", image: "../images/maps/TheEyeMap/Architectural-Map.png" },
];

export const POIs: POI[] = [
  { name: "Broadsheet Press", label: "Other", x: 40, y: 40 },
  { name: "The Matron's Tower", label: "Residence", x: 13.9, y: 64.5 },
  { name: "Xeriman's First Estate", label: "Residence", x: 45, y: 45 },
  { name: "Golden Grin Theatre", label: "Entertainment", x: 20, y: 80 },
];

export const PoliticalOverlays: Overlay[] = [
  { name: "Bartlett-Sectional", label: "Prince Bartlett", image: "../images/maps/TheEyeMap/Bartlett-Sectional.png" },
  { name: "Treasury-Sectional", label: "Treasury Guild", image: "../images/maps/TheEyeMap/Treasury-Sectional.png" },
  { name: "Gear-Sectional", label: "Crystal Gear Factories", image: "../images/maps/TheEyeMap/Gear-Sectional.png" },
  { name: "Casho-Sectional", label: "House Casho", image: "../images/maps/TheEyeMap/Casho-Sectional.png" },
  { name: "Emrin-Sectional", label: "House Emrin", image: "../images/maps/TheEyeMap/Emrin-Sectional.png" },
  { name: "Mabre-Sectional", label: "House Mabre", image: "../images/maps/TheEyeMap/Mabre-Sectional.png" },
  { name: "Babel-Sectional", label: "Guild of Babel", image: "../images/maps/TheEyeMap/Babel-Sectional.png" },
  { name: "Theatre-Sectional", label: "Theatre Union", image: "../images/maps/TheEyeMap/Theatre-Sectional.png" },
  { name: "Conveyence-Sectional", label: "Conveyence Circulation", image: "../images/maps/TheEyeMap/Conveyence-Sectional.png" },
  { name: "Xeriman-Sectional", label: "House Xeriman", image: "../images/maps/TheEyeMap/Xeriman-Sectional.png" },
  { name: "Matron-Sectional", label: "The Matron", image: "../images/maps/TheEyeMap/Matron-Sectional.png" },
];
