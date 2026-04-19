// ==========================================
// ĆWICZENIA — LEKCJA 6
// ==========================================

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
    },
    {
        id: 4,
        brand: "Honda",
        model: "Civic",
        year: 2021,
        price: 48000
    }
];


// ---------- ĆWICZENIE 1 ----------
// Użyj map()
// i wyciągnij tylko brand

// wynik:
// ["Toyota", "BMW", "Audi", "Honda"]


const names = cars.map(function(car) {
    return car.name;
});





// ---------- ĆWICZENIE 2 ----------
// Użyj map()
// i stwórz tablicę samych cen

// wynik:
// [45000, 85000, 55000, 48000]

const prices = cars.map(function(car) {
    return car.price;
});





// ---------- ĆWICZENIE 3 ----------
// Użyj filter()
// i zwróć auta droższe niż 50000

const pricesHigher = cars.filter(function(car) {
    return car.price > 50000;
});


// ---------- ĆWICZENIE 4 ----------
// Użyj filter()
// i zwróć auta nowsze niż 2020

const newest = cars.filter(function(car) {
    return car.year > 2020;
});


// ---------- ĆWICZENIE 5 ----------
// Użyj find()
// znajdź auto marki BMW

const bmw = cars.find(function(car){
    car.brand === "BMW";
});



// ---------- ĆWICZENIE 6 ----------
// Użyj find()
// znajdź auto o id = 3

const idThree  = cars.find(function(car){
    car.id === 3;
});

// ---------- ĆWICZENIE 7 ----------
// Użyj filter()
// znajdź auta:
// price < 60000
// i year > 2019


const filter = cars.filter(function(car){
    return car.price<6000 && car.year>2019;
});



// ---------- BONUS ----------
// Użyj map()
// i stwórz nową tablicę:

// [
//   "Toyota Corolla",
//   "BMW 320i",
//   "Audi A4"
// ]