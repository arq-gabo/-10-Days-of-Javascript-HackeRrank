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
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
  let listOfVowel = "aeiou";
  let vowels = [];
  let consonat = [];
  for (let a = 0; a < s.length; a++) {
    if (listOfVowel.indexOf(s[a]) !== -1) {
      vowels.push(s[a]);
    } else {
      consonat.push(s[a]);
    }
  }
  let ar = vowels.concat(consonat);
  for (let b = 0; b < ar.length; b++) {
    console.log(ar[b]);
  }
}

function main() {
  const s = readLine();

  vowelsAndConsonants(s);
}
