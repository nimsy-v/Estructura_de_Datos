//1. Añadir y quitar elementos (push, pop, shift, unshift)
const frutas = ["Manzana", "Banana", "Pera"];
frutas.push("Naranja"); // Añadir al final
frutas.pop(); //Quitar el último elemento
frutas.unshift("Fresa"); // Se agrega el primer elemento
frutas.shift(); // Se quita el primer elemento
console.log("Frutas:", frutas);
console.log("------------------");

// 2. Cortar y modificar secciones de un array (slice, splice)
const colores = ["Rojo", "Verde", "Azul", "Amarillo", "Morado"];
// slice
let primerosTres = colores.slice(0, 3); //Muestra los primeros tres elementos
console.log("Primeros Tres:", primerosTres);
let ultimosDos = colores.slice(-2); //Muestra los últimos dos elementos
console.log("Últimos Dos:", ultimosDos);
// splice
colores.splice(1, 1); // Elimina el segundo elemento
console.log("Después de splice:", colores);
colores.splice(1, 1, "Negro", "Blanco"); // Elimina el segundo elemento y agrega dos nuevos
console.log("Se agrega dos colores:", colores);
console.log("------------------");

// 3. Recorrer y transformar arrays (forEach, map)
const numeros = [2, 4, 6, 8, 10];
// forEach
numeros.forEach((numeros) => {
  // Se recorre el array y se imprime cada número
  console.log("Número:", numeros);
});
// map
const numerosMultiplicados = numeros.map((numero) => numero * 2); // Eleva al cuadrado cada número
console.log("Números Cuadrados:", numerosMultiplicados);
console.log("------------------");

// 4. Filtrar y encontrar elementos (filter, find, findIndex)
const usuarios = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Juan", edad: 17 },
  { nombre: "Maria", edad: 30 },
  { nombre: "Pedro", edad: 15 },
];
// filter
const mayoresDeEdad = usuarios.filter((usuario) => usuario.edad >= 18); // Filtra los mayores de edad
console.log("Mayores de Edad:", mayoresDeEdad);
// find
const usuarioEncontrado = usuarios.find((usuario) => usuario.edad === 17); // Encuentra el primer usuario con edad 17
console.log("Usuario Encontrado:", usuarioEncontrado);
// findIndex
const indiceUsuario = usuarios.findIndex(
  (usuario) => usuario.nombre === "Maria"
); // Encuentra el índice del usuario llamado Maria
console.log("Índice de Maria:", indiceUsuario);
console.log("------------------");

// 5. Reducción de arrays (reduce)
const calificaciones = [8, 9, 10, 7, 6, 10];
const sumaTotal = calificaciones.reduce(
  (acumulador, calificacion) => acumulador + calificacion,
  0
); // Suma todas las calificaciones
console.log("Suma Total:", sumaTotal);
const promedio = sumaTotal / calificaciones.length; // Calcula el promedio
console.log("Promedio:", promedio);
console.log("------------------");

// 6. Encadenar métodos (filter + map + reduce)
const numero = [5, 12, 4, 22, 9, 10, 33, 2];
const filtro = numero.filter((num) => num > 5); // Filtra los números mayores a 5
console.log("Números filtrados:", filtro);
const multplicar = filtro.map((numero) => numero * 3); // Multiplica por 3
console.log("Multiplicados por 3:", multplicar);
const suma = multplicar.reduce((acumulador, numero) => acumulador + numero, 0); // Suma todos los números
console.log("Suma Total:", suma);
console.log("------------------");

// 7. Ordenar elementos (sort)
const animales = ["Perro", "Gato", "Elefante", "Abeja", "Delfín"];
animales.sort(); // Ordena alfabéticamente
console.log("Animales ordenados:", animales);
// Ordenar números
const numerosDesordenados = [5, 2, 8, 1, 4, 15, 55];
numerosDesordenados.sort((a, b) => a - b); // Callback para ordenar de menor a mayor
console.log("Números ordenados:", numerosDesordenados);
