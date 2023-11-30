var formulario = document.querySelector("#form");

formulario.onsubmit = function(e) {
  e.preventDefault(); //Debería ser e.preventDefault()en lugar de e.prevent()para prevenir el comportamiento por defecto del formulario.

  var nombreInput = formulario.elements[0]; //Se cambiaron los nombres de las variables para evitar confucion.
  var edadInput = formulario.elements[1]; // Se agregaron los puntos y comas en varias lineas de codigo.
  var nacionalidadSelect = formulario.elements[2];

  var nombre = nombreInput.value;
  var edad = edadInput.value;
  var i = nacionalidadSelect.selectedIndex;
  var nacionalidad = obtenerNombreNacionalidad(nacionalidadSelect.options[i].value);

  console.log(nombre, edad);
  console.log(nacionalidad);

  if (nombre.length === 0) {
    nombreInput.classList.add("error");
  }
  if (edad < 18 || edad > 120) {
    edadInput.classList.add("error");
  }

  if (nombre.length > 0 && (edad > 18 && edad < 120)) {
    agregarInvitado(nombre, edad, nacionalidad);
  }
};

function obtenerNombreNacionalidad(codigo) { // Se utilizo un objeto para mapear códigos de nacionalidad a nombres de países, 
  var nacionalidades = {
    "ar": "Argentina",
    "mx": "Mexicana",
    "vnzl": "Venezolana",
    "per": "Peruana"
  };
  return nacionalidades[codigo] || codigo;
}

function agregarInvitado(nombre, edad, nacionalidad) {
  var lista = document.getElementById("lista-de-invitados");
  var elementoLista = document.createElement("div");
  elementoLista.classList.add("elemento-lista"); // Error en la clase, tenia added, se cambio a add.
  lista.appendChild(elementoLista);

  function crearElemento(descripcion, valor) {
    var spanNombre = document.createElement("span");
    var inputNombre = document.createElement("input");
    var espacio = document.createElement("br");
    spanNombre.textContent = descripcion + ": ";
    inputNombre.value = valor;
    elementoLista.appendChild(spanNombre);
    elementoLista.appendChild(inputNombre);
    elementoLista.appendChild(espacio);
  }

  crearElemento("Nombre", nombre);
  crearElemento("Edad", edad);
  crearElemento("Nacionalidad", nacionalidad);

  var botonBorrar = document.createElement("button"); //Habia dos variables con el mismo nombre botonBorrar,se puso otro nombre distinto para evitar confusiones.
  botonBorrar.textContent = "Eliminar invitado";
  botonBorrar.id = "boton-borrar";
  var corteLinea = document.createElement("br");
  elementoLista.appendChild(corteLinea);
  elementoLista.appendChild(botonBorrar);

  botonBorrar.onclick = function() {
    elementoLista.remove(); //se coloco elementoLista.remove()en lugar de botonBorrar.parentNode.remove().
  };
}
