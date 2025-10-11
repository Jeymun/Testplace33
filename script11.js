let carrito = {
  productos: [
    { nombre: "Laptop", precio: 1200, cantidad: 1 },
    { nombre: "Mouse", precio: 25, cantidad: 2 },
    { nombre: "Teclado", precio: 45, cantidad: 1 },
    { nombre: "Auriculares", precio: 80, cantidad: 3 }
  ],

  calcularTotal: function() {
    let total = 0;
    for (let a = 0; a < this.productos.length; a++) {
      total += this.productos[a].precio * this.productos[a].cantidad;
    }
    return total;
  },

  buscarProducto: function(nombre) {
    for (let b = 0; b < this.productos.length; b++) {
      if (this.productos[b].nombre === nombre) {
        return this.productos[b];
      }
    }
    return null;
  },

  mostrarBaratos: function() {
    console.log("Productos baratos (< 100):");
    for (let c = 0; c < this.productos.length; c++) {
      if (this.productos[c].precio < 100) {
        console.log(this.productos[c].nombre, "-", "$" + this.productos[c].precio);
      }
    }
  },

  ordenarPorPrecio: function(descendente = false) {
    let copia = [...this.productos];
    copia.sort(function(a, b) {
      return descendente ? b.precio - a.precio : a.precio - b.precio;
    });
    return copia;
  }
};

// Probar
console.log("Total:", carrito.calcularTotal());
console.log("Buscar Mouse:", carrito.buscarProducto("Mouse"));
carrito.mostrarBaratos();
console.log("Asc:", carrito.ordenarPorPrecio(false));
console.log("Desc:", carrito.ordenarPorPrecio(true));


agregarProducto: function(nuevo) {
  // Buscar si ya existe el producto
  for (let z = 0; z < this.productos.length; z++) {
    if (this.productos[z].nombre === nuevo.nombre) {
      // Si existe, solo sumamos la cantidad
      this.productos[z].cantidad += nuevo.cantidad;
      console.log("Cantidad actualizada de:", nuevo.nombre);
      return; // salimos de la función
    }
  }

  // Si no existe, lo agregamos al array
  this.productos.push(nuevo);
  console.log("Producto agregado:", nuevo.nombre);
}
