// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los amigos
let amigos = [];

//Función para agregar un amigo a la lista
function agregarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let nombre = inputAmigo.value.trim(); 

    // Validar si el campo de entrada está vacío
    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
    } else if (amigos.includes(nombre)) {
        alert('Ese nombre ya está en la lista.');
    } else {
        // Agregar el nombre al array 'amigos'
        amigos.push(nombre);
        inputAmigo.value = '';  // Limpiar el campo de texto
        actualizarLista();  // Actualizar la lista visual
    }
}