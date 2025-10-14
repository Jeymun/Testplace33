let productos = [
  { nombre: "Laptop", precio: 1200 },
  { nombre: "Mouse", precio: 25 },
  { nombre: "Teclado", precio: 45 },
  { nombre: "Auriculares", precio: 80 },
  { nombre: "Monitor", precio: 300 },
  { nombre: "Pc", precio: 500 }
];

let nombres = productos.map(p => p.nombre);
console.log(nombres); 
// ["Laptop", "Mouse", "Teclado", "Auriculares", "Monitor"]


let preciosConDescuento = productos.map(p => ({
  nombre: p.nombre,
  precio: p.precio * 0.9
}));
console.log(preciosConDescuento);



let total = productos.reduce((acum, p) => acum + p.precio, 0);
console.log("Total:", total);

let laptop = productos.find(p => p.nombre === "Laptop");
console.log(laptop);

let productoscincuenta = productos.map(p => ({
    nombre: p.nombre,
    precio: p.precio * 0.50}));

console.log("Productos al 50% menos", productoscincuenta);


let baratos = productos.filter(p => p.precio < 100);
console.log("Precios baratos", baratos);

let ordenados = [...productos].sort((a, b) => a.precio - b.precio);
console.log(ordenados);


let buscado = productos.find(p => p.nombre === "Pc");
console.log("Objeto buscado", buscado);