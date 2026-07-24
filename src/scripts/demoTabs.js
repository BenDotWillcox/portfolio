/**
 * Demo Tabs — handles iframe tab switching, lazy loading, and
 * contextual explainer toggling for project demos.
 */
export default function initDemoTabs() {
  document.querySelectorAll(".demo-tabs").forEach((tabList) => {
    tabList.setAttribute("role", "tablist");
  });

  const activateTab = (btn, loadDemo = true) => {
    const project = btn.closest(".project-card");
    if (!project) return;

    project.querySelectorAll(".demo-tab").forEach((tab) => {
      const isActive = tab === btn;
      tab.classList.toggle("active", isActive);
      tab.setAttribute("aria-selected", String(isActive));
    });

    const targetId = btn.dataset.target;
    const container = project.querySelector(".demo-container");
    if (!container || !targetId) return;

    container
      .querySelectorAll(".demo-iframe-wrapper, .demo-external-notice, .demo-preview")
      .forEach((wrapper) => {
        wrapper.style.display = "none";
      });

    const targetWrapper = container.querySelector(`#${targetId}`);
    if (targetWrapper) {
      targetWrapper.style.display = "block";
      if (loadDemo) loadIframe(targetWrapper);
    }

    project.querySelectorAll(".tab-explainer").forEach((explainer) => {
      const isActive = explainer.dataset.forTab === targetId;
      explainer.style.display = isActive ? "block" : "none";
      explainer.style.opacity = isActive ? "1" : "0";
    });
  };

  document.querySelectorAll(".demo-tab").forEach((btn) => {
    btn.setAttribute("role", "tab");
    btn.setAttribute("aria-controls", btn.dataset.target);
    btn.addEventListener("click", () => activateTab(btn));
  });

  // Establish the initial tab state without loading every iframe on the page.
  document.querySelectorAll(".project-card").forEach((project) => {
    const firstTab = project.querySelector(".demo-tab");
    if (firstTab) activateTab(firstTab, false);
  });

  // Load only the currently visible demo when its project approaches the viewport.
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && getComputedStyle(entry.target).display !== "none") {
          loadIframe(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "200px" }
  );

  document.querySelectorAll(".demo-iframe-wrapper").forEach((wrapper) => {
    observer.observe(wrapper);
  });
}

function loadIframe(wrapper) {
  const iframe = wrapper.querySelector("iframe[data-src]");
  if (!iframe || iframe.dataset.loaded === "loading" || iframe.dataset.loaded === "true") {
    return;
  }

  const url = iframe.dataset.src;
  const loading = wrapper.querySelector(".demo-loading");
  const placeholder = wrapper.querySelector(".demo-placeholder");

  iframe.dataset.loaded = "loading";
  if (loading) loading.style.display = "block";
  if (placeholder) placeholder.style.display = "flex";
  iframe.style.opacity = "0";

  iframe.addEventListener(
    "load",
    () => {
      iframe.dataset.loaded = "true";
      if (loading) loading.style.display = "none";
      if (placeholder) placeholder.style.display = "none";
      iframe.style.opacity = "1";
    },
    { once: true }
  );

  iframe.addEventListener(
    "error",
    () => {
      iframe.dataset.loaded = "error";
      handleIframeFallback(wrapper, url);
    },
    { once: true }
  );

  iframe.src = url;
}

function handleIframeFallback(wrapper, url) {
  const fallback = wrapper.querySelector(".demo-fallback");
  const iframe = wrapper.querySelector("iframe");
  if (fallback) {
    fallback.style.display = "block";
    fallback.innerHTML = `This demo cannot be embedded. <a href="${url}" target="_blank" rel="noreferrer">Open in a new tab &rarr;</a>`;
  }
  if (iframe) iframe.style.display = "none";
}
