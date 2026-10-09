(function () {
  "use strict";
  const workspace = document.getElementById("field-workspace");
  const library = workspace?.querySelector(".field-library");
  const rows = library ? [...library.querySelectorAll(".field-item")] : [];
  if (!workspace || !library || !rows.length) return;
  const tray = document.createElement("aside");
  tray.className = "field-hover-tray";
  tray.setAttribute("aria-hidden", "true");
  workspace.appendChild(tray);
  const reduceMotion = matchMedia("(prefers-reduced-motion:reduce)");
  const canHover = matchMedia("(hover:hover) and (pointer:fine)");
  let current = null,
    closeTimer = 0,
    cleanTimer = 0,
    layoutAnimation = null,
    previewVersion = 0;
  function clearClose() {
    clearTimeout(closeTimer);
    closeTimer = 0;
  }
  function mark(button) {
    rows.forEach((r) => r.classList.toggle("is-previewed", r === button));
  }
  function shiftLibrary(mutate) {
    if (layoutAnimation) {
      layoutAnimation.cancel();
      layoutAnimation = null;
    }
    if (reduceMotion.matches) {
      mutate();
      return;
    }
    const from = library.getBoundingClientRect();
    mutate();
    const to = library.getBoundingClientRect();
    if (!from.width || !to.width) return;
    // FLIP animates position and width without triggering layout jumps.
    layoutAnimation = library.animate(
      [
        {
          transform: `translate(${from.left - to.left}px,${from.top - to.top}px) scaleX(${from.width / to.width})`,
          transformOrigin: "top left",
        },
        { transform: "translate(0,0) scaleX(1)", transformOrigin: "top left" },
      ],
      { duration: 690, easing: "cubic-bezier(.16,1,.3,1)" },
    );
  }
  function collapse() {
    clearClose();
    if (!current && !workspace.classList.contains("previewing")) return;
    current = null;
    previewVersion++;
    mark(null);
    tray.classList.remove("visible");
    shiftLibrary(() => workspace.classList.remove("previewing"));
    clearTimeout(cleanTimer);
    cleanTimer = setTimeout(() => {
      if (!current) tray.replaceChildren();
    }, 360);
  }
  function show(button) {
    clearClose();
    clearTimeout(cleanTimer);
    if (
      !canHover.matches ||
      !document.body.classList.contains("mode-insights") ||
      !workspace.classList.contains("is-empty")
    )
      return;
    if (current === button && workspace.classList.contains("previewing"))
      return;
    const visual = document.querySelector(
      '[data-field="' + button.dataset.note + '"] .field-art .motion-visual',
    );
    if (!visual) return;
    const fresh = ++previewVersion;
    current = button;
    mark(button);
    tray.classList.remove("visible");
    // Replace SVG node to restart the authored CSS animations for every preview.
    tray.replaceChildren(visual.cloneNode(true));
    if (!workspace.classList.contains("previewing"))
      shiftLibrary(() => workspace.classList.add("previewing"));
    void tray.offsetWidth;
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        if (fresh === previewVersion && current === button)
          tray.classList.add("visible");
      }),
    );
  }
  function leaveWorkspace() {
    // Do not close on library/nav leave: the nav *moves away* on hover,
    // so it used to immediately cancel its own preview.
    clearClose();
    closeTimer = setTimeout(collapse, 160);
  }
  rows.forEach((button) => {
    button.addEventListener("pointerenter", (event) => {
      if (event.pointerType !== "touch") show(button);
    });
    button.addEventListener("focus", () => {
      if (canHover.matches) show(button);
    });
    button.addEventListener("click", collapse);
  });
  workspace.addEventListener("pointerenter", clearClose);
  workspace.addEventListener("pointerleave", (event) => {
    if (event.pointerType !== "touch") leaveWorkspace();
  });
  workspace.addEventListener("focusout", (event) => {
    if (!workspace.contains(event.relatedTarget)) leaveWorkspace();
  });
  document
    .querySelectorAll("[data-view-link]")
    .forEach((el) => el.addEventListener("click", collapse));
  window.addEventListener("hashchange", collapse);
  window.addEventListener(
    "scroll",
    () => {
      if (current) collapse();
    },
    { passive: true },
  );
})();
