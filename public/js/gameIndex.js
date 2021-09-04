let searchBox = document.querySelector('.search-bar-box');
let searchBar = document.querySelector('.search-bar');
let searchButton = document.querySelector('.search-button');

searchBox.addEventListener('mouseenter', () => {
    searchBar.classList.add('search-button-hover-me');
    searchButton.classList.add('search-button-hover-me');
});

searchBox.addEventListener('mouseout', () => {
    searchBar.classList.remove('search-button-hover-me');
    searchButton.classList.remove('search-button-hover-me');
});

searchBox.addEventListener('mouseover', () => {
    searchBar.classList.add('search-button-hover-me');
    searchButton.classList.add('search-button-hover-me');
});

// codigo para buscador en vivo (filtro)

// let games = document.querySelectorAll('.unit-product');
// let userInput = '';

// searchBar.addEventListener('input', () => {
//     let userInput = searchBar.value.toUpperCase();
//     for (let game of games) {
//         game.style.display = 'none'
//     }
//     for (let game of games) {
//         if (game.id.includes(userInput)) {
//             game.style.display = 'block';
//         } else {
//             game.style.display = 'none'
//         };
//     };
// });

// acá voy a programar para poner límites visuales al páginado.
// desde el back ya estoy prohibiendo ir al 0 y mando un error
// si el cliente fuerza un paginado mayor a mi cantidad de productos.
// acá voy a armar prevent defaults etc limitando esas opciones.