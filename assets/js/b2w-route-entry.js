{
  const entry = {
    "/work": "offerings",
    "/how-we-work": "how-we-work",
    "/perspectives": "insights",
  }[location.pathname.replace(/\/$/, "")];
  if (entry && !location.hash)
    history.replaceState(null, "", location.pathname + "#" + entry);
}
