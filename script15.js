let personas = [
  { nombre: "Ana", edad: 17 },
  { nombre: "Luis", edad: 22 },
  { nombre: "Marta", edad: 30 },
  { nombre: "Juan", edad: 15 },
  { nombre: "Pedro", edad: 25 }
];

// ✅ Muestra cada persona con su edad
function mostrarPersonas(lista) {
  lista.forEach(p => {
    console.log(`${p.nombre} tiene ${p.edad} años`);
  });
}

// ✅ Muestra solo los nombres
function mostrarNombres(lista) {
  lista.forEach(p => console.log(p.nombre));
}

// ✅ Devuelve las personas mayores de edad
function mayores(lista) {
  return lista.filter(p => p.edad >= 18);
}

// ✅ Suma todas las edades (reduce)
function sumarEdades(lista) {
  return lista.reduce((acum, p) => acum + p.edad, 0);
}

// ✅ Pruebas
mostrarPersonas(personas);
console.log("Solo nombres:");
mostrarNombres(personas);

console.log("Mayores de edad:", mayores(personas));

console.log("Suma total de edades:", sumarEdades(personas));
