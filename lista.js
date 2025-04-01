const listaDeCompras = [];

// Agregar producto si no está duplicado
const agregarProducto = (producto) => {
  if (!listaDeCompras.includes(producto)) {
    listaDeCompras.push(producto);
    console.log(`"${producto}" ha sido agregado a la lista.`);
  } else {
    console.log(`"${producto}" ya está en la lista.`);
  }
};

// Eliminar producto de la lista
const eliminarProducto = (producto) => {
  const indice = listaDeCompras.indexOf(producto);
  if (indice !== -1) {
    listaDeCompras.splice(indice, 1);
    console.log(`"${producto}" ha sido eliminado de la lista.`);
  } else {
    console.log(`"${producto}" no se encuentra en la lista.`);
  }
};

// Mostrar la lista de compras
const mostrarLista = () => {
  if (listaDeCompras.length > 0) {
    console.log("Lista de compras:", listaDeCompras);
  } else {
    console.log("La lista de compras está vacía.");
  }
};

// Ejemplo de uso:
agregarProducto("Manzanas");
agregarProducto("Leche");
agregarProducto("Pan");
agregarProducto("Manzanas"); // Intentando agregar un duplicado
eliminarProducto("Leche");
mostrarLista();
