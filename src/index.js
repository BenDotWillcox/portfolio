import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import initDemoTabs from "./scripts/demoTabs";
import initSkillFilter from "./scripts/skillFilter";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();
initDemoTabs();
initSkillFilter();
