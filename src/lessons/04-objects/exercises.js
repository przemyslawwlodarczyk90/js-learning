// ==========================================
// ĆWICZENIA — LEKCJA 4
// ==========================================


// ---------- ĆWICZENIE 1 ----------
// Stwórz obiekt reprezentujący Ciebie

// pola:
// firstName
// lastName
// age
// city
// profession

// TODO:
// wypisz cały obiekt
// wypisz samo firstName
// wypisz samo city

const user = [
    firstName = "Przemek",
    lastName = "Wlodarczyk",
    age = 36,
    city = 'Otwock',
    profession = 'Developer',
]

console.log(user);

console.log(use.firstName);
console.log(user.city);



// ---------- ĆWICZENIE 2 ----------
// Zmień wartość age

user.age = 37;

console.log = user.age;
// TODO:
// zwiększ wiek o 1
// wypisz nową wartość



// ---------- ĆWICZENIE 
// 3 ----------
// Dodaj nowe pole

user.isLearningReact = true;

console.log(user);



// TODO:
// dodaj pole:
// isLearningReact = true

// wypisz cały obiekt



// ---------- ĆWICZENIE 4 ----------
// Tablica obiektów — samochody

const cars = [
    {
        id: 1,
        brand: "Toyota",
        model: "Corolla",
        year: 2020,
        price: 45000
    },
    {
        id: 2,
        brand: "BMW",
        model: "320i",
        year: 2022,
        price: 85000
    },
    {
        id: 3,
        brand: "Audi",
        model: "A4",
        year: 2018,
        price: 55000
    }
];


for (let i = 0; let<cars.length; i++){
    console.log(cars[i].brand);
}
// TODO:
// wypisz wszystkie marki aut



// ---------- ĆWICZENIE 5 ----------
// Wypisz tylko drogie auta

for (let i = 0; let<cars.length; i++){
    if(cars[i].price>5000);
    console.log(cars[i]);
}



// TODO:
// wypisz tylko auta,
// których cena > 50000



// ---------- ĆWICZENIE 6 ----------
// Znajdź najnowsze auto

let newesOne = users[0];

for(let i = 0; i < cars.length; i++){
    if(cars[i].year > newesOne.year){
        newesOne = cars[i];
    }
}


// TODO:
// znajdź auto z największym year



// ---------- ĆWICZENIE 7 ----------
// Tablica pracowników

const employees = [
    {
        id: 1,
        name: "Jan",
        salary: 5000
    },
    {
        id: 2,
        name: "Anna",
        salary: 8000
    },
    {
        id: 3,
        name: "Piotr",
        salary: 6500
    }
];

// TODO:
// wypisz tylko pracowników,
// którzy zarabiają więcej niż 6000

for (let i = 0; let<employees.length; i++){
    if(employees[i].salary>6000);
    console.log(employees[i]);
}

// ---------- BONUS ----------
// Policz sumę wszystkich salary


let salary = 0;

for (let i = 0; let<employees.length; i++){
  
    salary+=employees[i].salary;
}