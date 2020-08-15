"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}
function getMaxLessThanK(n, k) {
  let value = 0;
  let tmp = [];
  for (let a = 1; a < n; a++) {
    for (let b = 2; b <= n; b++) {
      if (a !== b && a < b) {
        value = a & b;
        if (value < k) {
          tmp.push(value);
        }
      }
    }
  }
  const unicos = Array.from(new Set(tmp));
  return unicos[unicos.length - 1];
}

function main() {
  const q = +readLine();

  for (let i = 0; i < q; i++) {
    const [n, k] = readLine().split(" ").map(Number);

    console.log(getMaxLessThanK(n, k));
  }
}
