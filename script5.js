let carrito = [];

carrito.push({ nombre: "Silla Gamer", precio: 300, cantidad: 2});
carrito.push({ nombre: "Monitor 140hz", precio: 250, cantidad: 5});
carrito.push({ nombre: "Grafica Geforce 4080 ti", precio: 800, cantidad: 3});
carrito.push({ nombre: "Auriculares Gamer Logitech g530", precio: 120, cantidad: 8});
carrito.push({ nombre: "Mouse Logitech G Superlight", precio: 50, cantidad: 10});
carrito.splice(1, 1);

for (let a = 0; a < carrito.length; a++) {
  if (carrito[a].nombre === "Silla Gamer") {
    carrito[a].cantidad += 3;
  }
}

for (let b = 0; b < carrito.length; b++){
    if (carrito[b].nombre === "Mouse Logitech G Superlight") {
        carrito[b].cantidad += 3;
    }
}




console.log("Productos", carrito);

