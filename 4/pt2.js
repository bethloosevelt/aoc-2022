console.log(
  `${require("fs").readFileSync("i")}`.split("\n").reduce((s, c) => {
    const [a, b] = c.split(",").map((x) =>
      x
        .split("-")
        .map((n) => +n)
        .sort((p, c) => p - c)
    );
    const x = Math.max(...a, ...b);
    const g = a.includes(x) ? a : b;
    const l = !a.includes(x) ? a : b;
    return s + +(Math.min(...g) <= Math.max(...l));
  }, 0)
);
