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

// Función para actualizar la lista de amigos en el HTML
function actualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''

    // Recorrer el array de amigos y agregar cada uno como <li> en la lista
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);  // Añadir cada amigo a la lista en HTML
    }
}

// Función para sortear un amigo aleatoriamente
function sortearAmigo() {
    // Verificar si hay amigos en la lista antes de sortear
    if (amigos.length === 0) {
        let resultadoElemento = document.getElementById('resultado');
        resultadoElemento.innerHTML = 'No hay amigos en la lista para sortear.';
    } else {
        // Generar un índice aleatorio dentro del rango de la lista
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos.splice(indiceAleatorio, 1)[0]; // Elimina al sorteado

        // Mostrar el amigo sorteado en la interfaz
        let resultadoElemento = document.getElementById('resultado');
        resultadoElemento.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
        actualizarLista(); // Refresca la lista visual sin el sorteado 
    }
}