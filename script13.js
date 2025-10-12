let carrito = {
  productos: [
    { nombre: "Laptop", precio: 1200, cantidad: 1 },
    { nombre: "Mouse", precio: 25, cantidad: 2 },
    { nombre: "Teclado", precio: 45, cantidad: 1 },
    { nombre: "Auriculares", precio: 80, cantidad: 3 }
  ],

  // 🧩 Agregar un producto
  agregarProducto: function(nombre, precio, cantidad) {
    this.productos.push({ nombre, precio, cantidad });
    console.log(`✅ Producto agregado: ${nombre} (x${cantidad}) - $${precio}`);
  },

  // 🧾 Mostrar ticket
  mostrarTicket: function() {
    console.log("------ TICKET DE COMPRA ------");
    let total = 0;

    for (let a = 0; a < this.productos.length; a++) {
      let prod = this.productos[a];
      let subtotal = prod.precio * prod.cantidad;
      total += subtotal;
      console.log(`${prod.nombre} (x${prod.cantidad}) - $${subtotal}`);
    }

    console.log("------------------------------");
    console.log("TOTAL: $" + total);
  },

  // 🗑️ Eliminar un producto SIN usar .splice()
  eliminarProducto: function(nombre) {
    let nuevaLista = [];
    let eliminado = null;

    for (let b = 0; b < this.productos.length; b++) {
      let prod = this.productos[b];

      if (prod.nombre === nombre) {
        eliminado = prod;
      } else {
        nuevaLista.push(prod);
      }
    }

    if (eliminado) {
      this.productos = nuevaLista;
      console.log(`🗑️ Producto eliminado: ${eliminado.nombre}`);
    } else {
      console.log(`⚠️ Producto "${nombre}" no encontrado.`);
    }
  }
};

// 🔧 Pruebas:
carrito.agregarProducto("Monitor", 300, 1);
carrito.agregarProducto("Mousepad Paperrex", 100, 3);
carrito.eliminarProducto("Mouse");
carrito.eliminarProducto("Zapatillas"); // prueba de producto que no existe
carrito.mostrarTicket();
