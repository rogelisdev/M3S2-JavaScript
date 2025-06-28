console.log("Bienvenido al sistema de gestión!");

//Activacion del DOM y reconocimiento de HTML por ID
document.addEventListener("DOMContentLoaded", function () {
  const nombre = document.getElementById("texto");
  const cantidad = document.getElementById("cantidad");
  const boton = document.getElementById("boton");
  const listaProductos = document.getElementById("lista-productos");

//Array vacio
  let productos = [];
  const categoriaDefault = "Tecnologia";
  
//Funcion para mostrar producto
  function mostrarProductos() {
    listaProductos.innerHTML = "";

    if (productos.length === 0) {
      listaProductos.textContent = "No hay productos agregados.";
      console.log("No hay productos agregados.");
      return;
    }

    productos.forEach((producto) => {
      const item = document.createElement("li");
      item.textContent = `${producto.nombre} - Cantidad: ${producto.cantidad} - Categoría: ${producto.categoria}`;
      listaProductos.appendChild(item);
    });

    console.log("Lista de productos:");
    productos.forEach((p) => console.log(p));
  }
//Activar el boton
  boton.addEventListener("click", (event) => {
    event.preventDefault();

    const valortexto = nombre.value.trim();
    const valorcantidad = cantidad.value.trim();

    if (valortexto === "" || valorcantidad === "") {
      alert("Complete los datos solicitados.");
      return;
    }

    if (isNaN(valorcantidad) || Number(valorcantidad) <= 0) {
      alert("Ingrese una cantidad en números válida");
      return;
    }

    const existe = productos.some(
      (p) => p.nombre.toLowerCase() === valortexto.toLowerCase()
    );
    if (existe) {
      alert("El producto ya existe. Si desea, puede actualizar la cantidad.");
      return;
    }
//Para agregar
    productos.push({
      nombre: valortexto,
      cantidad: Number(valorcantidad),
      categoria: categoriaDefault,
    });

    nombre.value = "";
    cantidad.value = "";

    mostrarProductos();
  });

  mostrarProductos();
});
