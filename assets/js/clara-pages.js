(() => {
  const toggle = document.querySelector(".menu-toggle"),
    menu = document.querySelector(".mobile-menu");
  const mobile = matchMedia("(max-width:780px)");
  function setMenu(open, focus = false) {
    const wasOpen = menu.classList.contains("is-open");
    menu.classList.toggle("is-open", open);
    menu.inert = !open;
    menu.setAttribute("aria-hidden", String(!open));
    document.body.classList.toggle("menu-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute(
      "aria-label",
      open ? "Close navigation" : "Open navigation",
    );
    toggle.textContent = open ? "Close ×" : "Menu +";
    if (open) requestAnimationFrame(() => menu.querySelector("a")?.focus());
    else if (focus && wasOpen) toggle.focus();
  }
  toggle.addEventListener("click", () =>
    setMenu(!menu.classList.contains("is-open"), true),
  );
  menu.addEventListener("click", (event) => {
    if (event.target.closest("a")) setMenu(false);
  });
  document.addEventListener("keydown", (event) => {
    if (!menu.classList.contains("is-open")) return;
    if (event.key === "Escape") {
      event.preventDefault();
      setMenu(false, true);
    }
    if (event.key === "Tab") {
      const last = menu.querySelector("a:last-child");
      if (event.shiftKey && document.activeElement === toggle) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        toggle.focus();
      }
    }
  });
  mobile.addEventListener("change", () => setMenu(false));
  const steps = [
    [
      "Start with the job",
      "Describe the work in plain language and give Clara the project details you already have.",
    ],
    [
      "Apply company knowledge",
      "Bring together approved standards, pricing, and preferred vendors to structure the estimate.",
    ],
    [
      "Review the estimate",
      "Confirm scope, costs, assumptions, and vendor choices before approving the estimate for use.",
    ],
  ];
  document.querySelector(".workflow").addEventListener("click", (event) => {
    const button = event.target.closest("[data-step]");
    if (!button) return;
    const step = Number(button.dataset.step);
    document
      .querySelectorAll("[data-step]")
      .forEach((item) =>
        item.setAttribute("aria-pressed", String(item === button)),
      );
    document.getElementById("step-title").textContent = steps[step][0];
    document.getElementById("step-copy").textContent = steps[step][1];
  });
})();
