let searchBox = document.querySelector('.search-bar-box');
let searchBar = document.querySelector('.search-bar');

searchBox.addEventListener('mouseenter', () => {
    searchBar.classList.add('search-button-hover-me');
});

searchBox.addEventListener('mouseout', () => {
    searchBar.classList.remove('search-button-hover-me');
});

searchBox.addEventListener('mouseover', () => {
    searchBar.classList.add('search-button-hover-me');
});

let games = document.querySelectorAll('.unit-product');

let userInput = '';

searchBar.addEventListener('input', (e) => {
    let userInput = searchBar.value.toUpperCase();
    for (let game of games) {
        if (game.id.includes(userInput)) {
            game.classList.remove('hide-while-searching');
        } else {
            game.classList.add('hide-while-searching');
        };
    };
});