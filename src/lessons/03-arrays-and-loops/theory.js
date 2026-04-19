// ==========================================
// LEKCJA 3 — TABLICE I PĘTLE
// ==========================================

// ---------- TABLICE ----------

let numbers = [1, 2, 3, 4, 5];

console.log(numbers);
console.log(numbers[0]); // pierwszy element
console.log(numbers.length); // długość


// ---------- DODAWANIE ----------

numbers.push(6); // na koniec
console.log(numbers);


// ---------- USUWANIE ----------

numbers.pop(); // usuwa ostatni
console.log(numbers);


// ---------- PĘTLA FOR ----------

for (let i = 0; i < numbers.length; i++) {
    console.log("element:", numbers[i]);
}


// ---------- SUMA ----------

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
}

console.log("suma:", sum);


// ---------- WAŻNE ----------
// tablica = lista danych
// pętla = przechodzenie po niej