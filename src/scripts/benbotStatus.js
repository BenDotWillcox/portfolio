const STATUS_LABELS = {
  ready: "Live",
  degraded: "Degraded",
  starting: "Starting",
  unavailable: "Unavailable",
};

const normalizeStatus = (status) =>
  Object.prototype.hasOwnProperty.call(STATUS_LABELS, status) ? status : "unavailable";

const setStatus = (element, rawStatus) => {
  const status = normalizeStatus(rawStatus);
  const style = status === "ready" ? "live" : status === "starting" ? "checking" : status;
  element.textContent = STATUS_LABELS[status];
  element.className = "status-badge status-badge--" + style;
};

const refreshStatus = async (element) => {
  const readyUrl = element.dataset.readyUrl;
  if (!readyUrl) return;

  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 8000);
  try {
    const response = await fetch(readyUrl, {
      cache: "no-store",
      headers: { Accept: "application/json" },
      signal: controller.signal,
    });
    const payload = await response.json();
    const status = payload.status || (response.ok && payload.ready ? "ready" : "unavailable");
    setStatus(element, status);
    element.title = payload.dependencies?.stockfish?.error || "BenBot readiness: " + status;
  } catch {
    setStatus(element, "unavailable");
    element.title = "BenBot readiness probe failed";
  } finally {
    window.clearTimeout(timeout);
  }
};

const initBenbotStatus = () => {
  const element = document.querySelector("#benbot-status");
  if (!element) return;

  refreshStatus(element);
  window.setInterval(() => refreshStatus(element), 60_000);
};

export default initBenbotStatus;
