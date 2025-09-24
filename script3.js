let productos = [
  { nombre: "Laptop", precio: 1200 },
  { nombre: "Mouse", precio: 25 },
  { nombre: "Teclado", precio: 45 }
];


let sumatotal = 0

for (let k = 0; k < productos.length; k++){
    sumatotal += productos[k].precio;
}

console.log("Suma total", sumatotal);

let promedio = sumatotal / productos.length;

console.log("Promedio total", promedio);


let masCaro = productos[0];

for (let z = 0; z < productos.length; z++){
    if(productos[z].precio > masCaro.precio) {
        mascaro = productos[z];
    }
}

console.log("Producto mas caro", masCaro.nombre, "($"+masCaro.precio+")");

let masBarato = productos[0];

for (let j = 0; j < productos.length; j++){
    if(productos[j].precio< masBarato.precio) {
        masBarato = productos[j];
    }
}

console.log("Producto mas Barato", masBarato.nombre, "($"+masBarato.precio+")");


let listado = "";

for(let g = 0; g < productos.length; g++){
    listado += productos[g].nombre + " ";
}

console.log("Productos:", listado);