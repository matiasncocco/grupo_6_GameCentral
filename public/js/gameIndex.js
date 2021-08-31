let searchBox = document.querySelector('.search-bar-box');
let searchBar = document.querySelector('.search-bar');
// let searchButton = document.querySelector('.search-button');

searchBox.addEventListener('mouseenter', () => {
    searchBar.classList.add('search-button-hover-me');
//     // searchButton.classList.add('search-button-hover-me');
});

searchBox.addEventListener('mouseout', () => {
    searchBar.classList.remove('search-button-hover-me');
    // searchButton.classList.remove('search-button-hover-me');
});

searchBox.addEventListener('mouseover', () => {
    searchBar.classList.add('search-button-hover-me');
    searchButton.classList.add('search-button-hover-me');
});

let games = document.querySelectorAll('.unit-product');

let userInput = '';

searchBar.addEventListener('input', () => {
    let userInput = searchBar.value.toUpperCase();
    for (let game of games) {
        game.style.display = 'none'
    }
    for (let game of games) {
        if (game.id.includes(userInput)) {
            game.style.display = 'block';
        } else {
            game.style.display = 'none'
        };
    };
});