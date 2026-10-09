import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const root = path.resolve(import.meta.dirname, "..");
const scripts = fs
  .readdirSync(path.join(root, "assets/js"))
  .filter((file) => file.endsWith(".js"));
for (const file of scripts) {
  new vm.Script(fs.readFileSync(path.join(root, "assets/js", file), "utf8"), {
    filename: file,
  });
}
for (const page of ["index.html", "jasonai/index.html", "clara/index.html"]) {
  const html = fs.readFileSync(path.join(root, page), "utf8");
  for (const match of html.matchAll(/(?:src|href)="(\/assets\/[^"#]+)"/g)) {
    if (!fs.existsSync(path.join(root, match[1])))
      throw new Error(`${page}: missing ${match[1]}`);
  }
}
const config = JSON.parse(
  fs.readFileSync(path.join(root, "vercel.json"), "utf8"),
);
for (const rewrite of config.rewrites) {
  if (!fs.existsSync(path.join(root, rewrite.destination)))
    throw new Error(`Missing rewrite target: ${rewrite.destination}`);
}
console.log(
  `${scripts.length} scripts parse. Local assets and rewrite targets exist.`,
);
