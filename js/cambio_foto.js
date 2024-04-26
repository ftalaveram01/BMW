const titulos = ["bmw m3", "bmw m5"];
const imagenes = ["../pictures/bmw_m3.webp", "../pictures/bmw_m5.webp"]; // Rutas de tus imágenes
const textos = ["el bmw m3 es un clásico entre clásicos. lleva siendo uno de los coches más conocidos de la marca desde el inicio de los tiempos (1986). Cada año ha ido mejorando aunque el e30 m3, e36 m3 y e46 m3 son los coches bmw más conocidos por su increible experiencia de conducción.", "el bmw m5 es uno de los coches de la marca más valorados. es un coche mítico, sobre todo teniendo en cuenta su version e60 v10. Este modelo es uno de los mejores bmw del mundo. Este bmw con un motor de 5L y 507cv atmosféricos proporcionan una calidad de experiencia en la conducción que ponen los pelos de punta a cualquiera."]; // Textos asociados a las imágenes
let indiceActual = 0;

const tituloElement = document.getElementById('titModelo');
const imagenElement = document.getElementById('imagen');
const textoElement = document.getElementById('texto');
const botonAdelante = document.getElementById('boton-adelante');
const botonAtras = document.getElementById('boton-atras');

function actualizarImagenYTexto() {
  tituloElement.textContent = titulos[indiceActual];
  imagenElement.src = imagenes[indiceActual];
  textoElement.textContent = textos[indiceActual];
}

botonAdelante.addEventListener('click', function() {
  indiceActual = (indiceActual + 1) % imagenes.length;
  actualizarImagenYTexto();
});

botonAtras.addEventListener('click', function() {
  indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
  actualizarImagenYTexto();
});

actualizarImagenYTexto(); // Actualizar la imagen y el texto inicial