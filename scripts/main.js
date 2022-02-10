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

function count(){
    alert("Hi");

    count.counter()++;
}

