let { check } = require('express-validator');

let registerValidations = [
    check('name')
        .notEmpty().withMessage('Completa este campo').bail()
        .isLength( { min: 2, max: 20 } ).withMessage('Debe ser entre 2 y 20 caracteres').bail()
        .isAlpha([ 'es-ES' ]).withMessage('Debe ser solo letras').bail(),
    check('surname')
        .notEmpty().withMessage('Completa este campo').bail()
        .isLength( { min: 2, max: 20 } ).withMessage('Debe ser entre 2 y 20 caracteres').bail()
        .isAlpha([ 'es-ES' ]).withMessage('Debe ser solo letras').bail(),
    check('email')
        .notEmpty().withMessage('Completa este campo').bail()
        .isEmail().withMessage('Debe ser una dirección de e-mail válida').bail(),
    check('password')
        .notEmpty().withMessage('Completa este campo').bail()
        .isLength( { min: 4, max: 12 } ).withMessage('Debe ser entre 4 y 12 caracteres').bail(),
    check('passwordCheck')
        .notEmpty().withMessage('Completa este campo').bail()
        .custom((match, { req } ) => {
            let password = req.body.password;
            if (password != match) {
                throw new Error('Las contraseñas no coinciden');
            };
        }).bail(),
    check('avatar')
        .notEmpty().withMessage('Completa este campo').bail(),
];

module.exports = registerValidations;