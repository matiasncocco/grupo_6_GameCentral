// Con éste código capturo la descripción que va abajo del header
// y la acorto, para que no quede una pared de texto.
// También hago que, si la descripción está vacía, no muestre nada
// y 
// QUIERO QUE oculte el "VER MÁS", todavía NO SÉ CÓMO

let shortenDescription = document.querySelector('#shorten-description');
let readMore = document.querySelector('.read-more-link');

var shortText = shortenDescription.innerHTML.substring(0,175);
shortenDescription.innerHTML = shortText + '...';