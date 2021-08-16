let path = require('path');
let { check } = require('express-validator');

let productValidations = {
    creationValidations: [
        check('title')
            .notEmpty().withMessage('Completa este campo').bail()
            .isLength({ min: 2, max: 30 }).withMessage('Ingresa entre 2 y 30 caracteres').bail(),
        check('categories')
            .custom((value, { req }) => {
                let categories = req.body.categories;
                if (Array.isArray(categories) && categories.length === 4) {
                    let hasDuplicates = (array) => {
                        return (new Set(array)).size !== array.length;
                    };
                    if (hasDuplicates(categories)) {
                        throw new Error('No repitas las categorías');
                    } else {
                        return true;
                    };
                } else {
                    throw new Error('Asigna cuatro categorías');
                };
            }).bail(),
        check('platforms')
            .notEmpty().withMessage('Elije al menos una plataforma').bail(),
        check('img')
            .custom((value, { req }) => {
                let file = req.file;
                let okExtensions = [
                    '.jpg',
                    '.jpeg',
                    '.png',
                    '.webp'
                ];
                if (!file) {
                    throw new Error('Subi una imágen del producto');
                } else {
                    if (!okExtensions.includes(path.extname(file.originalname))) {
                        throw new Error(
                            'La imágen solo puede ser \'.jpg\', \'.jpeg\', \'.png\' o \'.webp\''
                        );
                    } else {
                        return true;
                    };
                };
            }).bail(),
        check('relevant')
            .notEmpty().withMessage('Selecciona una opción').bail(),
        check('offer')
            .notEmpty().withMessage('Selecciona una opción').bail(),
        check('price')
            .notEmpty().withMessage('Completa este campo').bail()
            .isInt({ min: 1, max: 9999 }).withMessage('Ingresa un número entre 1 y 9999').bail(),
        check('discount')
            .custom((value, { req }) => {
                let offer = req.body.offer;
                if (offer === 'true' && value === '') {
                    throw new Error('Asigna un porcentaje de descuento');
                } else if (offer === 'true' && value < 1 || value > 99) {
                    throw new Error('Igresa un número entre 1 y 99');
                } else if (offer === 'false' && value != '') {
                    throw new Error('Este campo debe estar vacío');
                } else {
                    return true;
                };
            }).bail(),
        check('description')
            .notEmpty().withMessage('Completa este campo').bail()
            .isLength({ min: 20, max: 3000 }).withMessage('Ingresa entre 20 y 3000 caracteres').bail(),
    ],

    // editValiadtions: [

    // ]
};

module.exports = productValidations