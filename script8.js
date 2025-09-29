function eliminarProducto(lista, producto) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].nombre === producto) {
      lista.splice(i, 1); // elimina 1 elemento en la posición i
      return true; // se eliminó
    }
  }
  return false; // no se encontró
}

let carrito = [
  { nombre: "Laptop", precio: 1200, cantidad: 1 },
  { nombre: "Mouse", precio: 25, cantidad: 2 },
  { nombre: "Teclado", precio: 45, cantidad: 1 }
];

console.log("Antes:", carrito);
eliminarProducto(carrito, "Mouse");
console.log("Después:", carrito);


// 1️⃣ Calcular total
function calcularTotal(lista) {
  let total = 0;
  for (let i = 0; i < lista.length; i++) {
    total += lista[i].precio * lista[i].cantidad;
  }
  return total;
}

// 2️⃣ Buscar producto
function buscarProducto(lista, buscado) {
  for (let j = 0; j < lista.length; j++) {
    if (lista[j].nombre === buscado) {
      return lista[j];
    }
  }
  return null;
}

// 3️⃣ Actualizar cantidad
function actualizarCantidad(lista, producto, nuevaCantidad) {
  for (let k = 0; k < lista.length; k++) {
    if (lista[k].nombre === producto) {
      lista[k].cantidad = nuevaCantidad;
      return true;
    }
  }
  return false;
}

// 4️⃣ Eliminar producto
function eliminarProducto(lista, producto) {
  for (let m = 0; m < lista.length; m++) {
    if (lista[m].nombre === producto) {
      lista.splice(m, 1);
      return true;
    }
  }
  return false;
}

// 5️⃣ Ordenar por precio (menor a mayor)
function ordenarPorPrecio(lista) {
  let copia = [...lista];
  copia.sort(function (a, b) {
    return a.precio - b.precio;
  });
  return copia;
}

// ✅ Probar el sistema
console.log("Carrito inicial:", carrito);

console.log("Total:", calcularTotal(carrito));

console.log("Buscando 'Mouse':", buscarProducto(carrito, "Mouse"));

actualizarCantidad(carrito, "Auriculares", 5);
console.log("Después de actualizar cantidad:", carrito);

eliminarProducto(carrito, "Teclado");
console.log("Después de eliminar 'Teclado':", carrito);

console.log("Ordenados por precio:", ordenarPorPrecio(carrito));
