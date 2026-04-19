// ==========================================
// LEKCJA 4 — OBIEKTY
// ==========================================


// ---------- POJEDYNCZY OBIEKT ----------

const user = {
    firstName: "Przemek",
    lastName: "Włodarczyk",
    age: 36,
    city: "Łuków",
    isJavaDeveloper: true
};

console.log(user);


// ---------- DOSTĘP DO WŁAŚCIWOŚCI ----------

console.log(user.firstName);
console.log(user.age);


// ---------- ZMIANA WARTOŚCI ----------

user.age = 37;

console.log(user.age);


// ---------- DODANIE NOWEGO POLA ----------

user.country = "Polska";

console.log(user);


// ---------- TABLICA OBIEKTÓW ----------

const users = [
    {
        id: 1,
        name: "Jan",
        age: 25,
        city: "Warszawa"
    },
    {
        id: 2,
        name: "Anna",
        age: 30,
        city: "Kraków"
    },
    {
        id: 3,
        name: "Piotr",
        age: 40,
        city: "Gdańsk"
    }
];

console.log(users);


// ---------- PĘTLA PO TABLICY OBIEKTÓW ----------

for (let i = 0; i < users.length; i++) {
    console.log(users[i].name);
}


// ---------- WARUNEK ----------

for (let i = 0; i < users.length; i++) {
    if (users[i].age > 28) {
        console.log(users[i].name);
    }
}


// ---------- WAŻNE ----------

// object = jeden byt
// array of objects = lista bytów

// Java:
// User user = new User()

// JS:
const person = {
    name: "Test"
}