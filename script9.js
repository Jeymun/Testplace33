let carrito = [
  { nombre: "Laptop", precio: 1200, cantidad: 1 },
  { nombre: "Mouse", precio: 25, cantidad: 2 },
  { nombre: "Teclado", precio: 45, cantidad: 1 }
];

// 1️⃣ Agregar producto
function agregarProducto(lista, nombre, precio, cantidad) {
  lista.push({ nombre, precio, cantidad });
}

// 2️⃣ Mostrar productos
function mostrarProductos(lista) {
  console.log("Carrito actual:");
  for (let i = 0; i < lista.length; i++) {
    let subtotal = lista[i].precio * lista[i].cantidad;
    console.log(
      lista[i].nombre +
        " - $" +
        lista[i].precio +
        " x" +
        lista[i].cantidad +
        " = $" +
        subtotal
    );
  }
}

// 3️⃣ Calcular total
function calcularTotal(lista) {
  let total = 0;
  for (let j = 0; j < lista.length; j++) {
    total += lista[j].precio * lista[j].cantidad;
  }
  return total;
}

// 4️⃣ Eliminar producto
function eliminarProducto(lista, producto) {
  for (let k = 0; k < lista.length; k++) {
    if (lista[k].nombre === producto) {
      lista.splice(k, 1);
      return true;
    }
  }
  return false;
}

// 5️⃣ Actualizar cantidad
function actualizarCantidad(lista, producto, nuevaCantidad) {
  for (let m = 0; m < lista.length; m++) {
    if (lista[m].nombre === producto) {
      lista[m].cantidad = nuevaCantidad;
      return true;
    }
  }
  return false;
}

// 6️⃣ Ordenar por precio
function ordenarPorPrecio(lista, descendente = false) {
  let copia = [...lista];
  copia.sort(function (a, b) {
    return descendente ? b.precio - a.precio : a.precio - b.precio;
  });
  return copia;
}

// 7️⃣ Filtrar productos baratos (<100)
function productosBaratos(lista) {
  let baratos = [];
  for (let n = 0; n < lista.length; n++) {
    if (lista[n].precio < 100) {
      baratos.push(lista[n]);
    }
  }
  return baratos;
}

// ✅ PROBAR
mostrarProductos(carrito);

agregarProducto(carrito, "Auriculares", 80, 3);
console.log("Después de agregar:");
mostrarProductos(carrito);

console.log("Total:", calcularTotal(carrito));

eliminarProducto(carrito, "Mouse");
console.log("Después de eliminar 'Mouse':");
mostrarProductos(carrito);

actualizarCantidad(carrito, "Auriculares", 5);
console.log("Después de actualizar cantidad:");
mostrarProductos(carrito);

console.log("Orden ascendente:", ordenarPorPrecio(carrito));
console.log("Orden descendente:", ordenarPorPrecio(carrito, true));

console.log("Productos baratos (<100):", productosBaratos(carrito));
