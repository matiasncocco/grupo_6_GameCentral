let mainController = require('../controllers/mainController')

let games = [
    {
        title: 'Hades',
        img: '/img/hades-card.jpg',
        description: 'Desafía al dios de los muertos y protagoniza una salvaje fuga del Inframundo en este juego de exploración de mazmorras de los creadores de Bastion, Transistor y Pyre.',
        price: 139.99,
        // relevant: false,
        // inOffer: true,
        discount: 0.5,
        subtitle: 'COMBATE PARA ESCAPAR DEL INFIERNO',
        body: 'Hades es un juego roguelike de exploración de mazmorras que combina los mejores aspectos de los aclamados títulos anteriores de Supergiant, como la acción rápida de Bastion, la atmósfera y la profundidad de Transistor y la narrativa centrada en los personajes de Pyre.',
        img2: '/img/hadesJuego.jpeg',
        reqMin1: 'LA LA LA',
        reqMin2: 'LA LA LA',
        reqMin3: 'LA LA LA',
        category: 'Roguelike'
    },
    {
        title: 'Cyberpunk',
        img: '/img/cyberpunk-card.jpg',
        description: 'Lalalalalala',
        price: 2000.00,
        // relevant: 'true',
        // inOffer: false,
        discount: 0.5,
        subtitle: 'Keanu Reeves',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut doloribus repellendus eius ut! A modi sunt ipsum fugiat aliquam assumenda corrupti error nam. Atque, voluptatibus. Expedita porro sunt nam voluptatem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut maxime amet ab dolorum incidunt culpa officiis soluta velit quis ad, dignissimos sint provident suscipit quo deserunt totam repellendus? Deleniti, voluptates?',
        img2: '/img/Cyberpunk-dos.jpeg',
        reqMin1: 'LA LA LA',
        reqMin2: 'LA LA LA',
        reqMin3: 'LA LA LA',
        category: 'RPG'
    },
];

module.exports = games;