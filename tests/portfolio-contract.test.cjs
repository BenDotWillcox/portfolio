const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const html = fs.readFileSync(path.join(__dirname, "..", "src", "index.html"), "utf8");
const demoTabsScript = fs.readFileSync(
  path.join(__dirname, "..", "src", "scripts", "demoTabs.js"),
  "utf8"
);
const revealConfig = fs.readFileSync(
  path.join(__dirname, "..", "src", "data", "scrollRevealConfig.js"),
  "utf8"
);
const projectsStyles = fs.readFileSync(
  path.join(__dirname, "..", "src", "sass", "sections", "_projects.scss"),
  "utf8"
);

const valuesFor = (attribute) =>
  [...html.matchAll(new RegExp(`(?:^|\\s)${attribute}="([^"]+)"`, "gm"))].map(
    (match) => match[1]
  );

test("every demo tab points to one unique panel", () => {
  const targets = valuesFor("data-target");
  const ids = valuesFor("id");

  assert.equal(new Set(targets).size, targets.length, "demo tab targets must be globally unique");
  targets.forEach((target) => {
    assert.equal(
      ids.filter((id) => id === target).length,
      1,
      `expected exactly one panel with id="${target}"`
    );
  });
});

test("every tab explainer belongs to a demo tab", () => {
  const targets = new Set(valuesFor("data-target"));
  valuesFor("data-for-tab").forEach((target) => {
    assert.ok(targets.has(target), `missing demo tab for explainer "${target}"`);
  });
});

test("World Cup portfolio tabs deep-link to distinct app views", () => {
  assert.match(
    html,
    /id="wc-draw"[\s\S]*?data-src="https:\/\/bendotwillcox\.github\.io\/world-cup-draw\/\?tab=visualizer"/
  );
  assert.match(
    html,
    /id="wc-stats"[\s\S]*?data-src="https:\/\/bendotwillcox\.github\.io\/world-cup-draw\/\?tab=stats"/
  );
  assert.match(
    html,
    /id="wc-path"[\s\S]*?data-src="https:\/\/bendotwillcox\.github\.io\/world-cup-draw\/\?tab=map"/
  );
});

test("switching demo tabs does not reset an iframe that already loaded", () => {
  assert.equal(
    (demoTabsScript.match(/iframe\.src\s*=/g) || []).length,
    1,
    "iframe src should only be assigned in the guarded lazy-load path"
  );
});

test("Voting methods embeds the deployed client without forced retry flags", () => {
  assert.match(
    html,
    /id="voting-methods"[\s\S]*?data-src="https:\/\/voting-paradigm\.vercel\.app\/methods"/
  );
  assert.doesNotMatch(html, /data-retry-before-reveal|data-placeholder-delay/);
});

test("the featured project guide participates in scroll reveal", () => {
  assert.match(revealConfig, /element:\s*"\.projects-intro, \.project-index"/);
});

test("World Cup and BenBot receive usable mobile iframe viewports", () => {
  ["benbot-play", "wc-draw", "wc-stats", "wc-path"].forEach((id) => {
    assert.match(
      html,
      new RegExp(
        `class="[^"]*demo-iframe-wrapper--mobile-viewport[^"]*"\\s+id="${id}"`
      )
    );
  });
  assert.match(projectsStyles, /&--mobile-viewport[\s\S]*height:\s*clamp\(/);
  assert.match(
    projectsStyles,
    /#project-world-cup[\s\S]*grid-template-columns:\s*repeat\(3, minmax\(0, 1fr\)\)/
  );
});
