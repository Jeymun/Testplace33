let carrito = [
  { nombre: "Laptop", precio: 1200, cantidad: 1 },
  { nombre: "Mouse", precio: 25, cantidad: 2 },
  { nombre: "Teclado", precio: 45, cantidad: 1 },
  { nombre: "Auriculares", precio: 80, cantidad: 3 }
];

// 1. Calcular total
function calcularTotal(lista) {
  let total = 0;
  for (let a = 0; a < lista.length; a++) {
    total += lista[a].precio * lista[a].cantidad;
  }
  return total;
}

// 2. Buscar producto por nombre
function buscarProducto(lista, buscado) {
  for (let b = 0; b < lista.length; b++) {
    if (lista[b].nombre === buscado) {
      console.log("Encontrado:", lista[b].nombre, "- $" + lista[b].precio);
      return lista[b];
    }
  }
  console.log("Producto no encontrado");
  return null;
}

// 3. Mostrar productos baratos (< 100)
function mostrarBaratos(lista) {
  console.log("Productos baratos (<100):");
  for (let c = 0; c < lista.length; c++) {
    if (lista[c].precio < 100) {
      console.log(lista[c].nombre, "- $" + lista[c].precio);
    }
  }
}

// 4. Ordenar por precio (descendente)
function ordenarPorPrecioDesc(lista) {
  let copia = [...lista]; // no tocar el original
  copia.sort(function (d, e) {
    return e.precio - d.precio; // mayor primero
  });

  console.log("Ordenados de mayor a menor precio:");
  for (let f = 0; f < copia.length; f++) {
    console.log(copia[f].nombre, "- $" + copia[f].precio);
  }
  return copia;
}

// ---- USO ----
console.log("Total:", calcularTotal(carrito));
buscarProducto(carrito, "Mouse");
mostrarBaratos(carrito);
ordenarPorPrecioDesc(carrito);


function actualizarCantidad(lista, producto, nuevaCantidad) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].nombre === producto) {
      lista[i].cantidad = nuevaCantidad;
      return lista[i]; // devuelve el producto actualizado
    }
  }
  return null; // si no se encontró
}



console.log(actualizarCantidad(carrito, "Mouse", 5));
console.log(carrito);
