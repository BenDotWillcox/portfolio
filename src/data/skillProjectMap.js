/**
 * Skill -> Project relevance mapping.
 *
 * Relevance scale:
 * 5 = the best current portfolio showcase for the skill
 * 4 = a strong, central use of the skill
 * 3 = the project touches the skill in a meaningful but secondary way
 *
 * `bestTab` is the demo tab that most directly demonstrates the skill.
 */
const skillProjectMap = {
  // ML & Data Science
  PyTorch: [
    { project: "benbot", relevance: 5, bestTab: "benbot-play" },
    { project: "hoopstats", relevance: 4, bestTab: "hoopstats-tracking" },
  ],
  OpenCV: [
    { project: "hoopstats", relevance: 5, bestTab: "hoopstats-court-map" },
  ],
  Roboflow: [
    { project: "hoopstats", relevance: 5, bestTab: "hoopstats-tracking" },
  ],
  SAM2: [
    { project: "hoopstats", relevance: 5, bestTab: "hoopstats-tracking" },
  ],
  PaddleOCR: [
    { project: "hoopstats", relevance: 5, bestTab: "hoopstats-roadmap" },
  ],
  Huggingface: [
    { project: "benbot", relevance: 5, bestTab: "benbot-play" },
    { project: "hoopstats", relevance: 3, bestTab: "hoopstats-tracking" },
  ],
  Pandas: [
    { project: "pga-golf", relevance: 5, bestTab: "pga-explorer" },
    { project: "hoopstats", relevance: 4, bestTab: "hoopstats-pipeline" },
    { project: "nebula-civitas", relevance: 3, bestTab: "voting-methods" },
  ],
  NumPy: [
    { project: "hoopstats", relevance: 5, bestTab: "hoopstats-court-map" },
    { project: "pga-golf", relevance: 4, bestTab: "pga-clusters" },
    { project: "wc-draw-sim", relevance: 3, bestTab: "wc-stats" },
  ],
  "Weights & Biases": [
    { project: "hoopstats", relevance: 5, bestTab: "hoopstats-tracking" },
  ],
  "scikit-learn": [
    { project: "pga-golf", relevance: 5, bestTab: "pga-clusters" },
  ],
  "Statistical Modeling": [
    { project: "valomapped", relevance: 5, bestTab: "valo-rankings" },
    { project: "pga-golf", relevance: 4, bestTab: "pga-fit" },
    { project: "wc-draw-sim", relevance: 4, bestTab: "wc-stats" },
    { project: "march-madness", relevance: 3, bestTab: "mm-teams" },
    { project: "cooper-viz", relevance: 3, bestTab: "cooper-teams" },
    { project: "nebula-civitas", relevance: 3, bestTab: "voting-methods" },
  ],
  "Elo Systems": [
    { project: "valomapped", relevance: 5, bestTab: "valo-rankings" },
    { project: "cooper-viz", relevance: 4, bestTab: "cooper-teams" },
    { project: "march-madness", relevance: 3, bestTab: "mm-teams" },
  ],
  "Monte Carlo Simulation": [
    { project: "valomapped", relevance: 5, bestTab: "valo-simulations" },
    { project: "wc-draw-sim", relevance: 4, bestTab: "wc-stats" },
  ],
  "A/B Testing": [
    { project: "valomapped", relevance: 5, bestTab: "valo-pick-ban" },
    { project: "nebula-civitas", relevance: 4, bestTab: "voting-methods" },
  ],

  // Languages
  Python: [
    { project: "hoopstats", relevance: 5, bestTab: "hoopstats-pipeline" },
    { project: "benbot", relevance: 4, bestTab: "benbot-play" },
    { project: "pga-golf", relevance: 4, bestTab: "pga-clusters" },
    { project: "nebula-civitas", relevance: 4, bestTab: "voting-methods" },
  ],
  R: [],
  SQL: [
    { project: "valomapped", relevance: 5, bestTab: "valo-record-book" },
    { project: "nebula-civitas", relevance: 4, bestTab: "voting-methods" },
    { project: "march-madness", relevance: 3, bestTab: "mm-teams" },
  ],
  TypeScript: [
    { project: "valomapped", relevance: 5, bestTab: "valo-rankings" },
    { project: "wc-draw-sim", relevance: 4, bestTab: "wc-draw" },
    { project: "march-madness", relevance: 4, bestTab: "mm-bracket" },
    { project: "cooper-viz", relevance: 4, bestTab: "cooper-teams" },
    { project: "nebula-civitas", relevance: 4, bestTab: "voting-districts" },
  ],
  JavaScript: [
    { project: "benbot", relevance: 5, bestTab: "benbot-play" },
    { project: "valomapped", relevance: 4, bestTab: "valo-rankings" },
    { project: "wc-draw-sim", relevance: 4, bestTab: "wc-draw" },
    { project: "march-madness", relevance: 3, bestTab: "mm-bracket" },
    { project: "cooper-viz", relevance: 3, bestTab: "cooper-teams" },
  ],

  // Web & Visualization
  "Next.js": [
    { project: "valomapped", relevance: 5, bestTab: "valo-rankings" },
    { project: "wc-draw-sim", relevance: 4, bestTab: "wc-draw" },
    { project: "march-madness", relevance: 4, bestTab: "mm-bracket" },
    { project: "cooper-viz", relevance: 4, bestTab: "cooper-teams" },
    { project: "nebula-civitas", relevance: 4, bestTab: "voting-districts" },
  ],
  React: [
    { project: "valomapped", relevance: 5, bestTab: "valo-history" },
    { project: "wc-draw-sim", relevance: 4, bestTab: "wc-draw" },
    { project: "march-madness", relevance: 4, bestTab: "mm-bracket" },
    { project: "cooper-viz", relevance: 4, bestTab: "cooper-teams" },
    { project: "nebula-civitas", relevance: 4, bestTab: "voting-methods" },
  ],
  FastAPI: [
    { project: "benbot", relevance: 5, bestTab: "benbot-play" },
  ],
  "Tailwind CSS": [
    { project: "valomapped", relevance: 5, bestTab: "valo-rankings" },
    { project: "march-madness", relevance: 4, bestTab: "mm-teams" },
    { project: "cooper-viz", relevance: 4, bestTab: "cooper-rankings" },
    { project: "nebula-civitas", relevance: 4, bestTab: "voting-districts" },
  ],
  Recharts: [
    { project: "valomapped", relevance: 5, bestTab: "valo-history" },
    { project: "cooper-viz", relevance: 4, bestTab: "cooper-teams" },
    { project: "march-madness", relevance: 4, bestTab: "mm-compare" },
    { project: "wc-draw-sim", relevance: 3, bestTab: "wc-stats" },
    { project: "nebula-civitas", relevance: 3, bestTab: "voting-districts" },
  ],
  Plotly: [
    { project: "pga-golf", relevance: 5, bestTab: "pga-clusters" },
  ],
  Streamlit: [
    { project: "pga-golf", relevance: 5, bestTab: "pga-clusters" },
  ],
  "R Shiny": [],
  Matplotlib: [
    { project: "hoopstats", relevance: 5, bestTab: "hoopstats-pipeline" },
    { project: "pga-golf", relevance: 3, bestTab: "pga-clusters" },
  ],
  Seaborn: [
    { project: "hoopstats", relevance: 5, bestTab: "hoopstats-pipeline" },
    { project: "pga-golf", relevance: 3, bestTab: "pga-explorer" },
  ],
  ggplot2: [],

  // Data & Infrastructure
  PostgreSQL: [
    { project: "valomapped", relevance: 5, bestTab: "valo-record-book" },
    { project: "nebula-civitas", relevance: 4, bestTab: "voting-methods" },
  ],
  MySQL: [],
  "Drizzle ORM": [
    { project: "valomapped", relevance: 5, bestTab: "valo-record-book" },
    { project: "nebula-civitas", relevance: 4, bestTab: "voting-methods" },
  ],
  Supabase: [
    { project: "valomapped", relevance: 5, bestTab: "valo-record-book" },
    { project: "march-madness", relevance: 4, bestTab: "mm-teams" },
    { project: "nebula-civitas", relevance: 4, bestTab: "voting-methods" },
  ],
  "AWS RDS": [
    { project: "valomapped", relevance: 5, bestTab: "valo-record-book" },
  ],
  Grafana: [
    { project: "valomapped", relevance: 5, bestTab: "valo-record-book" },
  ],
  PowerBI: [],
  Tableau: [],
  SciPy: [
    { project: "pga-golf", relevance: 5, bestTab: "pga-clusters" },
    { project: "hoopstats", relevance: 4, bestTab: "hoopstats-roadmap" },
  ],
  "Data Golf API": [
    { project: "pga-golf", relevance: 5, bestTab: "pga-explorer" },
  ],
  Git: [
    { project: "valomapped", relevance: 3, bestTab: "valo-rankings" },
    { project: "benbot", relevance: 3, bestTab: "benbot-play" },
    { project: "wc-draw-sim", relevance: 3, bestTab: "wc-draw" },
    { project: "march-madness", relevance: 3, bestTab: "mm-bracket" },
    { project: "cooper-viz", relevance: 3, bestTab: "cooper-teams" },
    { project: "pga-golf", relevance: 3, bestTab: "pga-clusters" },
    { project: "hoopstats", relevance: 3, bestTab: "hoopstats-pipeline" },
    { project: "nebula-civitas", relevance: 3, bestTab: "voting-methods" },
  ],
};

export default skillProjectMap;
