"use strick";

// function tesArg() {
//   console.log(arguments.length);
//   console.log(arguments[0]);
// }

// let mas = [1, 2, 3, 4, 5];

// tesArg("QWERTY", 123);

let mas1 = [3, 14, 5, 23, 2];
let mas2 = [31, 12, 5, 3, 0];

console.log(Math.max(...mas1, 22, ...mas2));
