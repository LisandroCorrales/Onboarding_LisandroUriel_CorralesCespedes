console.log("Starting javascript...");

//--------- Difficulty Level: Low ---------------
//Exercise 1
/*
let numberLimit = Number(prompt("Ingrese un numero"));
for (let i = numberLimit; i >= 0; i--){
    console.log(i);
}
*/


//Exercise 2
/*
let number1to10 = Number(prompt("Ingrese un numero del 1 al 10"));
for (let i = 1; i <= 10; i++) {
    console.log(` ${i} x ${number1to10} = ` + (i * number1to10));
}
*/

//Exercise 3
/*
let numeroIngresado = Number( prompt( 'Ingrese un numero, para cancelar ingrese 0' ) );
let sumatoria=0;
while (numeroIngresado !== 0) {
    sumatoria += numeroIngresado;
    numeroIngresado = Number( prompt( 'Ingrese otro numero, para cancelar ingrese 0' ) );
}
console.log(`La sumatoria de numeros ingresados es: ${sumatoria}`);
*/


//Exercise 4
/*
let numeroIngresado;
let sumaNumerosIngresados = 0;
do {
    numeroIngresado = Number( prompt( 'Ingrese un numero, para cancelar ingrese 0' ) );
    if( numeroIngresado){
        sumaNumerosIngresados += numeroIngresado
    }
}while (numeroIngresado);

console.log(`La suma de los numeros ingresados es: ${sumaNumerosIngresados}`);
*/

//Exercise 5
const alumno = {
    name: "Lisandro",
    lastName: "Corrales",
    age: 24,
    nationality: "Argentinian",
    studies: "University in progress"
}

for (const key in alumno) {
    console.log(key);
}

//Exercise 6
for (const values in alumno){
    console.log(alumno[values]);
}


//--------- Difficulty Level: Medium ---------------

//Exercise 1
/*
let sumatoria = 23 //Supongo que ese es el valor de la variable del ejercicio 3
let numeroSecreto = Number(prompt(`Ingrese un numero`));
while (sumatoria !== numeroSecreto){ 
    if (numeroSecreto > sumatoria) {
        alert(`El numero ingresado es mayor al buscado`);
    } else {
        alert(`El numero ingresado es menor al buscado`);
    }

    numeroSecreto = Number(prompt(`Ingrese un numero`));
}
alert(`Felicidades encontraste el numero secreto: ${numeroSecreto}`);
*/

//Exercise 2
/*
let num = Number(prompt("Enter a number:"));
console.log(`The divisors of ${num} are:`);
for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
        console.log(i);
    }
}
*/

//Exercise 3
/*
function RingBell() {
    console.log("Ding Dong");
    return "Ding Dong,"
}

let num = Number(prompt(`Ingresa la cantidad de campanazos `));
let ring = " ";
for (let i = 0; i<num; i++) {
    ring = ring + RingBell();
}
console.log(ring);
*/


//Exercise 4
const dateLimit = "1997-8-3";
const dates = ["1984-18-2", "1998-3-2", "1973-15-7", "2024-31-10", "2081-1-9"];

for(let i=0 ; i < dates.length ; i++){
    if(dates[i] >= dateLimit){
        console.log(dates[i]);
    }
}


//Exercise 5
const colores=["red", "green", "blue", "violet", "brown", "black", "white"];

for (const color of colores) {
    console.log(color);
}

//Exercise 6
function elementsOfArray(list){
    for (const element of list) {
        console.log(element);
    }
}

/*elementsOfArray(colores);*/

//Exercise 7

const numbers=[5,7,1,3,50];
for (const number of numbers) {
    console.log(`The number is ${number} and its double is ${number*2}`);
}

//Exercise 8
const miembrosFamilia = [
    { nombre: "Carlos", edad: 42, vinculo: "Papá", apellido: "Perez" },
    { nombre: "Nancy", edad: 39, vinculo: "Mamá", apellido: "Garcia" },
    { nombre: "Francisco", edad: 12, vinculo: "Hijo", apellido: "Perez Garcia" },
    { nombre: "Sofia", edad: 10, vinculo: "Hija", apellido: "Perez Garcia" }
];

function presentacionDeMiembrosFamilia(familia){
    for (const miembro of familia) {
        console.log(`Hola, soy ${miembro.nombre} ${miembro.apellido} (${miembro.vinculo}) y tengo ${miembro.edad} años`);
    }
}

presentacionDeMiembrosFamilia(miembrosFamilia);


//--------- Difficulty Level: High ---------------

//Exercise 1
/*
let sumaPares=0;
let sumaImpares=0;
let numeroIngresado = Number( prompt( 'Ingrese un numero, para cancelar ingrese 0' ) );

while (numeroIngresado !== 0) {
    if((numeroIngresado % 2) == 0){
        sumaPares = sumaPares + numeroIngresado;
    } else {
        sumaImpares = sumaImpares + numeroIngresado;
    }
    numeroIngresado = Number( prompt( 'Ingrese otro numero, para cancelar ingrese 0' ) );
}
console.log(`La sumatoria de numeros pares ingresados es: ${sumaPares}`);
console.log(`La sumatoria de numeros impares ingresados es: ${sumaImpares}`);
*/


//Exercise 2
const numeros = [20, 15, 50, 99, 36, 74, 100, 120, 150, 48, 36, 29];
let mayor;

for (let i = 0; i < numeros.length; i++) {
    if (i == 0){
        mayor = numeros[i];
    } else if(mayor < numeros[i]){
        mayor = numeros[i];
    }
}
console.log(`El nro mas grande del array es: ${mayor}`);