// ==========================================
// LEKCJA 2 — OPERATORY I WARUNKI
// ==========================================

// ---------- OPERATORY MATEMATYCZNE ----------

let a = 10;
let b = 3;

console.log("dodawanie:", a + b);
console.log("odejmowanie:", a - b);
console.log("mnożenie:", a * b);
console.log("dzielenie:", a / b);
console.log("modulo (reszta):", a % b);


// ---------- OPERATORY PORÓWNANIA ----------

console.log(5 == "5");   // true (luźne porównanie - NIE używaj)
console.log(5 === "5");  // false (ścisłe porównanie - używaj)

console.log(10 > 5);
console.log(10 < 5);
console.log(10 >= 10);
console.log(10 <= 9);
console.log(10 !== 5);


// ---------- OPERATORY LOGICZNE ----------

let isLoggedIn = true;
let isAdmin = false;

console.log("AND:", isLoggedIn && isAdmin); // oba muszą być true
console.log("OR:", isLoggedIn || isAdmin);  // jedno musi być true
console.log("NOT:", !isLoggedIn);           // odwraca


// ---------- IF / ELSE ----------

let age = 20;

if (age >= 18) {
    console.log("Pełnoletni");
} else {
    console.log("Niepełnoletni");
}


// ---------- ELSE IF ----------

let score = 75;

if (score < 50) {
    console.log("Niedostateczny");
} else if (score < 70) {
    console.log("Dopuszczający");
} else if (score < 90) {
    console.log("Dobry");
} else {
    console.log("Bardzo dobry");
}


// ---------- TERNARY (skrócony if) ----------

let isAdult = age >= 18 ? "TAK" : "NIE";
console.log("Czy pełnoletni:", isAdult);


// ---------- WAŻNE ----------
// używaj === zamiast ==
// if = podejmowanie decyzji