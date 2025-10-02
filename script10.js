let carrito = [
    {nombre: "Mouse", precio: 100, cantidad:5},
    {nombre: "Pc gamer", precio: 1000, cantidad:1},
    {nombre: "Teclado", precio: 150, cantidad:2},
];

function agregarProducto(lista, nombre, precio, cantidad){
    lista.push({nombre, precio, cantidad});
}

function mostrarProductos(lista){
    console.log("Carrito Actual");
    for (let a = 0; a < lista.length; a++){
        let subtotal = lista[a].precio * lista[a].cantidad;
        console.log(
            lista[a].nombre +
            "- $"+
            lista[a].precio +
            "- x"+
            lista[a].cantidad +
            " = $" +
            subtotal
        );
    }
}

function calcularTotal(lista) {
  let total = 0;
  for (let j = 0; j < lista.length; j++) {
    total += lista[j].precio * lista[j].cantidad;
  }
  return total;
}

function eliminarProducto(lista, producto) {
  for (let k = 0; k < lista.length; k++) {
    if (lista[k].nombre === producto) {
      lista.splice(k, 1);
      return true;
    }
  }
  return false;
}

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