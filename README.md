<p align="center">
  <img src="./assets/logo.png" alt="Logo de Amigo Secreto" width="400"/>
</p>

## 🎁 Amigo Secreto - Proyecto Web

[![Ver en línea](https://img.shields.io/badge/🟢%20Ver%20la%20aplicación%20en%20GitHub%20Pages-blue?style=for-the-badge)](https://migueld8rk.github.io/juego-amigo-secreto/)

Bienvenido al proyecto **Amigo Secreto**, una aplicación web interactiva para realizar sorteos entre amigos. Con esta herramienta podrás:

- ✅ Agregar amigos a una lista.
- ✅ Visualizar a los participantes.
- ✅ Realizar sorteos aleatorios de forma sencilla.

Desarrollado con **JavaScript**, **HTML** y **CSS**, este proyecto busca facilitar sorteos entre amigos, familiares o compañeros de trabajo.

---

## 🧠 ¿Cómo funciona?

La lógica del proyecto está dividida en tres funciones principales:

- **Agregar amigos:** El usuario introduce un nombre en un campo de texto. Si el nombre no está repetido ni vacío, se agrega al arreglo `amigos[]` y se actualiza visualmente la lista.
- **Actualizar lista:** Cada vez que se añade o elimina un nombre (por sorteo), se actualiza la lista en pantalla para reflejar los cambios.
- **Sortear:** Al hacer clic en el botón de sorteo, se elige aleatoriamente uno de los nombres del arreglo y se muestra en pantalla.

---

## 🖼️ Capturas y Demostración

### 🎬 Demostración general del funcionamiento

En este GIF puedes ver el flujo completo: añadir nombres, visualizar la lista y realizar un sorteo.

<p align="center">
  <img src="./assets/demo-amigo-secreto.gif" alt="Demostración del juego Amigo Secreto" width="700"/>
</p>

---

### ⚠️ Validación de campos vacíos

Si el usuario intenta agregar un nombre sin escribir nada, se activa una alerta para evitar errores de ingreso.

<p align="center">
  <img src="./assets/alert-campo-vacio.png" alt="Alerta por campo vacío" width="600"/>
</p>

---

### 🚫 Validación de nombres duplicados

Si el usuario intenta agregar un nombre que ya ha sido añadido previamente, se mostrará una alerta indicando que ese nombre ya está en la lista.

<p align="center">
  <img src="./assets/alert-nombre-duplicado.png" alt="Alerta por nombre duplicado" width="600"/>
</p>

---

### 🔁 Flujo completo del sorteo

En esta demostración, la lista de amigos ya está cargada con cinco nombres.  
Se realizan cinco sorteos consecutivos: cada vez que se selecciona un amigo, se elimina automáticamente de la lista y esta se actualiza en pantalla.  
Al finalizar, se muestra un mensaje indicando que ya no hay más amigos para sortear.

<p align="center">
  <img src="./assets/Demo-amigo-secreto-sorteo.gif" alt="Demostración del sorteo completo" width="700"/>
</p>

---

## ✍️ Autor

Proyecto desarrollado por Miguel Ángel de la Cruz Lázaro como parte de mi formación en desarrollo web.

---

¡Gracias por visitar este repositorio!
