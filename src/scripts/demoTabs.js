/**
 * Demo Tabs — handles iframe tab switching, lazy loading, and
 * contextual explainer toggling for project demos.
 */
export default function initDemoTabs() {
  const tabButtons = document.querySelectorAll(".demo-tab");

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const project = btn.closest(".project-card");
      if (!project) return;

      // Update active tab
      project.querySelectorAll(".demo-tab").forEach((t) => t.classList.remove("active"));
      btn.classList.add("active");

      const targetId = btn.dataset.target;
      const container = project.querySelector(".demo-container");
      if (!container) return;

      // Hide all iframe wrappers, external notices, and previews; show the target
      container.querySelectorAll(".demo-iframe-wrapper, .demo-external-notice, .demo-preview").forEach((w) => {
        w.style.display = "none";
      });
      const targetWrapper = container.querySelector(`#${targetId}`);
      if (targetWrapper) {
        targetWrapper.style.display = "block";

        const iframe = targetWrapper.querySelector("iframe");
        if (iframe && iframe.dataset.src) {
          const canonicalUrl = iframe.dataset.src;

          if (!iframe.src) {
            // First load: set src and wire up load/error handlers
            iframe.dataset.loaded = "loading";
            iframe.src = canonicalUrl;

            iframe.addEventListener("load", () => {
              iframe.dataset.loaded = "true";
              const loading = targetWrapper.querySelector(".demo-loading");
              if (loading) loading.style.display = "none";
            });

            iframe.addEventListener("error", () => {
              handleIframeFallback(targetWrapper, canonicalUrl);
            });
          } else {
            // Already loaded — reset to the canonical URL for this tab
            // so in-iframe navigation doesn't persist across tab switches
            iframe.src = canonicalUrl;
          }
        }
      }

      // Toggle tab-specific explainers
      project.querySelectorAll(".tab-explainer").forEach((ex) => {
        if (ex.dataset.forTab === targetId) {
          ex.style.display = "block";
          ex.style.opacity = "0";
          requestAnimationFrame(() => {
            ex.style.transition = "opacity 0.3s ease";
            ex.style.opacity = "1";
          });
        } else {
          ex.style.display = "none";
        }
      });
    });
  });

  // Auto-activate the first tab in each project on page load
  document.querySelectorAll(".project-card").forEach((project) => {
    const firstTab = project.querySelector(".demo-tab");
    if (firstTab) firstTab.click();
  });

  // Intersection observer for lazy loading single-tab demos
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const iframe = entry.target.querySelector("iframe[data-src]:not([src])");
          if (iframe) {
            iframe.src = iframe.dataset.src;
            iframe.addEventListener("load", () => {
              iframe.dataset.loaded = "true";
              const loading = entry.target.querySelector(".demo-loading");
              if (loading) loading.style.display = "none";
            });
          }
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

function handleIframeFallback(wrapper, url) {
  const fallback = wrapper.querySelector(".demo-fallback");
  const iframe = wrapper.querySelector("iframe");
  if (fallback) {
    fallback.style.display = "block";
    fallback.innerHTML = `This demo cannot be embedded. <a href="${url}" target="_blank" rel="noreferrer">Open in a new tab &rarr;</a>`;
  }
  if (iframe) iframe.style.display = "none";
}
