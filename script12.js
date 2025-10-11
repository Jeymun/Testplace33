let carrito = {
  productos: [
    { nombre: "Laptop", precio: 1200, cantidad: 1 },
    { nombre: "Mouse", precio: 25, cantidad: 2 },
    { nombre: "Teclado", precio: 45, cantidad: 1 },
    { nombre: "Auriculares", precio: 80, cantidad: 3 }
  ],

  // 🔹 Agregar producto (sin duplicar)
  agregarProducto: function(nuevo) {
    for (let a = 0; a < this.productos.length; a++) {
      if (this.productos[a].nombre === nuevo.nombre) {
        this.productos[a].cantidad += nuevo.cantidad;
        console.log("Cantidad actualizada de:", nuevo.nombre);
        return; // salir, ya lo actualizamos
      }
    }
    this.productos.push(nuevo);
    console.log("Producto agregado:", nuevo.nombre);
  },

  // 🔹 Mostrar ticket de compra
  mostrarTicket: function() {
    console.log("------ TICKET DE COMPRA ------");

    let total = 0;
    for (let b = 0; b < this.productos.length; b++) {
      let prod = this.productos[b];
      let subtotal = prod.precio * prod.cantidad;
      total += subtotal;
      console.log(`${prod.nombre} (x${prod.cantidad}) - $${subtotal}`);
    }

    console.log("------------------------------");
    console.log("TOTAL: $" + total);
  },

  // 🔹 Vaciar carrito
  vaciarCarrito: function() {
    this.productos = [];
    console.log("El carrito fue vaciado 🛒");
  }
};

// 🧪 PRUEBAS
carrito.mostrarTicket();

console.log("\n--- Agregando productos ---");
carrito.agregarProducto({ nombre: "Mouse", precio: 25, cantidad: 1 });
carrito.agregarProducto({ nombre: "Monitor", precio: 300, cantidad: 1 });

console.log("\n--- Ticket actualizado ---");
carrito.mostrarTicket();

console.log("\n--- Vaciando carrito ---");
carrito.vaciarCarrito();
carrito.mostrarTicket();
