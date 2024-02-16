console.log("Starting javascript...");

//--------- Difficulty Level: Low ---------------
//Exercise 1
function add(){
    console.log("The result of 100 x 20 is " + (100*20));
}

//Exercise 2
add();

//Exercise 3
function add2(num1,num2){
    console.log(`The result of ${num1} x ${num2} is ${num1 * num2}`);
}

//Exercise 4
let number1 = 100;
let number2 = 20;
add2(number1,number2);

//Exercise 5
function add3(num1,num2){
    let result = num1 * num2;
    return result;
}

//Exercise 6
const fnAnonima = function (num1,num2) {
    let result = num1 * num2;
    console.log(result);
}

fnAnonima(number1,number2);

//--------- Difficulty Level: Medium ---------------

//Exercise 1
function greet(name){
    console.log(`Bienvenido/a ${name}`);
}
greet("Lisandro");

//Exercise 2
const mult = function(num1,num2) {
    console.log( num1 * num2);
}

mult(number1,number2);

//Exercise 3
function area(base, height){
    return (base*height)/2; 
}

//Exercise 4
function perimeter(side1, side2, side3){
    return (side1 + side2 + side3);
}

//Exercise 5
function totalPrice(price, quantity){
    let total = price * quantity;
    if (quantity <= 10){
        total = total - (total/10);
    } else if (quantity <= 20){
        total = total - (total*2/10);
    }
    return total;
}

let purchase = totalPrice(120,5);
console.log(purchase);

//Exercise 6
function isAnAdult(age){
    let msg="";
    if(age >= 18){
        msg = "You are an adult";
    } else {
        msg = "You are not an adult";
    }
    return msg;
}

let mensaje = isAnAdult(12);
console.log(mensaje);

let mensaje2 = isAnAdult(18);
console.log(mensaje2);

//--------- Difficulty Level: High ---------------
//Exercise 1
function taxCalculator(income) {
    let tax = 0;
    if(income <= 10000){
        tax = income * 0.1;
    } else if(income <= 20000){
        tax = income * 0.15;
    } else {
        tax = income * 0.2;
    }
    return tax;
}

let impuesto = taxCalculator(9000);
console.log(`According to your income you must pay: ${impuesto} of taxes`);

//Exercise 2
function typeOfDay(day){
    let msg = "";
    switch(day){
        case 1: case 2: case 3: case 4: case 5:
            msg = "It is a business day";
            break;
        
        case 6: case 7:
            msg = "It's the weekend";
            break;
        default:
            msg = "Error";
            break;
    }

    return msg;
}

let mensajeDia = typeOfDay(4);
console.log(mensajeDia);

//Exercise 3

function enterPersonalInformation(){
    let nombre = prompt(`Enter your name: `);
    while (nombre == "") {
        nombre = prompt(`Enter your name: `);
    }

    let apellido = prompt(`Enter your last name: `);
    while (apellido == "") {
        apellido = prompt(`Enter your last name: `);
    }

    let edad = Number(prompt(`Enter your age: `));
    while (!edad ) {
        edad = prompt(`Enter your age: `);
    }

    let personalInfo = {
        firstName: nombre,
        lastName: apellido,
        age: edad
    }

    console.log(`Personal Information:`);
    console.log("Name:", personalInfo.firstName);
    console.log("Last Name:", personalInfo.lastName);
    console.log("Age:", personalInfo.age);
}

enterPersonalInformation();

//Exercise 4
/*
function greeting(name){
    return (`Hello, my name is ${name}`);
}

function calculateAge(birthYear, currentYear){
    return (currentYear - birthYear);
}

function presentation( nombre, currentYear, birthYear){
    alert(`${greeting(nombre)} and I am ${calculateAge(birthYear, currentYear)}`);
}

let nombre = prompt("Enter your name");
let currentYear = Number(prompt("Enter the year"));
let birthYear = Number(prompt("Enter the year of your birth"));

presentation(nombre, currentYear, birthYear);
*/
