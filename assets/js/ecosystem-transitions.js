/* Product departures share one exit sequence. The destination owns its arrival. */
(() => {
  const productLinks = document.querySelectorAll(
    'a[href^="/jasonai/"], a[href^="/clara/"]',
  );
  const reduced = matchMedia("(prefers-reduced-motion: reduce)");
  let departing = false;
  const animations = [];

  productLinks.forEach((link) =>
    link.addEventListener("click", async (event) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        link.target === "_blank"
      )
        return;
      event.preventDefault();
      if (departing) return;
      departing = true;
      const brand = document.querySelector(".site-header .brand");
      const box = brand.getBoundingClientRect();
      const destination = link.getAttribute("href");
      document.body.classList.add("product-departing");

      if (!reduced.matches) {
        const home = document.body.classList.contains("mode-home");
        const content = home
          ? [
              ...document.querySelectorAll(
                ".mission-unit, .home-bottom-actions",
              ),
            ]
          : [document.querySelector(".mock-view.active")];
        const headerItems = [
          ...document.querySelectorAll(
            ".header-nav a, .header-actions > a, .menu-toggle, .current-page",
          ),
        ];
        const items = [...content, ...headerItems, brand].filter(Boolean);
        await Promise.all(
          items.map((item, index) => {
            const animation = item.animate(
              [
                { opacity: 1, transform: "translateY(0)" },
                { opacity: 0, transform: "translateY(-9px)" },
              ],
              {
                duration: item === brand ? 240 : 320,
                delay: item === brand ? 280 : Math.min(index * 35, 160),
                easing: "cubic-bezier(.65,0,.35,1)",
                fill: "forwards",
              },
            );
            animations.push(animation);
            return animation.finished.catch(() => {});
          }),
        );
      }
      if (destination.startsWith("/jasonai/")) {
        try {
          sessionStorage.setItem(
            "b2w-jasonai-transfer",
            JSON.stringify({
              x: box.x,
              y: box.y,
              width: box.width,
              height: box.height,
              at: Date.now(),
            }),
          );
        } catch {}
      }
      location.assign(destination);
    }),
  );

  // Restore the source when returning through the browser's back/forward cache.
  window.addEventListener("pageshow", () => {
    animations.splice(0).forEach((animation) => animation.cancel());
    departing = false;
    document.body.classList.remove("product-departing");
  });
})();
