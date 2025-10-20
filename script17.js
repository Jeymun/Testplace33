// 🧩 Cargar personas guardadas o empezar con un array vacío
let personas = JSON.parse(localStorage.getItem("personas")) || [];

// 🧮 Función para mostrar resumen
function resumenEdades(lista) {
  if (lista.length === 0) {
    console.log("⚠️ No hay personas registradas todavía.");
    return;
  }

  let total = lista.length;
  let mayores = lista.filter(p => p.edad >= 18);
  let menores = lista.filter(p => p.edad < 18);
  let sumaEdades = lista.reduce((acum, p) => acum + p.edad, 0);
  let promedio = sumaEdades / total;

  console.log("------ RESUMEN ------");
  console.log("👥 Total de personas:", total);
  console.log("🔞 Mayores de edad:", mayores.length);
  console.log("🧒 Menores de edad:", menores.length);
  console.log("📊 Promedio de edad:", promedio.toFixed(1));
  console.log("---------------------");
}

// ➕ Función para agregar persona
function agregarPersona(lista) {
  let nombre = prompt("Ingrese el nombre:");
  if (nombre === null) { console.log("Cancelado"); return; }
  nombre = nombre.trim();
  if (nombre === "") { console.log("❌ Nombre vacío."); return; }

  let edadStr = prompt("Ingrese la edad:");
  if (edadStr === null) { console.log("Cancelado"); return; }
  let edad = parseInt(edadStr.trim(), 10);
  if (isNaN(edad) || edad < 0) { console.log("❌ Edad inválida."); return; }

  lista.push({ nombre, edad });
  localStorage.setItem("personas", JSON.stringify(lista)); // 💾 Guardar en localStorage
  console.log(`✅ Persona agregada: ${nombre} (${edad} años)`);
}

// 🧹 Función opcional para borrar todos los datos guardados
function borrarTodo() {
  localStorage.removeItem("personas");
  personas = [];
  console.log("🗑️ Datos borrados correctamente.");
}
