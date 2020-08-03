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

function getLetter(s) {
  let str1 = "aeiou";
  let str2 = "bcdfg";
  let str3 = "hjklm";
  let str4 = "npqrstvwxyz";
  let letter;
  switch (true) {
    case str1.includes(s[0]):
      letter = "A";
      break;
    case str2.includes(s[0]):
      letter = "B";
      break;
    case str3.includes(s[0]):
      letter = "C";
      break;
    case str4.includes(s[0]):
      letter = "D";
      break;
  }

  return letter;
}

function main() {
  const s = readLine();

  console.log(getLetter(s));
}
