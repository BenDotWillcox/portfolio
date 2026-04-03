/**
 * Skill Filter — clicking a skill pill reorders projects by relevance
 * and auto-activates the best demo tab for that skill.
 */
import skillProjectMap from "../data/skillProjectMap";

export default function initSkillFilter() {
  const pills = document.querySelectorAll(".skill-pill");
  const projectWrapper = document.querySelector(".project-wrapper");
  if (!projectWrapper) return;

  const projectCards = () => [...projectWrapper.querySelectorAll(".project-card")];
  let activeSkill = null;

  // Add a clear-filter button (hidden by default)
  const clearBtn = document.createElement("button");
  clearBtn.className = "skill-clear-btn";
  clearBtn.textContent = "Clear filter";
  clearBtn.setAttribute("aria-label", "Clear skill filter");
  const skillsSection = document.querySelector("#skills .skills-wrapper");
  if (skillsSection) skillsSection.appendChild(clearBtn);

  clearBtn.addEventListener("click", () => resetFilter());

  // Sticky top banner showing active filter
  const banner = document.createElement("div");
  banner.className = "skill-filter-banner";
  banner.innerHTML = `
    <span class="skill-filter-banner__label">Sorted by:</span>
    <span class="skill-filter-banner__skill"></span>
    <button class="skill-filter-banner__close" aria-label="Clear skill filter">&times;</button>
  `;
  document.body.appendChild(banner);

  const bannerSkill = banner.querySelector(".skill-filter-banner__skill");
  const bannerClose = banner.querySelector(".skill-filter-banner__close");
  bannerClose.addEventListener("click", () => {
    resetFilter();
    const skillsSectionEl = document.querySelector("#skills");
    if (skillsSectionEl) {
      skillsSectionEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });

  pills.forEach((pill) => {
    pill.style.cursor = "pointer";
    pill.setAttribute("role", "button");
    pill.setAttribute("tabindex", "0");

    pill.addEventListener("click", () => handleSkillClick(pill));
    pill.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleSkillClick(pill);
      }
    });
  });

  function handleSkillClick(pill) {
    const skill = pill.textContent.trim();

    // Toggle off if same skill clicked again
    if (activeSkill === skill) {
      resetFilter();
      return;
    }

    activeSkill = skill;

    // Update pill active states
    pills.forEach((p) => p.classList.remove("skill-pill--active"));
    pill.classList.add("skill-pill--active");

    // Show clear button and sticky banner
    clearBtn.classList.add("skill-clear-btn--visible");
    bannerSkill.textContent = skill;
    banner.classList.add("skill-filter-banner--visible");

    // Get relevance mapping for this skill
    const mapping = skillProjectMap[skill] || [];
    const relevanceMap = new Map(mapping.map((m) => [m.project, m]));

    const cards = projectCards();

    // Remove old badges
    cards.forEach((card) => {
      const badge = card.querySelector(".skill-match-badge");
      if (badge) badge.remove();
    });

    // Sort: matched projects by relevance (desc), then unmatched at the end
    cards.sort((a, b) => {
      const aData = relevanceMap.get(a.dataset.project);
      const bData = relevanceMap.get(b.dataset.project);
      if (aData && bData) return bData.relevance - aData.relevance;
      if (aData) return -1;
      if (bData) return 1;
      return 0;
    });

    // Reorder DOM
    cards.forEach((card) => projectWrapper.appendChild(card));

    // Apply matched/dimmed states and badges
    cards.forEach((card) => {
      const data = relevanceMap.get(card.dataset.project);
      if (data) {
        card.classList.add("project-card--matched");
        card.classList.remove("project-card--dimmed");

        // Add relevance badge
        const badge = document.createElement("span");
        badge.className = "skill-match-badge";
        badge.textContent = getBadgeLabel(data.relevance);
        const header = card.querySelector(".project-header");
        if (header) header.appendChild(badge);

        // Highlight matching tech tag
        card.querySelectorAll(".tech-tag").forEach((tag) => {
          if (tag.textContent.trim() === skill) {
            tag.classList.add("tech-tag--highlighted");
          } else {
            tag.classList.remove("tech-tag--highlighted");
          }
        });

        // Auto-switch to best tab if specified
        if (data.bestTab) {
          const tabBtn = card.querySelector(`.demo-tab[data-target="${data.bestTab}"]`);
          if (tabBtn) tabBtn.click();
        }
      } else {
        card.classList.remove("project-card--matched");
        card.classList.add("project-card--dimmed");
        card.querySelectorAll(".tech-tag").forEach((tag) => {
          tag.classList.remove("tech-tag--highlighted");
        });
      }
    });

    // Smooth scroll to projects section
    const projectsSection = document.querySelector("#projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function resetFilter() {
    activeSkill = null;

    // Remove pill active state
    pills.forEach((p) => p.classList.remove("skill-pill--active"));

    // Hide clear button and sticky banner
    clearBtn.classList.remove("skill-clear-btn--visible");
    banner.classList.remove("skill-filter-banner--visible");

    const cards = projectCards();

    // Remove all filter states and badges
    cards.forEach((card) => {
      card.classList.remove("project-card--matched", "project-card--dimmed");
      const badge = card.querySelector(".skill-match-badge");
      if (badge) badge.remove();
      card.querySelectorAll(".tech-tag").forEach((tag) => {
        tag.classList.remove("tech-tag--highlighted");
      });
    });

    // Restore original order by data-project
    const originalOrder = [
      "valomapped",
      "wc-draw-sim",
      "march-madness",
      "cooper-viz",
      "hoopstats",
      "nebula-civitas",
    ];
    const sorted = cards.sort(
      (a, b) => originalOrder.indexOf(a.dataset.project) - originalOrder.indexOf(b.dataset.project)
    );
    sorted.forEach((card) => projectWrapper.appendChild(card));
  }
}

function getBadgeLabel(relevance) {
  if (relevance >= 5) return "Best showcase";
  if (relevance >= 4) return "Strong example";
  if (relevance >= 3) return "Uses this skill";
  return "Related";
}
