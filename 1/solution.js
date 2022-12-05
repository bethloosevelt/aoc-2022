`${require("fs").readFileSync("i")}`
  .split("\n\n")
  .map((l) => l.split("\n").reduce((s, c) => s + +c, 0))
  .sort()
  .reverse()
  .slice(0, 3)
  .reduce((s, c) => s + c);
