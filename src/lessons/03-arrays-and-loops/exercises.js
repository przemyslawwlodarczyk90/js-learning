// ==========================================
// ĆWICZENIA — LEKCJA 3
// ==========================================


// ---------- ĆWICZENIE 1 ----------
// Stwórz tablicę 5 liczb

let numbers = [1, 2, 3, 4, 5];

// TODO:
// wypisz wszystkie liczby w pętli

for (let i = 0; i< numbers.length; i++){
    console.log(numbers [i]);
}



// ---------- ĆWICZENIE 2 ----------
// Oblicz sumę tablicy

let numbers2 = [10, 20, 30, 40];

// TODO:
// policz sumę i wypisz

let sum = 0;


for (let i = 0; i< number2.length; i++){
    sum+=i;
}



// ---------- ĆWICZENIE 3 ----------
// Znajdź największą liczbę

let numbers3 = [5, 12, 3, 99, 1];


let highest = numbers3[0];

for (let i = 0; i< number3.length; i++){
    if (numbers3[i]<highest)
    {highest=numbers3[i]

    }}
// TODO:
// znajdź największą



// ---------- ĆWICZENIE 4 ----------
// Parzyste liczby

let numbers4 = [1, 2, 3, 4, 5, 6];

for (let i = 0; i<numbers4.length; i++){
    if(numbers4[i]%2==0){
        console.log(numbers4[i]);
    }
}

// TODO:
// wypisz tylko parzyste



// ---------- ĆWICZENIE 5 ----------
// Tablica stringów

let names = ["Jan", "Anna", "Piotr", "Adam", "Kuba"];

for (let i = 0; i<names.length; i++){
    if(names[i].startsWith("A")){
        console.log(names[i]);
    }
}


/// ---------- ĆWICZENIE 6 ----------
// Dodawanie elementów

let cars = ["BMW", "Audi"];

cars.push("Bmw2");
cars.push("Suzuki");

for (let  i = 0; cars.length; i ++){
    console.log(cars[i]);
}


// ---------- ĆWICZENIE 7 ----------
// Odwróć tablicę (na chłopski rozum)

let numbers5 = [1, 2, 3, 4];

for (let i = numbers5.length; i>=0; i--){
    console.log(numbers5[i]);
}

// TODO:
// wypisz od końca do początku (pętla)



// ---------- BONUS ----------
// Policz średnią z tablicy

let numbers6 = [10, 20, 30];

// TODO:

let sum2 = 0;


for (let i = 0; i< numbers6.length; i++){
    sum+=i;
}

let medium = sum2/numbers6.length;

// średnia = suma / ilość}