"use strick";

// function tesArg() {
//   console.log(arguments.length);
//   console.log(arguments[0]);
// }

// let mas = [1, 2, 3, 4, 5];

// tesArg("QWERTY", 123);

// let mas1 = [3, 14, 5, 23, 2];
// let mas2 = [31, 12, 5, 3, 0];

//Замыкание
// function squarM(m) {
//   return function (num) {
//     alert(num ** m);
//   };
// }

// const addOne = squarM(3);

// addOne(2);

//Глобальные объекты 10.02.2022
// if(!window.Promise){
//     alert("Old!");
// }else{
//     alert("Yong!")
// }

// function count(){
//     alert("Hi");

//     count.counter()++;
// }

//SetTimeout/SetInterval 16.02.2022
// function printNumber(start, end) {
//   let from = start;

//   function go() {
//     console.log(from);
//     if (from == end) {
//       clearInterval(timeout);
//     }
//     from++;
//   }

//   go();
//   let timeout = setInterval(go, 1000);
// }

// printNumber(2, 6);
let i = 0;

setTimeout(() => alert(i), 50); // ?

// предположим, что время выполнения этой функции >100 мс
for(let j = 0; j < 100000000; j++) {
  i++;
}