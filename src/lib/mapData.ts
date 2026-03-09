export interface Callout {
  id: string;
  name: string;
  top: number;
  left: number;
  width: number;
  height: number;
}

export const ancientCallouts: Callout[] = [
  // --- A SITE & SURROUNDINGS (LEWA STRONA) ---
  { id: "plat_single", name: "PLATFORM / BACKSITE", top: 16, left: 13, width: 7, height: 9 },
  { id: "Single", name: "Single", top: 19, left: 20.5, width: 4.5, height: 4 },
  { id: "big_box", name: "BIG BOX", top: 24, left: 19.5, width: 5, height: 5 },
  { id: "a_site", name: "A SITE", top: 23.5, left: 27, width: 8, height: 8 },
  { id: "triple_box", name: "TRIPLE BOX", top: 26, left: 34, width: 4, height: 5 },
  { id: "temple", name: "TEMPLE", top: 13, left: 28, width: 11, height: 7 },
  { id: "ct_lane", name: "CT LANE", top: 19, left: 36, width: 10, height: 5 },
  { id: "boost", name: "BOOST", top: 32, left: 20, width: 6, height: 4 },
  { id: "a_short", name: "A SHORT", top: 33, left: 29, width: 4, height: 8 },
  { id: "a_main", name: "A MAIN", top: 36, left: 11, width: 8, height: 16 },
  { id: "a_halls", name: "A HALLS", top: 39, left: 21, width: 4, height: 16 },
  { id: "stairs", name: "STAIRS", top: 57, left: 18, width: 6, height: 5 },
  { id: "Donut", name: "DONUT / TUNNELS", top: 42, left: 26, width: 10, height: 9 },

  // --- MID & CONNECTIONS (ŚRODEK) ---
  { id: "snipers_nest", name: "SNIPERS NEST", top: 27, left: 46, width: 5, height: 5 },
  { id: "top_mid", name: "TOP MID", top: 35, left: 43, width: 8, height: 8 },
  { id: "pit", name: "PIT / CUBBY", top: 45, left: 48, width: 6, height: 5 },
  { id: "mid", name: "MID", top: 48, left: 43, width: 8, height: 8 },
  { id: "xbox", name: "XBOX", top: 56, left: 44, width: 6, height: 3 },
  { id: "window", name: "WINDOW", top: 62, left: 51, width: 4, height: 4 },
  { id: "heaven", name: "HEAVEN", top: 58, left: 55, width: 6, height: 3 },
  { id: "elbow", name: "ELBOW", top: 56, left: 35, width: 6, height: 3 },
  { id: "split", name: "SPLIT", top: 64, left: 23, width: 9, height: 6 },

  // --- B SITE & SURROUNDINGS (PRAWA STRONA) ---
  { id: "alley", name: "ALLEY", top: 24, left: 57, width: 7, height: 4 },
  { id: "back_halls", name: "BACK HALLS", top: 24, left: 65, width: 16, height: 5 },
  { id: "square", name: "SQUARE", top: 30, left: 72, width: 11, height: 11 },
  { id: "dark", name: "DARK", top: 39, left: 59, width: 4, height: 9 },
  { id: "house", name: "HOUSE", top: 36, left: 64, width: 4, height: 11 },
  { id: "pillar", name: "PILLAR", top: 45, left: 74.5, width: 3.5, height: 3.5 },
  { id: "b_site", name: "B SITE", top: 42, left: 70, width: 12, height: 10 },
  { id: "lamp_room", name: "LAMP ROOM", top: 49, left: 58, width: 6, height: 6 },
  { id: "t_lower", name: "T LOWER", top: 56, left: 69, width: 7, height: 5 },
  { id: "ramp", name: "RAMP", top: 50, left: 82, width: 5, height: 12 },
  { id: "doors", name: "DOORS", top: 60, left: 80, width: 4, height: 3 },
  { id: "ruins", name: "RUINS", top: 64, left: 75, width: 9, height: 9 },

  // --- SPAWNS & BASIC AREAS (DÓŁ/GÓRA) ---
  { id: "ct_spawn", name: "CT SPAWN", top: 6, left: 45, width: 15, height: 13 },
  { id: "t_spawn", name: "T SPAWN", top: 83, left: 43, width: 13, height: 10 },
  { id: "water", name: "WATER", top: 74, left: 67, width: 4, height: 10 },
  { id: "tunnel", name: "TUNNEL (Lower)", top: 77, left: 53, width: 10, height: 3 },
];