let carrito = [
  { nombre: "Silla Gamer", precio: 300, cantidad: 2 },
  { nombre: "Monitor 140hz", precio: 250, cantidad: 5 },
  { nombre: "Grafica Geforce 4080 ti", precio: 800, cantidad: 3 },
  { nombre: "Auriculares Gamer Logitech g530", precio: 120, cantidad: 8 },
  { nombre: "Mouse Logitech G Superlight", precio: 50, cantidad: 10 }
];

let ordenDesc = [...carrito];

ordenDesc.sort(function(a, b) {
  return b.precio - a.precio;
});

console.log("Producto de mas caro a mas barato:");

for ( let x = 0; x < ordenDesc.length; x++){
  console.log(ordenDesc[x].nombre, "- $", ordenDesc[x].precio);
}



let masCaro = carrito[0];
let masBarato = carrito[0];

for (let y = 1; y < carrito.length; y++) {
  if (carrito[y].precio > masCaro.precio) {
    masCaro = carrito[y];
  }
  if (carrito[y].precio < masBarato.precio) {
    masBarato = carrito[y];
  }
}

console.log("Más caro:", masCaro.nombre, "($"+ masCaro.precio + ")");
console.log("Más barato:", masBarato.nombre, "($"+ masBarato.precio + ")");


let total = 0;

for(let j = 0; j < carrito.length; j++){
  total += carrito[j].precio;
}

console.log("Productos con mucho stock (>5):");

for (let z = 0; z < carrito.length; z++) {
  if (carrito[z].cantidad > 5) {
    console.log(carrito[z].nombre, "-", carrito[z].cantidad, "unidades");
  }
}


console.log("------ RESUMEN CARRITO ------");

function mostrarListado() {
  let listado = "";
  for (let c = 0; c < carrito.length; c++) {
    listado += carrito[c].nombre + " ($" + carrito[c].precio + " x" + carrito[c].cantidad + ")\n";
  }
  return listado; 
}

console.log(mostrarListado());

console.log("-----------------------------");

console.log("Total", total);