(() => {
  const transfer = window.__jasonTransfer;
  try {
    sessionStorage.removeItem("b2w-jasonai-transfer");
  } catch {}
  if (!transfer) return;
  const target = document.querySelector(".brand-parent");
  const end = target.getBoundingClientRect();
  if (!end.width) {
    document.documentElement.classList.remove("brand-transfer");
    return;
  }
  const moving = document.createElement("span");
  moving.textContent = "B2W";
  moving.setAttribute("aria-hidden", "true");
  Object.assign(moving.style, {
    position: "fixed",
    left: transfer.x + "px",
    top: transfer.y + "px",
    zIndex: "1000",
    font: "750 15px/1 Inter,ui-sans-serif,system-ui,sans-serif",
    letterSpacing: "-.03em",
    color: "var(--ink)",
    pointerEvents: "none",
    whiteSpace: "nowrap",
  });
  document.body.append(moving);
  const move = moving.animate(
    [
      { transform: "translate(0,0)", opacity: 1 },
      {
        transform:
          "translate(" +
          (end.x - transfer.x) +
          "px," +
          (end.y - transfer.y) +
          "px)",
        opacity: 1,
      },
    ],
    { duration: 680, easing: "cubic-bezier(.16,1,.3,1)", fill: "forwards" },
  );
  const finish = () => {
    target.classList.add("is-settled");
    moving.remove();
    document.documentElement.classList.add("brand-reveal");
    setTimeout(
      () => document.documentElement.classList.add("content-reveal"),
      300,
    );
    setTimeout(
      () =>
        document.documentElement.classList.remove(
          "brand-transfer",
          "brand-reveal",
          "content-reveal",
        ),
      1450,
    );
  };
  move.finished.then(finish, finish);
})();
