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
  { id: "plat", name: "A PLATFORM / A BACKSITE", left: 17.18, top: 20.38, width: 8.79, height: 5.86 },
  { id: "big_box", name: "A BIG BOX", left: 22.75, top: 25.39, width: 5, height: 5 },
  { id: "triple_box", name: "TRIPLE BOX A / HEADSHOT", left: 35.64, top: 26.74, width: 4.79, height: 5.86 },
  { id: "temple", name: "TEMPLE A", left: 34.67, top: 15.16, width: 12.7, height: 7.81 },
  { id: "ct_lane", name: "CT LANE A", left: 37.6, top: 21.29, width: 9.77, height: 4.39 },
  { id: "boost", name: "A BOOST", left: 21.97, top: 33.69, width: 8.3, height: 3.91 },
  { id: "short", name: "A SHORT (donut close(xd))", left: 31, top: 36.5, width: 4.88, height: 9 },
  { id: "a_main", name: "A MAIN", left: 18.09, top: 45.53, width: 12.7, height: 15.88 },
  { id: "stairs", name: "STAIRS A", left: 22, top: 56, width: 8.79, height: 8},
  { id: "donut", name: "DONUT A", left: 30.81, top: 45.5, width: 10, height: 9 },
  { id: "split", name: "SPLIT/YARD/JUNGLE", left: 30.83, top: 68, width: 13, height: 11 },

  // --- MID ---
  { id: "snipers_nest", name: "SNIPERS NEST / RED ROOM", left: 46.39, top: 28.81, width: 8.5, height: 9 },
  { id: "top_mid", name: "TOP MID", left: 47.5, top: 39, width: 8, height: 12 },
  { id: "pit", name: "PIT / CUBBY", left: 53, top: 46.39, width: 7.81, height: 4.88 },
  { id: "mid", name: "MID", left: 47.5, top: 52, width: 10.74, height: 8 },
  { id: "xbox", name: "XBOX", left: 50, top: 58.11, width: 6, height: 3.91 },
  { id: "heaven", name: "HEAVEN", left: 60, top: 58, width: 13, height: 5 },
  { id: "elbow", name: "ELBOW / LOWER MID", left: 37.6, top: 58.11, width: 10, height: 9 },

  // --- B SITE & EAST ---
  { id: "alley", name: "ALLEY / NEAR BOX CT", left: 60.06, top: 25.88, width: 9.77, height: 4.88 },
  { id: "ct_lane_b", name: "CT LANE B", left: 74.71, top: 25.88, width: 17.58, height: 4.88 },
  { id: "b_short", name: "B SHORT", left: 71, top: 32.69, width: 5, height: 10.5 },
  { id: "b_LONG", name: "B LONG", left: 82.5, top: 32.69, width: 6, height: 10.5 },
  { id: "cave", name: "HOUSE / CAVE", left: 66.5, top: 41.5, width: 4.88, height: 14.65 },
  { id: "pillar", name: "PILLAR", left: 74.71, top: 41.5, width: 6.84, height: 6.84 },
  { id: "lamp_room", name: "LAMP ROOM / CAT ROOM", left: 61.04, top: 52.25, width: 9.77, height: 7.81 },
  { id: "t_lower", name: "T LOWER / LANE", left: 73.73, top: 57.11, width: 9.77, height: 6.35 },
  { id: "ramp", name: "RAMP", left: 82, top: 53, width: 5.86, height: 14 },
  { id: "doors", name: "DOORS", left: 79, top: 63, width: 6.84, height: 6 },
  { id: "ruins", name: "RUINS / OUTSIDE B", left: 76.66, top: 69.82, width: 11.72, height: 11.72 },

  // --- SPAWNS & MISC ---
  { id: "ct_spawn", name: "CT SPAWN", left: 51, top: 15, width: 12, height: 15 },
  { id: "t_spawn", name: "T SPAWN", left: 48, top: 82, width: 11, height: 18 },
  { id: "water", name: "WATER", left: 70, top: 78.61, width: 5.37, height: 14.65 },
  { id: "tunnel", name: "TUNNEL", left: 59.5, top: 78.61, width: 15, height: 4.39 },
];