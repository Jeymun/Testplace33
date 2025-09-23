let z = 0;
while (z < 10){
  console.log(z);
  z++;
}

function Saludar(name) {
  return "Hola " + name;
}

console.log(Saludar("Santi"));


let numbers = [10, 30, 40];
console.log(numbers[0]);



let jugadores = ["Messi", "Cristiano", "Neymar"];

console.log(jugadores[1]);


let person = { name: "Willyrex", age: 33 };
console.log(person.name);
console.log(person["age"]);

let numeros = [5, 23, 1, 4, 7, 6, 10, 25, 30, 113];

let sum = 0;

for (let x = 0; x < numeros.length; x++) {
  sum += numeros[x];
}
console.log(sum);

let notas = [43, 23];


let suma = 0;

for (let u = 0; u < notas.length; u++) {
  suma += notas[u];
}

console.log(suma);


let max = numeros[0]; // start with the first number

for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > max) {
    max = numeros[i];
  }
}

console.log("Max:", max);


let average = suma / numeros.length;
console.log("Average:", average);


let min = numeros[0];

for (let k = 1; k < numeros.length; k++) {
  if (numeros[k] < min ) {
    min = numeros[k];
  }
}

console.log("Min:", min);


let pares = 0;
let impares = 0;


for (let p = 0; p < numeros.length; p++) {
  if (numeros[p] % 2 === 0) {
    pares++;
  }
  else {
    impares++;
  }
}

console.log("Cantidad de pares", pares);
console.log("Cantidad de impares", impares);


let invertido = [];

for (let a = numeros.length - 1; a >= 0; a--){
  invertido.push(numeros[a]);
}


console.log("Array", numeros);
console.log("Array Invertido", invertido);

let suma2 = 0

for (let b = 0; b < numeros.length; b++) {
  if (numeros[b] > 50) {
    suma2+= numeros[b];
  }
}

console.log("Numeros mayores a 50", suma2);

let palabras = ["Hola", "Mundo", "Vegeta"];
let resultado = "";

for (let l= 0; l < palabras.length; l++) {
  resultado += palabras[l];
}

console.log("Resultado", resultado);

let numeros2 = [65, 344, 666, 222, 5234, 5324, 5555, 4444];

let suma3 = 0;
let min2 = numeros2[0];
let max2 = numeros2[0];
let pares2 = 0;
let impares2 = 0;

for (let g = 0; g < numeros2.length; g++) {
  suma3 += numeros2[g];

  if (numeros2[g] > max) {
    max2= numeros2[g];
  }

  if (numeros2[g] < min) {
    min2 = numeros2[g];
  }

  if (numeros2[g] % 2 === 0) {
    pares2++;
  }
    else {
      impares2++;
    }
}


let promedio2 = suma3 / numeros.length;

let palabras2 = ["Kpop", "Demon", "Hunters"];

let resultado2 = "";

for (let v = 0; v < palabras2.length; v++ ){
  resultado2 += palabras2[v] + " "; 
}


resultado2 = resultado2.trim(); // quita el último espacio extra
console.log("Array de números:", numeros2);
console.log("Suma:", suma3);
console.log("Promedio:", promedio2);
console.log("Máximo:", max2);
console.log("Mínimo:", min2);
console.log("Cantidad de pares:", pares2);
console.log("Cantidad de impares:", impares2);

console.log("Array de strings:", palabras2);
console.log("Concatenado:", resultado2);