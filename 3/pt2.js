console.log(
  `${require("fs").readFileSync("i")}`
    .split("\n")
    .reduce(
      (s, c, i, a) =>
        !!(i % 3)
          ? s
          : s +
            [...new Set(a[i])].reduce(
              (s, c) =>
                s +
                (a[i + 1].includes(c) && a[i + 2].includes(c)
                  ? c.charCodeAt(0) - (c.charCodeAt(0) < 97 ? 38 : 96)
                  : 0),
              0
            ),
      0
    )
);
