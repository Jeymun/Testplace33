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
