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