try {
  const transfer = JSON.parse(
    sessionStorage.getItem("b2w-jasonai-transfer") || "null",
  );
  if (
    transfer &&
    Date.now() - transfer.at < 5000 &&
    innerWidth > 980 &&
    !matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    document.documentElement.classList.add("brand-transfer");
    window.__jasonTransfer = transfer;
  }
} catch {}
