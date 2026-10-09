(function () {
  const cards = [...document.querySelectorAll(".offering-card")];
  for (const card of cards) {
    const button = card.querySelector(".offering-trigger");
    if (!button) continue;
    button.addEventListener("click", () => {
      const open = !card.classList.contains("is-open");
      card.classList.toggle("is-open", open);
      button.setAttribute("aria-expanded", String(open));
      card
        .querySelector(".offering-reveal")
        .setAttribute("aria-hidden", String(!open));
    });
  }
})();
