console.log(
  `${require("fs").readFileSync("i")}`.split("\n").reduce((s, c) => {
    const [a, b] = c.split(",").map((x) =>
      x
        .split("-")
        .map((n) => +n)
        .sort((p, c) => p - c)
    );
    const x = Math.max(...a, ...b);
    const n = Math.min(...a, ...b);
    return (
      s +
      +((a.includes(x) && a.includes(n)) || (b.includes(x) && b.includes(n)))
    );
  }, 0)
);
