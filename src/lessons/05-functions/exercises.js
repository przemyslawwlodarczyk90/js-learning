// ==========================================
// ĆWICZENIA — LEKCJA 5
// ==========================================


// ---------- ĆWICZENIE 1 ----------
// Napisz funkcję sayHello()
// która wypisze:
// "Hello JavaScript"

function sayHello(){
    console.log("Hello JavaScript");
}



// ---------- ĆWICZENIE 2 ----------
// Napisz funkcję greetUser(name)
// która przyjmuje imię
// i wypisuje:
// "Witaj, X"

function greetUser(name){
    console.log(`Witaj, ${name}`);
}





// ---------- ĆWICZENIE 3 ----------
// Napisz funkcję add(a, b)
// która zwraca sumę dwóch liczb

function add (a, b){
    return (a + b);
}

console.log(add(10, 15));



// potem:
// console.log(add(10, 15));



// ---------- ĆWICZENIE 4 ----------
// Napisz funkcję isEven(number)
// która zwraca true jeśli liczba parzysta
// i false jeśli nie

function isEven(number){
    if(number%2==0){
        return true;
    }else{
        return false;
    }
    
}


// ---------- ĆWICZENIE 5 ----------
// Napisz funkcję calculateDiscount(price, percent)
// która zwraca cenę po rabacie


function calculateDiscount(price, percent){
    let scale = 100 - percent/100;
    return price * scale;
}

// przykład:
// calculateDiscount(1000, 10)
// wynik: 900



// ---------- ĆWICZENIE 6 ----------
// Napisz funkcję findGreater(a, b)
// która zwróci większą liczbę


function findGreater(a, b){
    if(a>b){
        return a;
    }else{
        return b;
    }
}


// ---------- ĆWICZENIE 7 ----------
// Napisz arrow function
// const square = (number) => ...
// która zwróci kwadrat liczby


const sqaure = (number) => 
{
    return number * number;
}

// ---------- BONUS ----------
// Napisz funkcję,
// która przyjmuje tablicę liczb
// i zwraca ich sumę

// przykład:
// sumArray([1,2,3]) -> 6



