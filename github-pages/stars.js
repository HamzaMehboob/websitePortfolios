(function () {
  const layer = document.getElementById("stars-layer");
  if (!layer) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const isMobile = window.matchMedia("(max-width: 640px)").matches;
  const shootingCount = isMobile ? 8 : 16;
  const dotCount = isMobile ? 24 : 48;

  for (let i = 0; i < shootingCount; i++) {
    const star = document.createElement("span");
    star.className = "shooting-star";
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 70}%`;
    star.style.animationDelay = `${Math.random() * 10}s`;
    star.style.animationDuration = `${1.8 + Math.random() * 2.5}s`;
    layer.appendChild(star);
  }

  for (let i = 0; i < dotCount; i++) {
    const dot = document.createElement("span");
    dot.className = "star-dot";
    dot.style.left = `${Math.random() * 100}%`;
    dot.style.top = `${Math.random() * 100}%`;
    dot.style.animationDelay = `${Math.random() * 5}s`;
    dot.style.opacity = `${0.2 + Math.random() * 0.6}`;
    layer.appendChild(dot);
  }

  const toggle = document.getElementById("stars-toggle");

  function setPaused(paused) {
    layer.classList.toggle("stars-paused", paused);
    if (toggle) {
      toggle.setAttribute("aria-pressed", String(paused));
      toggle.textContent = paused ? "Play stars" : "Pause motion";
    }
  }

  if (toggle) {
    toggle.addEventListener("click", () => {
      setPaused(!layer.classList.contains("stars-paused"));
    });
  }

  document.querySelectorAll("#demos .card-link").forEach((card) => {
    card.addEventListener("click", () => setPaused(true));
  });
})();
