'use strict()';
/*
var a = 8;
console.log(a);
/*console.log(leftBorderWidth);
var leftBorderWidth = 1;

// Типы данных(их 7)

var number = 5;
var string = "hello";
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {};
*/
var c = 5;
/*

console.log(4/0);
console.log("string"*9);

let something;
console.log(something);

let person = {
    name: "john",
    age: "25",
    isMarried: false
}

console.log(person["name"]);
*/
/*
let arr = ['plum.png','orange.jpg', 'apple.bmp'];

console.log(arr[0]);
/*
//alert("hello world");

//let answer = confirm("Are you here?");

//console.log(answer);
// Типы данных содержат "Простые типы" и "Объекты"

//let answer = prompt("Есть ли вам 18?", "Да");
/*
console.log(typeof(null));

console.log("arr" + "- object");
console.log(4 + +"- object");
*/
/*
let incr = 10,
    decr = 10;



console.log(incr++);
console.log(decr--);

console.log(5%2);
console.log("2" === 2);

let isChecked = false,
    isClose = false;

console.log(isChecked || !isClose);
*/

let money = prompt("Введите Ваш бюджет"),
    time = prompt("Введите дату гггг-мм-дд");

let appData = {
    budget: money,
    timeDate: time,
    expense: {},
    optionalExpense: {},
    income: [],
    savings: false
}

alert("Ваш бюджет на 1 день" + " " + appData.budget/30 + " " + "Рублей" );

let a1 = prompt("Введите обязательную статью расходов "),
    a2 = prompt("Введите стоимость "),
    a4 = prompt("Введите обязательную статью расходов "),
    a3 = prompt("Введите стоимость ");
    appData.expense = a1;
    appData.expense = a2;
alert(appData.expenses.a1);
alert(appData.expenses.a2);