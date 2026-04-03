/**
 * Skill → Project relevance mapping.
 *
 * Each skill maps to an array of projects sorted by how well that project
 * showcases the skill.  `relevance` is 1–5 (5 = flagship demonstration).
 * `bestTab` (optional) is the demo-tab ID that best showcases the skill.
 */
const skillProjectMap = {
  // ── ML & Data Science ────────────────────────────────────────
  PyTorch: [
    { project: "hoopstats", relevance: 5 },
  ],
  OpenCV: [
    { project: "hoopstats", relevance: 5 },
  ],
  Huggingface: [
    { project: "hoopstats", relevance: 3 },
  ],
  Pandas: [
    { project: "hoopstats", relevance: 4 },
    { project: "valomapped", relevance: 3 },
  ],
  NumPy: [
    { project: "hoopstats", relevance: 4 },
    { project: "wc-draw-sim", relevance: 3, bestTab: "wc-stats" },
  ],
  "Weights & Biases": [
    { project: "hoopstats", relevance: 3 },
  ],
  "Statistical Modeling": [
    { project: "valomapped", relevance: 5, bestTab: "valo-rankings" },
    { project: "wc-draw-sim", relevance: 4, bestTab: "wc-stats" },
    { project: "march-madness", relevance: 3, bestTab: "mm-teams" },
    { project: "cooper-viz", relevance: 3, bestTab: "cooper-teams" },
  ],
  "Elo Systems": [
    { project: "valomapped", relevance: 5, bestTab: "valo-rankings" },
    { project: "cooper-viz", relevance: 5, bestTab: "cooper-teams" },
    { project: "march-madness", relevance: 3, bestTab: "mm-teams" },
  ],
  "Monte Carlo Simulation": [
    { project: "wc-draw-sim", relevance: 5, bestTab: "wc-stats" },
    { project: "valomapped", relevance: 5, bestTab: "valo-simulations" },
  ],
  "A/B Testing": [
    { project: "nebula-civitas", relevance: 3 },
  ],

  // ── Languages ────────────────────────────────────────────────
  Python: [
    { project: "hoopstats", relevance: 5 },
    { project: "nebula-civitas", relevance: 4 },
  ],
  R: [
    // No current projects heavily feature R
  ],
  SQL: [
    { project: "valomapped", relevance: 4, bestTab: "valo-record-book" },
    { project: "nebula-civitas", relevance: 3 },
    { project: "march-madness", relevance: 2 },
  ],
  TypeScript: [
    { project: "valomapped", relevance: 5, bestTab: "valo-rankings" },
    { project: "wc-draw-sim", relevance: 5, bestTab: "wc-draw" },
    { project: "march-madness", relevance: 4, bestTab: "mm-teams" },
    { project: "cooper-viz", relevance: 4, bestTab: "cooper-teams" },
    { project: "nebula-civitas", relevance: 3 },
  ],
  JavaScript: [
    { project: "valomapped", relevance: 4 },
    { project: "wc-draw-sim", relevance: 4 },
    { project: "march-madness", relevance: 3 },
    { project: "cooper-viz", relevance: 2 },
  ],

  // ── Web & Visualization ──────────────────────────────────────
  "Next.js": [
    { project: "valomapped", relevance: 5, bestTab: "valo-rankings" },
    { project: "wc-draw-sim", relevance: 5, bestTab: "wc-draw" },
    { project: "march-madness", relevance: 4, bestTab: "mm-teams" },
    { project: "cooper-viz", relevance: 4, bestTab: "cooper-teams" },
    { project: "nebula-civitas", relevance: 3 },
  ],
  React: [
    { project: "valomapped", relevance: 5, bestTab: "valo-rankings" },
    { project: "wc-draw-sim", relevance: 5, bestTab: "wc-draw" },
    { project: "march-madness", relevance: 4, bestTab: "mm-bracket" },
    { project: "cooper-viz", relevance: 4, bestTab: "cooper-teams" },
    { project: "nebula-civitas", relevance: 3 },
  ],
  "Tailwind CSS": [
    { project: "valomapped", relevance: 4, bestTab: "valo-rankings" },
    { project: "march-madness", relevance: 4, bestTab: "mm-teams" },
    { project: "cooper-viz", relevance: 4, bestTab: "cooper-teams" },
  ],
  Recharts: [
    { project: "valomapped", relevance: 5, bestTab: "valo-history" },
    { project: "cooper-viz", relevance: 5, bestTab: "cooper-teams" },
    { project: "wc-draw-sim", relevance: 4, bestTab: "wc-stats" },
    { project: "march-madness", relevance: 3, bestTab: "mm-compare" },
  ],
  Streamlit: [],
  "R Shiny": [],
  Matplotlib: [
    { project: "hoopstats", relevance: 3 },
  ],
  Seaborn: [
    { project: "hoopstats", relevance: 2 },
  ],
  ggplot2: [],

  // ── Data & Infrastructure ────────────────────────────────────
  PostgreSQL: [
    { project: "valomapped", relevance: 5, bestTab: "valo-rankings" },
    { project: "nebula-civitas", relevance: 4 },
  ],
  MySQL: [],
  "Drizzle ORM": [
    { project: "valomapped", relevance: 5, bestTab: "valo-rankings" },
    { project: "nebula-civitas", relevance: 4 },
  ],
  Supabase: [
    { project: "valomapped", relevance: 5, bestTab: "valo-rankings" },
    { project: "march-madness", relevance: 4, bestTab: "mm-teams" },
    { project: "nebula-civitas", relevance: 3 },
  ],
  "AWS RDS": [
    { project: "valomapped", relevance: 4 },
  ],
  Grafana: [
    { project: "valomapped", relevance: 2 },
  ],
  PowerBI: [],
  Tableau: [],
  Git: [
    { project: "valomapped", relevance: 3 },
    { project: "wc-draw-sim", relevance: 3 },
    { project: "march-madness", relevance: 3 },
    { project: "cooper-viz", relevance: 3 },
    { project: "hoopstats", relevance: 3 },
    { project: "nebula-civitas", relevance: 3 },
  ],
};

export default skillProjectMap;
