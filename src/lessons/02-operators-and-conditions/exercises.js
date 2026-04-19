// ==========================================
// ĆWICZENIA — LEKCJA 2
// ==========================================


// ---------- ĆWICZENIE 1 ----------
// Sprawdź czy liczba jest parzysta

let number = 10;

if(number % 2 ==0){
    console.log("Liczba jest parzysta");
}

// TODO:
// jeśli parzysta → "parzysta"
// jeśli nie → "nieparzysta"



// ---------- ĆWICZENIE 2 ----------
// Kalkulator rabatu

let price = 1000;
let isClient = true;

// TODO:
// jeśli klient i cena > 500 → 10% rabatu
// wypisz końcową cenę

if (isClient && price>500){
    price=price * 0,9;;
}


// ---------- ĆWICZENIE 3 ----------
// Sprawdź wiek

let age2 = 17;

// TODO:
// <18 → "dziecko"
// 18-65 → "dorosły"
// >65 → "senior"

if(age2<18){
    console.log("Dziecko");
} else if(age2>=18 && age2<=65){
    console.log("Dorosły");
} else {
        console.log("Senior");
    }




// ---------- ĆWICZENIE 4 ----------
// Sprawdź login

let isLoggedIn = true;
let isAdmin = false;

// TODO:
// jeśli zalogowany i admin → "panel admina"
// jeśli zalogowany → "panel usera"
// jeśli nie → "zaloguj się"

if(isLoggedIn == true && isAdmin == true){
    console.log("Panel admina");

    }else if (isLoggedIn == true && isAdmin == false){
    console.log("Panel usera");
    }else {
        console.log("Zaloguj się");
    }



// ---------- ĆWICZENIE 5 ----------
// Porównania

let a = 5;
let b = "5";

// TODO:
// sprawdź:
// a == b
// a === b
// a !== b

console.log(a == b);
console.log(a === b);
console.log(a !== b);


// ---------- ĆWICZENIE 6 ----------
// Największa liczba z 3

let x = 10;
let y = 25;
let z = 15;

if(x>y){
    console.log("X największe")
} else if (y>(z || x)){
    console.log("y jest największe")
} else if (z>(y || x)){
    console.log("z największe")
} else if (x>(y||z)){
    console.log("x największe")
};

// TODO:
// znajdź największą i wypisz



// ---------- ĆWICZENIE 7 ----------
// Ternary

let isOnline = false;

let status = isOnline >= true ? "ONLINE" : "OFFLINEE";

// TODO:
// ustaw zmienną status:
// "online" albo "offline"
// użyj ternary



// ---------- BONUS ----------
// Wymyśl własny warunek:
// np. czy auto jest opłacalne:
// cena < 50000 i rok > 2015