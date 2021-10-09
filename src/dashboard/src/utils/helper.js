export let getCurrentUrl = () => {
    let current = window.location.origin;
    if (current.includes('localhost')) {
        return current = 'http://localhost:3001';
    } else {
        return current = 'https://g6-game-central.herokuapp.com/';
    };
};