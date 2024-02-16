console.log("Starting javascript...");

//--------- Difficulty Level: Low ---------------
let myName = "Lisandro";
console.log(myName);

let myLastName = "Corrales";
console.log(myLastName);

let myAge = 24;
console.log(myAge);

let myPet = "Luna";
let petAge = 2;

let fullName = `${myName} ${myLastName}`; // myName + " " + myLastName; 
console.log(fullName);

let presentationText = `Hi my name is ${myName} ${myLastName}. I'm ${myAge} years old. I live in BA with my parents. I have a dog. Her name is ${myPet} and she is ${petAge} years old.`; // myName + " " + myLast
console.log(presentationText);

//--------- Difficulty Level: Medium ---------------

let sumAges = myAge + petAge;
let subtractAges = myAge - petAge;
let productAges = myAge * petAge;
let divisionAges = myAge / petAge;

console.log(`La suma de las edades es: ${sumAges}`);
console.log(`La resta de las edades es: ${subtractAges}`);
console.log(`El producto de las edades es: ${productAges}`);
console.log(`La division de las edades es: ${divisionAges}`);

const student = {
    age : 24,
    gender : "male",
    favoriteSubject: "math",
    knowJS: true,
    submittedProjects: true,
}

console.table(student);
console.log("Alumno edad: " + student.age);
console.log("Alumno genero: " + student.gender);
console.log("Alumno materia favorita: " + student.favoriteSubject);
console.log("Alumno sabe JS? " + student.knowJS);
console.log("Alumno entrego proyectos? " + student.submittedProjects);

const pet = {
    age : 2,
    animal: "dog",
    name: "Luna",
    liveWithOthers: true,
    race: "Caniche Toy",
}

console.table(pet);
console.log("Mascota edad: " + pet.age);
console.log("Mascota animal: " + pet.animal);
console.log("Mascota nombre: " + pet.name);
console.log("Mascota vive con otros perros? " + pet.liveWithOthers);
console.log("Mascota raza: " + pet.race);

const fruits = ["Apple", "Orange", "Banana", "Grapes", "Strawberries"];

console.log(fruits);
console.log("Fruit: " + fruits[0]);
console.log("Fruit: " + fruits[1]);
console.log("Fruit: " + fruits[2]);
console.log("Fruit: " + fruits[3]);
console.log("Fruit: " + fruits[4]);

//--------- Difficulty Level: High ---------------

let yourAge = prompt("Enter your age: ");
let IamAdult = (yourAge >= 18);
console.log("I am an adult? " + IamAdult);

const numbers = [10, 20, 30, 40, 50];
console.log(numbers);
console.log("Number: " + numbers[0]);
console.log("Number: " + numbers[1]);
console.log("Number: " + numbers[2]);
console.log("Number: " + numbers[3]);
console.log("Number: " + numbers[4]);

const family = ["Dad" , "Mum" , "Son" , "Daughter" , "Uncle"];
console.log(family);
console.log("Family member: " + family[0]);
console.log("Family member: " + family[1]);
console.log("Family member: " + family[2]);
console.log("Family member: " + family[3]);
console.log("Family member: " + family[4]);

let randomText = `${fruits[1]} ${numbers[3]} ${family[4]}`
console.log(randomText);
