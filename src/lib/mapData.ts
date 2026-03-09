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
  { id: "plat_single", name: "PLAT / SINGLE", top: 18, left: 14, width: 8, height: 8 },
  { id: "big_box", name: "BIG BOX", top: 23, left: 20, width: 5, height: 5 },
  { id: "a_site", name: "A SITE", top: 27, left: 24, width: 9, height: 9 },
  { id: "triple_box", name: "TRIPLE BOX", top: 29, left: 32, width: 4, height: 4 },
  { id: "temple", name: "TEMPLE", top: 12, left: 28, width: 10, height: 8 },
  { id: "ct_lane", name: "CT LANE", top: 21, left: 33, width: 10, height: 5 },
  { id: "long", name: "LONG", top: 32, left: 13, width: 5, height: 10 },
  { id: "boost", name: "BOOST", top: 32, left: 19, width: 6, height: 4 },
  { id: "short", name: "SHORT", top: 33, left: 29, width: 4, height: 8 },
  { id: "a_main", name: "A MAIN", top: 38, left: 11, width: 6, height: 6 },
  { id: "a_halls", name: "A HALLS", top: 40, left: 19, width: 4, height: 15 },
  { id: "stairs", name: "STAIRS", top: 56, left: 17, width: 5, height: 5 },
  { id: "tunnels", name: "TUNNELS", top: 43, left: 24, width: 7, height: 6 },

  // --- MID & CONNECTIONS (ŚRODEK) ---
  { id: "snipers_nest", name: "SNIPERS NEST", top: 28, left: 45, width: 4, height: 4 },
  { id: "top_mid", name: "TOP MID", top: 35, left: 43, width: 8, height: 8 },
  { id: "pit", name: "PIT", top: 45, left: 48, width: 6, height: 5 },
  { id: "mid", name: "MID", top: 49, left: 43, width: 8, height: 8 },
  { id: "xbox", name: "XBOX", top: 56, left: 44, width: 6, height: 3 },
  { id: "window", name: "WINDOW", top: 61, left: 50, width: 4, height: 4 },
  { id: "heaven", name: "HEAVEN", top: 58, left: 54, width: 6, height: 3 },
  { id: "elbow", name: "ELBOW", top: 56, left: 35, width: 6, height: 3 },
  { id: "split", name: "SPLIT", top: 63, left: 23, width: 8, height: 6 },

  // --- B SITE & SURROUNDINGS (PRAWA STRONA) ---
  { id: "alley", name: "ALLEY", top: 24, left: 57, width: 7, height: 4 },
  { id: "back_halls", name: "BACK HALLS", top: 24, left: 66, width: 14, height: 4 },
  { id: "square", name: "SQUARE", top: 28, left: 71, width: 10, height: 10 },
  { id: "dark", name: "DARK", top: 38, left: 59, width: 4, height: 10 },
  { id: "house", name: "HOUSE", top: 36, left: 63, width: 5, height: 10 },
  { id: "pillar", name: "PILLAR", top: 41, left: 74, width: 3, height: 3 },
  { id: "b_site", name: "B SITE", top: 43, left: 70, width: 10, height: 9 },
  { id: "lamp_room", name: "LAMP ROOM", top: 49, left: 57, width: 6, height: 6 },
  { id: "t_lower", name: "T LOWER", top: 56, left: 69, width: 7, height: 5 },
  { id: "ramp", name: "RAMP", top: 47, left: 81, width: 4, height: 10 },
  { id: "doors", name: "DOORS", top: 60, left: 79, width: 4, height: 3 },
  { id: "ruins", name: "RUINS", top: 63, left: 74, width: 8, height: 8 },

  // --- SPAWNS & BASIC AREAS (DÓŁ/GÓRA) ---
  { id: "ct_spawn", name: "CT SPAWN", top: 6, left: 43, width: 13, height: 12 },
  { id: "t_spawn", name: "T SPAWN", top: 82, left: 42, width: 11, height: 9 },
  { id: "water", name: "WATER", top: 73, left: 66, width: 4, height: 10 },
  { id: "tunnel", name: "TUNNEL (Lower)", top: 77, left: 53, width: 10, height: 3 },
];