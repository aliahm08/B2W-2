(function () {
  "use strict";
  const header = document.querySelector(".site-header"),
    menu = header?.querySelector(".menu-toggle"),
    tray = document.getElementById("mobileTray"),
    shade = header?.querySelector(".mobile-menu-shade");
  const mobile = matchMedia(
    `(max-width:${getComputedStyle(document.documentElement).getPropertyValue("--header-breakpoint").trim()})`,
  );
  if (!header || !menu || !tray || !shade) return;
  function closeMenu(focus = false) {
    const open = tray.classList.contains("open");
    tray.classList.remove("open");
    header.classList.remove("menu-expanded");
    document.body.classList.remove("mobile-nav-open");
    document.documentElement.classList.remove("mobile-nav-open");
    menu.setAttribute("aria-expanded", "false");
    menu.setAttribute("aria-label", "Open navigation");
    menu.querySelector("span:first-child").textContent = "Menu";
    menu.querySelector("span:last-child").textContent = "+";
    tray.setAttribute("aria-hidden", "true");
    tray.inert = true;
    if (focus && open && mobile.matches) menu.focus();
  }
  function openMenu() {
    if (!mobile.matches) return;
    tray.inert = false;
    tray.setAttribute("aria-hidden", "false");
    tray.classList.add("open");
    header.classList.add("menu-expanded");
    document.body.classList.add("mobile-nav-open");
    document.documentElement.classList.add("mobile-nav-open");
    menu.setAttribute("aria-expanded", "true");
    menu.setAttribute("aria-label", "Close navigation");
    menu.querySelector("span:first-child").textContent = "Close";
    menu.querySelector("span:last-child").textContent = "×";
    updateActive();
    requestAnimationFrame(() => tray.querySelector("a")?.focus());
  }
  function updateActive() {
    const hash = location.hash.slice(1);
    const route = hash.startsWith("article-") || hash === "insights-list" ? "insights" : hash;
    tray.querySelectorAll("[data-view-link]").forEach((link) => {
      if (link.dataset.viewLink === route)
        link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
  }
  tray.inert = true;
  tray.setAttribute("aria-hidden", "true");
  menu.setAttribute("aria-label", "Open navigation");
  menu.addEventListener("click", (event) => {
    event.preventDefault();
    if (tray.classList.contains("open")) closeMenu(true);
    else openMenu();
  });
  shade.addEventListener("click", () => closeMenu(true));
  tray.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      closeMenu(false);
      setTimeout(updateActive, 0);
    }
  });
  header
    .querySelector(".brand")
    ?.addEventListener("click", () => closeMenu(false));
  document.addEventListener("keydown", (event) => {
    if (!tray.classList.contains("open")) return;
    if (event.key === "Escape") {
      event.preventDefault();
      closeMenu(true);
      return;
    }
    if (event.key === "Tab") {
      const active = [menu, ...tray.querySelectorAll("a[href]")];
      const first = active[0],
        last = active[active.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });
  mobile.addEventListener("change", () => closeMenu(false));
  window.addEventListener("hashchange", () => {
    closeMenu(false);
    updateActive();
  });
  document.querySelectorAll(".mobile-reader-back").forEach((button) =>
    button.addEventListener("click", () => {
      location.hash = "#insights-list";
      window.scrollTo({ top: 0, behavior: "instant" });
    }),
  );
  updateActive();
})();
