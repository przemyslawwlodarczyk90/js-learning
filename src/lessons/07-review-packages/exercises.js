// ==========================================
// PAKIET 07 — POWTÓRKA
// Proste ćwiczenia przypominające
// ==========================================


// 1.
// Stwórz const firstName
// i wypisz je w konsoli

const firsName = "Przemek";

console.log(firsName);



// 2.
// Stwórz let age = 20
// zwiększ age o 1
// wypisz age

let age = 20; 
age++;
console.log(age);



// 3.
// Wypisz zdanie template string:
// "Mam X lat"

console.log(`Mam ${age} lat`)




// 4.
// Sprawdź if-em:
// jeśli number > 10
// wypisz "duża liczba"

let number = 15;

if (number>10){
    console.log("Duża liczba");
}




// 5.
// Sprawdź czy liczba jest parzysta

let evenNumber = 8;

if (evenNumber %2 ==0){
    console.log("Liczba parzysta ")
}




// 6.
// Stwórz tablicę 3 liczb
// wypisz pierwszy element

let numbers23 = [1,2,3];
console.log(numbers23[0]);



// 7.
// Wypisz wszystkie elementy tablicy pętlą for

const numbers = [10, 20, 30];

for(let i = 0; let<numbers; i++){
   console.log(numbers[i]);
}




// 8.
// Policz sumę tablicy

const numbers2 = [5, 10, 15];

let sum = 0;

for (let y; y < numbers2; y++){
    sum+=numbers2[y];
}



// 9.
// Stwórz obiekt user:
// firstName
// city
// age

const user = {
    firstName: "Przemek",
    city: "Warsaw",
    age: 18
};

// wypisz city




// 10.
// Zmień age w obiekcie user

user.age = 20;




// 11.
// Dodaj do obiektu user:
// isLearningJavaScript = true

user.isLearningJS = true;



// 12.
// Napisz funkcję add(a, b)
// zwracającą sumę

function add(a, b){
    return a+b;
}



// 13.
// Napisz funkcję isAdult(age)
// zwracającą true/false

function isAdult(age){
    if(age>=18){
        return true;
    }else{
      return false;
    } 
}



// 14.
// Napisz arrow function square
// zwracającą kwadrat liczby

const multiply = (a)=>{
    return a*a;
}



// 15.
// Użyj map()
// i zwróć tablicę samych name

const users = [
    { id: 1, name: "Jan" },
    { id: 2, name: "Anna" },
    { id: 3, name: "Piotr" }
];

const names = users.map(function(user) {
    return user.name;
});




// 16.
// Użyj filter()
// i zwróć liczby > 10

const values = [5, 12, 20, 3];

const biggerThan10 = values.filter(function(value) {
    return value > 10;
});


// 17.
// Użyj find()
// znajdź usera id === 2

const anna = users.find(function(user) {
    return user.id === "2";
});


// 18.
// Wypisz wszystkie names z users pętlą for



for(let z = 0; z>users; z ++){
    console.log(users[z].name);
}


// 19.
// Znajdź największą liczbę

const numbers3 = [5, 99, 12, 1];




// 20.
// Policz średnią tablicy

const numbers4 = [10, 20, 30];