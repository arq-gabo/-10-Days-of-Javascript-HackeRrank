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

/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
  try {
    if (typeof s == "number") throw "s.split is not a function";
    if (typeof s == "string") {
      let largo = s.length - 1;
      let revArr = [];
      for (let a = largo; a >= 0; a--) {
        revArr.push(s[a]);
      }
      let revStr = revArr.join("");
      console.log(revStr);
    }
  } catch (err) {
    console.log(err);
    console.log(s);
  }
  /*
  let tipo = typeof(s);
  console.log(tipo);  */
}

function main() {
  const s = eval(readLine());

  reverseString(s);
}
