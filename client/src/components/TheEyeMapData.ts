// src/data/mapData.ts

export interface MapItem {
    name: string;
    label: string;
    image: string;
}

export interface POI {
    name: string;
    label: string;
    district: string;
    x: number; // These are percentages
    y: number;
}

export interface DemoOverlay {
    name: string;
    label: string;
    image: string;
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
    { name: "The Hippodrome", label: "Entertainment", district: "1", x: 48, y: 51.5 },
    { name: "Golden Grin Theatre", label: "Entertainment", district: "2", x: 50, y: 47 },
    { name: "Hippodrome Checkpoint", label: "Checkpoint", district: "3", x:50, y:50},
    { name: "Gear Customs", label: "Checkpoint", district: "3", x: 50, y: 50 },
    { name: "Bartlett Sanitorium", label: "Medical", district: "5", x: 50, y: 50 },
    { name: "Spellblade Emporium", label: "Shop", district: "5", x: 50, y: 50 },
    { name: "Tailwind Marina", label: "Dock", district: "6", x: 50, y: 50 },
    { name: "Second Sin (Ærotes)", label: "Church", district: "6", x: 50, y: 50 },
    { name: "Pursuit of Happiness (Dalia)", label: "Church", district: "7", x: 50, y: 50 },
    { name: "Crystal Gear Metalworks", label: "Industry", district: "8", x: 50, y: 50 },
    { name: "Broadsheet Press", label: "Other", district: "9", x: 50, y: 50 },
    { name: "Prince Bartlett's Palace", label: "Residence", district: "11", x: 50, y: 50 },
    { name: "Heads & Tails Casino", label: "Entertainment", district: "15", x: 50, y: 50 },
    { name: "Mabre Manor", label: "Residence", district: "16", x: 50, y: 50 },
    { name: "Fu's Church of Trade", label: "Church", district: "17", x: 50, y: 50 },
    { name: "Clockwork Cathedral (Talos)", label: "Church", district: "18", x: 50, y: 50 },
    { name: "Temple of the Free Spirit (Ama)", label: "Church", district: "19", x: 50, y: 50 },
    { name: "St. Galmune's Temple (Vinh)", label: "Church", district: "21", x: 50, y: 50 },
    { name: "Second Sun Church (Ciro)", label: "Church", district: "23", x: 50, y: 50 },
    { name: "Deadlight Inn", label: "Lodging", district: "23", x: 50, y: 50 },
    { name: "Kraken's Reach Inn", label: "Lodging", district: "24", x: 50, y: 50 },
    { name: "Teuila Manor", label: "Residence", district: "24", x: 50, y: 50 },
    { name: "Table of the Giants", label: "Other", district: "24", x: 50, y: 50 },
    { name: "First Bank of the Matron", label: "Other", district: "25", x: 50, y: 50 },
    { name: "Vinykiy Market", label: "Shop", district: "25", x: 50, y: 50 },
    { name: "Crystal Gear HQ", label: "Industry", district: "27", x: 50, y: 50 },
    { name: "Food Processing", label: "Industry", district: "27", x: 50, y: 50 },
    { name: "Mabre Fleet", label: "Dock", district: "28", x: 50, y: 50 },
    { name: "Mabre Dry Docks", label: "Dock", district: "29", x: 50, y: 50 },
    { name: "Westward Exploration HQ", label: "Education", district: "29", x: 50, y: 50 },
    { name: "Mabre Naval Academy", label: "Education", district: "31", x: 50, y: 50 },
    { name: "Kinsmen Manor", label: "Residence", district: "32", x: 50, y: 50 },
    { name: "Bartlett Institute", label: "Education", district: "33", x: 50, y: 50 },
    { name: "St. Gredin Grand Library", label: "Education", district: "34", x: 50, y: 50 },
    { name: "Black Bay Authority", label: "Other", district: "35", x: 50, y: 50 },
    { name: "Crystal Gear Automaton Factory", label: "Industry", district: "36", x: 50, y: 50 },
    { name: "Crystal Gear Textile Factory", label: "Industry", district: "37", x: 50, y: 50 },
    { name: "Crystal Gear Automaton Technical", label: "Education", district: "41", x: 50, y: 50 },
    { name: "Babel Schools of Trade", label: "Education", district: "42", x: 50, y: 50 },
    { name: "Babel Culinary Arts", label: "Education", district: "43", x: 50, y: 50 },
    { name: "Grand Church of Vestia", label: "Church", district: "44", x: 50, y: 50 },
    { name: "Voldvel Nocturnum", label: "Other", district: "44", x: 50, y: 50 },
    { name: "Library of Last Thought", label: "Education", district: "45", x: 50, y: 50 },
    { name: "White Rose Winery", label: "Industry", district: "46", x: 50, y: 50 },
    { name: "Crimson Rampart Authority", label: "Other", district: "47", x: 50, y: 50 },
    { name: "Last Light Armory", label: "Shop", district: "47", x: 50, y: 50 },
    { name: "Explorers' Guild", label: "Other", district: "48", x: 50, y: 50 },
    { name: "First Note (Kynthis)", label: "Church", district: "49", x: 50, y: 50 },
    { name: "Repent (Nalea)", label: "Church", district: "49", x: 50, y: 50 },
    { name: "Abbadon Embassy", label: "Checkpoint", district: "50", x: 50, y: 50 },
    { name: "Red Baron Wardrobe", label: "Shop", district: "50", x: 50, y: 50 },
    { name: "Twin Head Customs", label: "Checkpoint", district: "51", x: 50, y: 50 },
    { name: "Illuminate's School of Sorcery", label: "Education", district: "52", x: 50, y: 50 },
    { name: "Thordell's School of Wizardry", label: "Education", district: "52", x: 50, y: 50 },
    { name: "Kaiman's School of Magic", label: "Education", district: "52", x: 50, y: 50 },
    { name: "Theatre Arts School", label: "Education", district: "53", x: 50, y: 50 },
    { name: "Second Church (Barakat)", label: "Church", district: "54", x: 50, y: 50 },
    { name: "Grand Treasury", label: "Other", district: "55", x: 50, y: 50 },
    { name: "Seraph's Embrace", label: "Medical", district: "56", x: 50, y: 50 },
    { name: "Devil's Point", label: "Shop", district: "56", x: 50, y: 50 },
    { name: "Slaughterguarde Authority", label: "Other", district: "57", x: 50, y: 50 },
    { name: "Last Rest Inn", label: "Lodging", district: "59", x: 50, y: 50 },
    { name: "Northern Customs", label: "Checkpoint", district: "61", x: 50, y: 50 },
    { name: "Abbadon Customs", label: "Checkpoint", district: "62", x: 50, y: 50 },
    { name: "Bartlett's Royal Court", label: "Other", district: "63", x: 50, y: 50 },
    { name: "Southern Customs", label: "Checkpoint", district: "64", x: 50, y: 50 },
    { name: "Open Book Church (Ixe)", label: "Church", district: "66", x: 50, y: 50 },
    { name: "Slaughterguarde Checkpoint", label: "Checkpoint", district: "68", x: 50, y: 50 },
    { name: "Bountiful Harvest (Sytnik)", label: "Church", district: "69", x: 50, y: 50 },
    { name: "The Matron's Tower", label: "Residence", district: "1M", x: 13.9, y: 67.5 },
    { name: "South City Water", label: "Industry", district: "2M", x: 50, y: 50 },
    { name: "North City Water", label: "Industry", district: "3M", x: 50, y: 50 },
    { name: "House of the Rising Jackal", label: "Residence", district: "4M", x: 50, y: 50 },
    { name: "Platinum Crest HQ", label: "Other", district: "5M", x: 50, y: 50 },
    { name: "Xeriman's First Estate", label: "Residence", district: "1F", x: 45, y: 45 },
    { name: "Red Mirror Tavern:", label: "Lodging", district: "1F", x: 50, y: 50 },
    { name: "Kynthis Run Inn", label: "Lodging", district: "2F", x: 50, y: 50 },
    { name: "Xeriman's Second Estate", label: "Residence", district: "3F", x: 50, y: 50 },
    { name: "Gunther's Stables", label: "Shop", district: "4F", x: 50, y: 50 },
];

export const DemographicOverlays: DemoOverlay[] = [
    { name: "The Sail", label: "The Sail", image: "../images/maps/TheEyeMap/Sail-Overlay.png" },
    { name: "The Books", label: "The Books", image: "../images/maps/TheEyeMap/Books-Overlay.png" },
    { name: "The Peninsula", label: "The Peninsula", image: "../images/maps/TheEyeMap/Peninsula-Overlay.png" },
    { name: "The Gods", label: "The Gods", image: "../images/maps/TheEyeMap/Gods-Overlay.png" },
    { name: "The Chariot", label: "The Chariot", image: "../images/maps/TheEyeMap/Chariot-Overlay.png" },
    { name: "The Shavings", label: "The Shavings", image: "../images/maps/TheEyeMap/Shavings-Overlay.png" },
    { name: "The Foxes", label: "The Foxes", image: "../images/maps/TheEyeMap/Foxes-Overlay.png" },
    { name: "The Flag", label: "The Flag", image: "../images/maps/TheEyeMap/Flag-Overlay.png" },
]

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
