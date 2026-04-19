// ==========================================
// LEKCJA 6 — MAP / FILTER / FIND
// ==========================================


// ---------- DANE ----------

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
        age: 31,
        city: "Kraków"
    },
    {
        id: 3,
        name: "Piotr",
        age: 19,
        city: "Gdańsk"
    }
];


// ==========================================
// MAP()
// ==========================================

// map = przekształca każdy element
// i zwraca NOWĄ tablicę

const names = users.map(function(user) {
    return user.name;
});

console.log(names);
// ["Jan", "Anna", "Piotr"]


// ==========================================
// FILTER()
// ==========================================

// filter = zwraca tylko elementy
// spełniające warunek

const adults = users.filter(function(user) {
    return user.age >= 18;
});

console.log(adults);


// ==========================================
// FIND()
// ==========================================

// find = zwraca PIERWSZY pasujący element

const anna = users.find(function(user) {
    return user.name === "Anna";
});

console.log(anna);


// ==========================================
// ARROW VERSION
// ==========================================

const names2 = users.map(user => user.name);

console.log(names2);


// ==========================================
// WAŻNE
// ==========================================

// map -> zmieniam dane
// filter -> wybieram dane
// find -> szukam jednego