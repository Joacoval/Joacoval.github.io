 // Función para mover el botón a una posición aleatoria
 function moverBoton() {
    const boton = document.querySelector('.botonesno'); // Seleccionamos el botón con la clase 'botones'

    // Generamos valores aleatorios para la posición
    const posX = Math.random() * (window.innerWidth - boton.offsetWidth); // Coordenada X
    const posY = Math.random() * (window.innerHeight - boton.offsetHeight); // Coordenada Y

    // Asignamos las nuevas coordenadas al botón
    boton.style.position = 'absolute';
    boton.style.left = posX + 'px';
    boton.style.top = posY + 'px';
}

// Añadimos un evento de clic al botón
document.querySelector('.botonesno').addEventListener('click', moverBoton);