let personas = [
  { nombre: "Ana", edad: 17 },
  { nombre: "Luis", edad: 22 },
  { nombre: "Marta", edad: 30 },
  { nombre: "Juan", edad: 15 },
  { nombre: "Pedro", edad: 25 }
];

function resumenEdades(lista) {
  let total = lista.length;
  let mayores = lista.filter(p => p.edad >= 18);
  let menores = lista.filter(p => p.edad < 18);
  let sumaEdades = lista.reduce((acum, p) => acum + p.edad, 0);
  let promedio = sumaEdades / total;

  console.log("👥 Total de personas:", total);
  console.log("🔞 Mayores de edad:", mayores.length);
  console.log("🧒 Menores de edad:", menores.length);
  console.log("📊 Promedio de edad:", promedio.toFixed(1));
}

// 🔹 Nueva función para agregar personas desde el teclado
function agregarPersona(lista) {
  let nombre = prompt("Ingrese el nombre:");
  let edad = parseInt(prompt("Ingrese la edad:"), 10);

  if (!nombre || isNaN(edad)) {
    console.log("❌ Datos inválidos. Intenta de nuevo.");
    return;
  }

  lista.push({ nombre, edad });
  console.log(`✅ Persona agregada: ${nombre} (${edad} años)`);
}

// 🧩 Ejemplo de uso:
agregarPersona(personas); // agrega una nueva persona
resumenEdades(personas); // muestra el resumen actualizado
