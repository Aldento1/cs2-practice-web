export interface Callout {
  id: string;
  name: string;
  top: number;
  left: number;
  width: number;
  height: number;
}

export const ancientCallouts: Callout[] = [
  // --- A SITE & WEST ---
  { id: "plat", name: "PLAT", left: 13.18, top: 17.38, width: 8.79, height: 5.86 },
  { id: "single", name: "SINGLE", left: 16.41, top: 20.12, width: 5.86, height: 3.91 },
  { id: "big_box", name: "BIG BOX", left: 18.75, top: 25.39, width: 7.32, height: 4.88 },
  { id: "a_site", name: "A SITE", left: 27.83, top: 26.86, width: 9.77, height: 9.77 },
  { id: "triple_box", name: "TRIPLE BOX", left: 35.64, top: 31.74, width: 8.79, height: 5.86 },
  { id: "temple", name: "TEMPLE", left: 34.67, top: 14.16, width: 12.7, height: 7.81 },
  { id: "ct_lane", name: "CT LANE", left: 37.6, top: 21.29, width: 9.77, height: 4.39 },
  { id: "boost", name: "BOOST", left: 21.97, top: 33.69, width: 8.3, height: 3.91 },
  { id: "short", name: "SHORT", left: 29.79, top: 37.6, width: 4.88, height: 10.74 },
  { id: "a_main", name: "A MAIN", left: 17.09, top: 40.53, width: 12.7, height: 4.88 },
  { id: "a_halls", name: "A HALLS", left: 21.0, top: 49.32, width: 4.88, height: 17.58 },
  { id: "stairs", name: "STAIRS", left: 19.04, top: 58.11, width: 8.79, height: 5.86 },
  { id: "donut", name: "DONUT", left: 28.81, top: 46.39, width: 11.72, height: 11.72 },
  { id: "split", name: "SPLIT", left: 27.83, top: 66.89, width: 10.74, height: 7.81 },

  // --- MID ---
  { id: "snipers_nest", name: "SNIPERS NEST", left: 46.39, top: 28.81, width: 9.77, height: 5.86 },
  { id: "top_mid", name: "TOP MID", left: 46.39, top: 38.57, width: 9.77, height: 9.77 },
  { id: "pit", name: "PIT", left: 51.27, top: 46.39, width: 7.81, height: 4.88 },
  { id: "mid", name: "MID", left: 46.39, top: 53.22, width: 10.74, height: 11.72 },
  { id: "xbox", name: "XBOX", left: 46.39, top: 58.11, width: 7.32, height: 3.91 },
  { id: "window", name: "WINDOW", left: 52.25, top: 62.99, width: 7.81, height: 4.88 },
  { id: "heaven", name: "HEAVEN", left: 58.11, top: 60.06, width: 8.79, height: 4.39 },
  { id: "elbow", name: "ELBOW", left: 37.6, top: 58.11, width: 8.79, height: 4.39 },

  // --- B SITE & EAST ---
  { id: "alley", name: "ALLEY", left: 60.06, top: 25.88, width: 9.77, height: 4.88 },
  { id: "back_halls", name: "BACK HALLS", left: 74.71, top: 25.88, width: 17.58, height: 4.88 },
  { id: "square", name: "SQUARE", left: 74.71, top: 33.69, width: 12.7, height: 12.7 },
  { id: "dark", name: "DARK", left: 61.04, top: 45.41, width: 4.88, height: 11.72 },
  { id: "house", name: "HOUSE", left: 64.94, top: 41.5, width: 4.88, height: 14.65 },
  { id: "b_site", name: "B SITE", left: 74.71, top: 46.39, width: 13.67, height: 10.74 },
  { id: "pillar", name: "PILLAR", left: 74.71, top: 41.5, width: 6.84, height: 6.84 },
  { id: "lamp_room", name: "LAMP ROOM", left: 61.04, top: 52.25, width: 9.77, height: 7.81 },
  { id: "t_lower", name: "T LOWER", left: 73.73, top: 58.11, width: 9.77, height: 6.35 },
  { id: "ramp", name: "RAMP", left: 80.57, top: 54.2, width: 5.86, height: 16.6 },
  { id: "doors", name: "DOORS", left: 80.57, top: 62.99, width: 6.84, height: 4.88 },
  { id: "ruins", name: "RUINS", left: 76.66, top: 69.82, width: 11.72, height: 11.72 },

  // --- SPAWNS & MISC ---
  { id: "ct_spawn", name: "CT SPAWN", left: 48.83, top: 12.7, width: 14.65, height: 14.65 },
  { id: "t_spawn", name: "T SPAWN", left: 47.36, top: 85.94, width: 13.67, height: 13.67 },
  { id: "water", name: "WATER", left: 68.85, top: 78.61, width: 5.37, height: 14.65 },
  { id: "tunnel", name: "TUNNEL", left: 57.13, top: 78.61, width: 12.7, height: 4.39 },
];