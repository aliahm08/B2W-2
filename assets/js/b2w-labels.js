(function () {
  const labels = {
    home: "",
    team: "Team",
    offerings: "Offerings",
    insights: "Insights",
    "how-we-work": "How We Work",
  };
  const crumb = document.getElementById("currentPage");
  function refresh() {
    const active = document.querySelector("main.mock-view.active");
    const name =
      active?.dataset.view || location.hash.replace("#", "") || "home";
    crumb.textContent = name === "home" ? "" : " / " + (labels[name] || name);
  }
  const observer = new MutationObserver(refresh);
  document
    .querySelectorAll("main.mock-view")
    .forEach((x) =>
      observer.observe(x, { attributes: true, attributeFilter: ["class"] }),
    );
  window.addEventListener("hashchange", refresh);
  refresh();

  document.querySelectorAll(".next-field-note").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.nextNote;
      const target = document.querySelector(
        '.field-item[data-note="' + id + '"]',
      );
      if (target) {
        target.click();
        document
          .getElementById("insights")
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
})();
