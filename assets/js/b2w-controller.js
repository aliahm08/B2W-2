(function () {
  "use strict";
  const views = [...document.querySelectorAll("[data-view]")],
    links = [...document.querySelectorAll("[data-view-link]")],
    desk = [...document.querySelectorAll(".header-nav [data-view-link]")],
    tray = document.getElementById("mobileTray"),
    menu = document.querySelector(".menu-toggle"),
    workspace = document.getElementById("field-workspace"),
    library = workspace.querySelector(".field-library");
  let sequence = 0,
    timer,
    openingHome = false;
  function moveLibrary(change) {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      change();
      return;
    }
    const before = library.getBoundingClientRect();
    change();
    const after = library.getBoundingClientRect();
    const dx = before.left - after.left,
      dy = before.top - after.top,
      sx = before.width / Math.max(after.width, 1);
    if (library.animate)
      library.animate(
        [
          {
            transform:
              "translate(" + dx + "px," + dy + "px) scaleX(" + sx + ")",
            transformOrigin: "left top",
          },
          {
            transform: "translate(0,0) scaleX(1)",
            transformOrigin: "left top",
          },
        ],
        { duration: 780, easing: "cubic-bezier(.16,1,.3,1)" },
      );
  }
  function choose(id, push, animate) {
    const exists = [...document.querySelectorAll("[data-field]")].some(
        (p) => p.dataset.field === id,
      ),
      current = ++sequence;
    clearTimeout(timer);
    workspace.classList.remove("reveal-content");
    const wasEmpty = workspace.classList.contains("is-empty");
    const apply = () => {
      document
        .querySelectorAll("[data-field]")
        .forEach((p) => (p.hidden = p.dataset.field !== id));
      document
        .querySelectorAll("[data-note]")
        .forEach((b) =>
          b.setAttribute("aria-pressed", String(b.dataset.note === id)),
        );
      workspace.classList.toggle("is-empty", !exists);
    };
    if (animate && wasEmpty && exists) moveLibrary(apply);
    else apply();
    const field = [...document.querySelectorAll("[data-field]")].find(
      (p) => p.dataset.field === id,
    );
    if (field)
      field
        .querySelectorAll(".field-text p")
        .forEach((p, i) => p.style.setProperty("--line-number", i));
    if (exists)
      timer = setTimeout(
        () => {
          if (current !== sequence) return;
          void workspace.offsetWidth;
          workspace.classList.add("reveal-content");
        },
        animate && wasEmpty ? 700 : 0,
      );
    if (push && exists) history.pushState(null, "", "#" + id);
  }
  function page(route, push) {
    if (!document.body.classList.contains("home-to-site"))
      delete document.body.dataset.homePreview;
    document.body.classList.remove("home-burst-active");
    delete document.body.dataset.burstColor;
    const id = route.indexOf("article-") === 0 ? route : null;
    let p = id ? "insights" : route;
    if (p === "insights-list") p = "insights";
    if (p === "projects") p = "offerings";
    if (p === "about") p = "team";
    if (!views.some((v) => v.dataset.view === p)) p = "home";
    views.forEach((v) => v.classList.toggle("active", v.dataset.view === p));
    document.body.classList.remove(
      "mode-about",
      "mode-team",
      "mode-offerings",
      "mode-how",
      "mode-insights",
      "mode-home",
    );
    if (p === "home") document.body.classList.add("mode-home");
    if (p === "team") document.body.classList.add("mode-team");
    if (p === "offerings") document.body.classList.add("mode-offerings");
    if (p === "how-we-work") document.body.classList.add("mode-how");
    if (p === "insights") document.body.classList.add("mode-insights");
    desk.forEach((a) => a.classList.toggle("active", a.dataset.viewLink === p));
    if (id) choose(id, false, false);
    else if (p === "insights") choose(route === "insights-list" ? "" : "article-field-note-001", false, false);
    if (push && location.hash !== "#" + route)
      history.pushState(null, "", "#" + route);
    if (tray) tray.classList.remove("open");
    if (menu) menu.setAttribute("aria-expanded", "false");
    document.body.classList.remove("mobile-nav-open");
    document.querySelector(".site-header")?.classList.remove("menu-expanded");
    window.scrollTo(0, 0);
  }
  /* Mobile navigation is managed by the touch navigation controller. */ async function mobilePageSwap(
    route,
    push,
  ) {
    if (openingHome) return;
    openingHome = true;
    const active = document.querySelector("main.mock-view.active");
    let wipe = null;
    try {
      if (active && active.animate) {
        wipe = active.animate(
          [
            {
              opacity: 1,
              clipPath: "inset(0 0 0 0)",
              transform: "translateY(0)",
            },
            {
              opacity: 0,
              clipPath: "inset(0 0 100% 0)",
              transform: "translateY(-8px)",
            },
          ],
          { duration: 345, easing: "cubic-bezier(.65,0,.35,1)", fill: "both" },
        );
        await wipe.finished;
        wipe.cancel();
        wipe = null;
      }
      page(route, push);
    } catch (e) {
      page(route, push);
    } finally {
      if (wipe) wipe.cancel();
      openingHome = false;
    }
  }
  async function openFromHome(route, push) {
    if (openingHome) return;
    const onHome = document.body.classList.contains("mode-home");
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (matchMedia("(max-width:780px)").matches && !reduced) {
      await mobilePageSwap(route, push);
      return;
    }
    if (!onHome || route === "home" || reduced) {
      page(route, push);
      return;
    }
    openingHome = true;
    const home = document.getElementById("home"),
      brand = document.querySelector(".site-header .brand");
    const root = document.body;
    let wipe, logo;
    try {
      // Keep the centered logo and footer visible while the entire homepage is wiped.
      if (window.scrollY > 0) window.scrollTo({ top: 0, behavior: "instant" });
      root.classList.add("home-to-site");
      wipe = home.animate(
        [
          {
            clipPath: "inset(0 0 0% 0)",
            opacity: 1,
            transform: "translateY(0)",
          },
          {
            clipPath: "inset(0 0 100% 0)",
            opacity: 0,
            transform: "translateY(-15px)",
          },
        ],
        {
          duration: 470,
          easing: "cubic-bezier(.65,0,.35,1)",
          fill: "forwards",
        },
      );
      await wipe.finished;

      // FLIP: compute the logo's start/end positions, then animate the actual anchor.
      const from = brand.getBoundingClientRect();
      root.classList.add("site-header-transitioning");
      root.classList.remove("mode-home");
      const to = brand.getBoundingClientRect();
      const dx = from.left - to.left,
        dy = from.top - to.top;
      logo = brand.animate(
        [
          { transform: "translate(" + dx + "px," + dy + "px)" },
          { transform: "translate(0,0)" },
        ],
        { duration: 650, easing: "cubic-bezier(.16,1,.3,1)", fill: "both" },
      );
      await logo.finished;
      logo.cancel();
      logo = null;

      // Restore the regular site header before the destination view is inserted.
      root.classList.add("site-nav-visible");
      await new Promise((done) => setTimeout(done, 290));
      page(route, push);
    } catch (err) {
      // A canceled animation must never leave navigation inaccessible.
      page(route, push);
    } finally {
      if (logo) logo.cancel();
      if (wipe) wipe.cancel();
      root.classList.remove(
        "site-header-transitioning",
        "site-nav-visible",
        "home-to-site",
      );
      delete root.dataset.homePreview;
      openingHome = false;
    }
  }

  async function returnToHome(push) {
    if (openingHome) return;
    const root = document.body,
      brand = document.querySelector(".site-header .brand");
    if (
      matchMedia("(max-width:780px)").matches &&
      !matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      await mobilePageSwap("home", push);
      return;
    }
    if (
      root.classList.contains("mode-home") ||
      matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      page("home", push);
      return;
    }
    openingHome = true;
    let wipe = null,
      logo = null,
      reveal = null;
    try {
      const current = document.querySelector("main.mock-view.active");
      if (window.scrollY > 0) window.scrollTo({ top: 0, behavior: "instant" });
      // First clear the content without moving header or footer.
      if (current) {
        wipe = current.animate(
          [
            { clipPath: "inset(0 0 0 0)", opacity: 1 },
            { clipPath: "inset(0 0 100% 0)", opacity: 0 },
          ],
          {
            duration: 410,
            easing: "cubic-bezier(.65,0,.35,1)",
            fill: "forwards",
          },
        );
        await wipe.finished;
      }
      // Hide regular navigation and move the actual logo to its Home alignment.
      const from = brand.getBoundingClientRect();
      root.classList.add("site-header-transitioning", "site-returning");
      root.classList.add("mode-home");
      const to = brand.getBoundingClientRect();
      logo = brand.animate(
        [
          {
            transform:
              "translate(" +
              (from.left - to.left) +
              "px," +
              (from.top - to.top) +
              "px)",
          },
          { transform: "translate(0,0)" },
        ],
        { duration: 650, easing: "cubic-bezier(.16,1,.3,1)", fill: "both" },
      );
      await logo.finished;
      logo.cancel();
      logo = null;
      page("home", push);
      const home = document.getElementById("home");
      reveal = home.animate(
        [
          {
            clipPath: "inset(100% 0 0 0)",
            opacity: 0,
            transform: "translateY(10px)",
          },
          {
            clipPath: "inset(0 0 0 0)",
            opacity: 1,
            transform: "translateY(0)",
          },
        ],
        { duration: 480, easing: "cubic-bezier(.16,1,.3,1)", fill: "both" },
      );
      await reveal.finished;
    } catch (err) {
      page("home", push);
    } finally {
      if (wipe) wipe.cancel();
      if (logo) logo.cancel();
      if (reveal) reveal.cancel();
      root.classList.remove(
        "site-returning",
        "site-header-transitioning",
        "site-nav-visible",
        "home-to-site",
      );
      openingHome = false;
    }
  }

  // A restrained radial color wash follows the pointer *within* the home CTA.
  const burstLinks = [
    ...document.querySelectorAll("#home .mission-link[data-view-link]"),
  ];
  let burstActive = null,
    burstX = 0,
    burstY = 0,
    burstTX = 0,
    burstTY = 0,
    burstFrame = 0,
    burstReady = false;
  function burstPaint() {
    burstFrame = 0;
    burstX += (burstTX - burstX) * 0.2;
    burstY += (burstTY - burstY) * 0.2;
    document.body.style.setProperty("--burst-x", burstX + "px");
    document.body.style.setProperty("--burst-y", burstY + "px");
    if (Math.abs(burstTX - burstX) > 0.35 || Math.abs(burstTY - burstY) > 0.35)
      burstFrame = requestAnimationFrame(burstPaint);
  }
  function burstTarget(x, y) {
    burstTX = x;
    burstTY = y;
    if (!burstReady) {
      burstX = x;
      burstY = y;
      burstReady = true;
    }
    if (!burstFrame) burstFrame = requestAnimationFrame(burstPaint);
  }
  function burstShow(link, evt) {
    if (openingHome || !document.body.classList.contains("mode-home")) return;
    burstActive = link;
    const box = link.getBoundingClientRect();
    burstTarget(
      evt && typeof evt.clientX === "number"
        ? evt.clientX
        : box.left + box.width / 2,
      evt && typeof evt.clientY === "number"
        ? evt.clientY
        : box.top + box.height / 2,
    );
    document.body.dataset.burstColor = link.dataset.viewLink;
    document.body.classList.add("home-burst-active");
  }
  function burstHide(link) {
    if (burstActive !== link) return;
    burstActive = null;
    document.body.classList.remove("home-burst-active");
    delete document.body.dataset.burstColor;
  }
  burstLinks.forEach((link) => {
    link.addEventListener("pointerenter", (evt) => burstShow(link, evt));
    link.addEventListener("pointermove", (evt) => {
      if (burstActive === link) burstTarget(evt.clientX, evt.clientY);
    });
    link.addEventListener("pointerleave", () => burstHide(link));
    link.addEventListener("focus", () => burstShow(link));
    link.addEventListener("blur", () => burstHide(link));
  });
  links.forEach((a) =>
    a.addEventListener("click", async (e) => {
      const href = a.getAttribute("href");
      if (href?.startsWith("/") && href !== "/how-we-work") return;
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey)
        return;
      e.preventDefault();
      if (a.dataset.viewLink === "home") {
        await returnToHome(true);
        history.replaceState(null, "", "/#home");
      } else {
        await openFromHome(a.dataset.viewLink, true);
        if (href === "/how-we-work")
          history.replaceState(null, "", "/how-we-work#how-we-work");
      }
    }),
  );
  document.querySelectorAll("[data-note]").forEach((a) =>
    a.addEventListener("click", () => {
      choose(a.dataset.note, true, true);
      if (innerWidth <= 780) window.scrollTo({ top: 0, behavior: "instant" });
    }),
  );
  document.querySelectorAll("[data-stage]").forEach((s) => {
    const b = s.querySelector(".stage-head");
    if (b)
      b.addEventListener("click", () => {
        const open = s.classList.toggle("open");
        b.setAttribute("aria-expanded", String(open));
        if (open && matchMedia("(max-width:780px)").matches)
          document.querySelectorAll("[data-stage]").forEach((other) => {
            if (other !== s) {
              other.classList.remove("open");
              other
                .querySelector(".stage-head")
                ?.setAttribute("aria-expanded", "false");
            }
          });
      });
  });
  window.addEventListener("hashchange", () => {
    const route = location.hash.slice(1) || "home";
    if (route === "home" && !document.body.classList.contains("mode-home"))
      returnToHome(false);
    else page(route, false);
  });
  page(location.hash.slice(1) || "home", false);
})();
