// ==========================================
// LEKCJA 5 — FUNKCJE
// ==========================================


// ---------- PODSTAWOWA FUNKCJA ----------

function sayHello() {
    console.log("Cześć!");
}

sayHello();


// ---------- FUNKCJA Z PARAMETRAMI ----------

function greet(name) {
    console.log(`Cześć ${name}`);
}

greet("Przemek");
greet("Kuba");


// ---------- RETURN ----------

function add(a, b) {
    return a + b;
}

let result = add(10, 20);

console.log(result);


// ---------- FUNKCJA Z WARUNKIEM ----------

function isAdult(age) {
    if (age >= 18) {
        return true;
    }

    return false;
}

console.log(isAdult(20));
console.log(isAdult(15));


// ---------- ARROW FUNCTION ----------

const multiply = (a, b) => {
    return a * b;
};

console.log(multiply(5, 4));


// ---------- KRÓTSZY ARROW ----------

const double = number => number * 2;

console.log(double(10));


// ---------- WAŻNE ----------

// function = klasyczny zapis
// => = nowoczesny zapis

// Java:
// public int add(int a, int b)

// JS:
// function add(a, b)