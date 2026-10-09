(function () {
  const themes = {
    home: "#d5c9bf",
    team: "#f2f1ed",
    offerings: "#173e2d",
    "how-we-work": "#ffffff",
    insights: "#252828",
  };
  const meta = document.querySelector('meta[name="theme-color"]');
  function matchTheme() {
    let target = (location.hash || "#home").slice(1);
    if (target.startsWith("article-")) target = "insights";
    if (target === "projects") target = "offerings";
    if (target === "about") target = "team";
    const color = themes[target] || themes.home;
    document.documentElement.style.backgroundColor = color;
    document.documentElement.style.setProperty("--viewport-paper", color);
    if (meta) meta.setAttribute("content", color);
  }
  window.addEventListener("hashchange", matchTheme);
  new MutationObserver(matchTheme).observe(document.body, {
    attributes: true,
    attributeFilter: ["class"],
  });
  document.addEventListener("DOMContentLoaded", matchTheme, { once: true });
  matchTheme();
})();
