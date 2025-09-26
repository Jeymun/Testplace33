let carrito = [
  { nombre: "Laptop", precio: 1200, cantidad: 1 },
  { nombre: "Mouse", precio: 25, cantidad: 2 },
  { nombre: "Teclado", precio: 45, cantidad: 1 },
  { nombre: "Auriculares", precio: 80, cantidad: 3 }
];

console.log("Productos baratos (<100):");

for (let j = 0; j < carrito.length; j++) {
  if (carrito[j].precio < 100) {
    console.log(carrito[j].nombre, "- $", carrito[j].precio);
  }
}


let buscado = "Mouse";
let encontrado = null;

for (let i = 0; i < carrito.length; i++) {
  if (carrito[i].nombre === buscado) {
    encontrado = carrito[i];
    break; // dejamos de buscar, ya lo encontramos
  }
}

if (encontrado) {
  console.log("Encontrado:", encontrado.nombre, "- $", encontrado.precio);
} else {
  console.log("Producto no encontrado");
}

let buscado2 = "Laptop";

let encontrado2 = null;

for (let h = 0; h < carrito.length; h++) {
    if (carrito[h].nombre === buscado2) {
        encontrado2 = carrito[h];
        break;
    }
}

if (encontrado2) {
    console.log("Producto Encontrado", encontrado2.nombre, "- $", encontrado2.precio);
} else {
    console.log("Producto no encontrado");
}


let total = 0;

for(let v = 0; v < carrito.length; v++){
    total += carrito[v].precio * carrito[v].cantidad;
}

console.log("Su total es ", total);

let totalConDescuento = total;

if (total > 1000) {
  totalConDescuento = total * 0.9; // 10% menos
}

console.log("Total con descuento:", totalConDescuento);


let totalcon20 = total;

if (total > 1200 ) {
    totalcon20 = total * 0.8;
}

console.log("Total con 20%:", totalcon20);

console.log("Listado de productos:");

for (let h = 0; h < carrito.length; h++) {
  console.log(
    carrito[h].nombre + " - $" + carrito[h].precio + " (x" + carrito[h].cantidad + ")"
  );
}

console.log("Total final:", totalConDescuento);


carrito[0].categoria = "Electrónica";
carrito[1].categoria = "Accesorios";
carrito[2].categoria = "Accesorios";
carrito[3].categoria = "Audio";

console.log("Productos de Accesorios:");
for (let i = 0; i < carrito.length; i++) {
  if (carrito[i].categoria === "Accesorios") {
    console.log(carrito[i].nombre, "- $", carrito[i].precio);
  }
}


function buscarProducto(nombre) {
  for (let a = 0; a < carrito.length; a++) {
    if (carrito[a].nombre === nombre) return carrito[a];
  }
  return null;
}

// Calcular total del carrito
function calcularTotal() {
  let total = 0;
  for (let b = 0; b < carrito.length; b++) {
    total += carrito[b].precio * carrito[b].cantidad;
  }
  return total;
}

// Mostrar listado bonito
function mostrarListado() {
  let listado = "";
  for (let c = 0; c < carrito.length; c++) {
    listado += carrito[c].nombre + " ($" + carrito[c].precio + " x" + carrito[c].cantidad + "), ";
  }
  console.log(listado.slice(0, -2)); // quita la última coma
}

// Uso
console.log(buscarProducto("Mouse"));
console.log("Total:", calcularTotal());
mostrarListado(); 