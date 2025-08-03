export interface MenuItem {
  name: string;
  children?: MenuItem[];
}

export const menuData: MenuItem[] = [
  {
    name: "Character Creation",
    children: [
      { name: "Classes" },
      { name: "Races" },
      {
        name: "Origins",
        children: [
          {
            name: "Planets",
            children: [
              {
                name: "Esteria",
                children: [
                  { name: "Sera" },
                  { name: "Cazro El" },
                  { name: "El Castim" },
                  { name: "Aetember" },
                  { name: "Kaito" },
                ],
              },
              { name: "Beluus" },
              { name: "Naraka" },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Lore",
    children: [
      {
        name: "Planets",
        children: [
          { 
            name: "Esteria", 
            children: [
                { name: "Aetember" },
                { name: "Cazro"},
                { name: "Castim"},
                { name: "Kaito"},
                { name: "Nollun" },
                { name: "Sera"},
            ]
          },
          { name: "Beluus" },
          { name: "Naraka" },
        ],
      },
      { name: "Planes" },
    ],
  },
  { name: "Gods" },
  {
    name: "Maps",
    children: [
      { name: "TheEyeMap" },
      { name: "SeraMap" },
      { name: "PlanarMap" },
    ],
  },
  { name: "Players" },
];
