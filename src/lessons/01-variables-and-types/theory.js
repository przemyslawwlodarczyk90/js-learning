// ==========================================
// LEKCJA 1 — ZMIENNE I TYPY DANYCH
// ==========================================

// ---------- ZMIENNE ----------

// const = nie zmieniasz wartości
const name = "Przemek";

// let = możesz zmieniać
let age = 35;
age = 36;

console.log("const name:", name);
console.log("let age:", age);

// var = stare, nie używamy na start


// ---------- TYPY DANYCH ----------

// string
const city = "Łuków";

// number
const price = 99.99;

// boolean
const isLearning = true;

// null
const selectedCar = null;

// undefined
let result;

console.log("city:", city);
console.log("price:", price);
console.log("isLearning:", isLearning);
console.log("selectedCar:", selectedCar);
console.log("result:", result);


// ---------- typeof ----------

console.log("typeof city:", typeof city); // string
console.log("typeof price:", typeof price); // number
console.log("typeof isLearning:", typeof isLearning); // boolean
console.log("typeof selectedCar:", typeof selectedCar); // object (JS bug)
console.log("typeof result:", typeof result); // undefined


// ---------- TEMPLATE LITERALS ----------

const firstName = "Przemek";
const lastName = "Włodarczyk";
const userAge = 35;

console.log(`Nazywam się ${firstName} ${lastName} i mam ${userAge} lat.`);


// ---------- WAŻNE ----------
// const → default
// let → tylko jak zmieniasz
// var → ignoruj na start