function sumarArray(arr) {
    let suma = 0;
    for (let a = 0; a < arr.length; a++){
        suma += arr[a];
    }
    return suma;
}

let numeros = [44, 33, 22];

let numeros2 = [55, 33, 100];


console.log("Resultado 1", sumarArray(numeros));

console.log("Resultado 2", sumarArray(numeros2));

let persona2= {
  nombre: "Santiago",
  edad: 21,
  estudiante: true
};



let persona= {
    nombre: "Jose",
    edad: 33,
    estudiante: false
};

console.log(persona.nombre);  // "Santiago"
console.log(persona["edad"]); // 21


let productos = [
  { nombre: "Laptop", precio: 1200 },
  { nombre: "Mouse", precio: 25 },
  { nombre: "Teclado", precio: 45 }
];


for (let i = 0; i < productos.length; i++) {
  console.log(productos[i].nombre + " cuesta $" + productos[i].precio);
}


let total = 0;

for (let i = 0; i < productos.length; i++) {
  total += productos[i].precio;
}

console.log("Precio total:", total); // 1270


let masCaro = productos[0];

for (let i = 1; i < productos.length; i++) {
  if (productos[i].precio > masCaro.precio) {
    masCaro = productos[i];
  }
}

console.log("Producto más caro:", masCaro.nombre, "($"+masCaro.precio+")");


let listaNombres = "";

for (let i = 0; i < productos.length; i++) {
  listaNombres += productos[i].nombre + " ";
}

console.log("Productos:", listaNombres.trim());
