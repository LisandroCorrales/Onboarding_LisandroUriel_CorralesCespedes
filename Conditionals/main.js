console.log("Starting javascript...");

//--------- Difficulty Level: Low ---------------
//Exercise 1

let num1 = 4;
let num2 = 5;

if (num1 > num2) {
    console.log(num1);
} else {
    console.log(num2);
}

//Exercise 2
if (num1 > num2) {
    console.log(num1);
} else if (num2 > num1){
    console.log(num2);
} else {
    console.log("The numbers are equal");
}

//Exercise 3
if (num1 === num2) {
    console.log("The numbers are equal");
} else {
    console.log("The numbers are different");
}

//Exercise 4
let date1 = "2018-9-2"
let date2 = "2023-7-5"

if (date1 > date2) {
    console.log(`The date ${date1} is greater than ${date2}`);
} else if (date1 < date2){
    console.log(`The date ${date2} is greater than ${date1}`);
} else {
    console.log("The dates are the same");
}

//Exercise 5
//
//
//
//
//



//Exercise 6
let number1 = 5;
let number2 = 7;
let number3 = 9;

if (number1 > number2 && number1 > number3) {
    console.log(`The number ${number1} is the largest`);
} else if (number2 > number1 && number2 > number3){
    console.log(`The number ${number2} is the largest`);
} else if (number3 > number1 && number3 > number2){  //Could delete the condition
    console.log(`The number ${number3} is the largest`);
}


//--------- Difficulty Level: Medium ---------------
//Exercise 1
/*let color = prompt("Choose a color: red, blue or green")
switch (color) {
    case "red":
        console.log(`The color of passion`);
        break;
    case "blue":
        console.log(`The color of the sea`);
        break;
    case "green":
        console.log(`The color of nature`);
        break;
    default:
        console.log(`That colour was not specified`);
        break;
} */

//Exercise 2
/*
let numberOne = Number(prompt("Enter a number from 1 to 100"));
let numberTwo = Number(prompt("Enter another number from 1 to 100"));
let operation = prompt("Enter an operation: addition, subtraction, multiplication, division");

switch (operation) {
    case "addition":
        console.log(`the sum of ${numberOne} and ${numberTwo} is: ` + (numberOne + numberTwo));
        break;
    case "subtraction":
        console.log(`the subtraction of ${numberOne} and ${numberTwo} is: ` + (numberOne - numberTwo));
        break;
    case "multiplication":
        console.log(`the multiplication of ${numberOne} and ${numberTwo} is: ` + (numberOne * numberTwo));
        break;
    case "division":
        console.log(`the division of ${numberOne} and ${numberTwo} is: ` + (numberOne / numberTwo));
        break;
    default:
        console.log(`That was an invalid operation`);
        break;
}
*/

//Exercise 3
let person1 = {
    name: "Juan",
    age: 39,
    height: 1.69
}

let person2 = {
    name: "Rosa",
    age: 40,
    height: 1.60
}

if ((person1.height > person2.height) && (person1.age > person2.age)) {
    console.log(`${person1.name} is taller and older than ${person2.name}`);
} else if ((person2.height > person1.height) && (person2.age > person1.age)) {
    console.log(`${person2.name} is taller and older than ${person1.name}`);
} else if ((person2.height > person1.height) && (person1.age > person2.age)){
    console.log(`${person2.name} is taller and younger than ${person1.name}`);
} else if ((person1.height > person2.height) && (person2.age > person1.age)){
    console.log(`${person1.name} is taller and younger than ${person2.name}`);
}

//Exercise 4
/*
let name = prompt("Enter your name: ");
let age = Number(prompt("Enter your age: "));
let height = Number(prompt("Enter your height: "));
let vision = Number(prompt("Enter your vision: ")); 

if ((age >= 18) && (height > 110) && (vision >= 8)){
    console.log("You are qualified to drive");
}
*/

//Exercise 5
/*
let edad = Number(prompt("Enter your age: "));
if (edad <= 12) {
    alert("Infantil");
} else if (edad <=18) {
    alert("Adolescent");
} else if (edad <=45){
    alert("Older young");
} else if (edad <= 100){
    alert("Elderly ");
} else {
    alert("Is he really that old?");
}
*/

//Exercise 6
//
//
//
//

//--------- Difficulty Level: High ---------------
//Exercise 1


