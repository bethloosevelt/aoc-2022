console.log(
  `${require("fs").readFileSync("i")}`
    .split("\n")
    .map((l) => {
      const e = l.length / 2;
      return [...new Set(l.slice(0, e))].map((c) =>
        l.slice(e, e * 2).includes(c)
          ? c.charCodeAt(0) - (c.charCodeAt(0) < 97 ? 38 : 96)
          : 0
      );
    })
    .flat()
    .reduce((s, c) => s + c)
);
