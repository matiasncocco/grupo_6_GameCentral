// lógica para hacer un fetch por post preguntando si el
// e-mail ya está en uso

// ésta es la información que voy a enviar
// let data = {
    // email: form.email.value
// };

// configuración del envío por post
// let settings = {
//     'method': 'POST',
//     'headers': {
//         'Content-Type': 'application/json'
//     },
//     'body': JSON.stringify(data)
// };

// fetch con endpoint y configuración
// fetch('http://localhost:3001/api/users/email', settings)
//     .then(response => { return response.json() })
//     .then(data => { console.log(data) })
//     .catch(err => { console.log(err) });


// voy a validar los campos del siguiente formulario:
let form = document.querySelector('.register-form');

// capturo los campos del formulario
let name = form.name;
let surname = form.surname;
let email = form.email;

// creo un objeto que se llama errors:
// let errors = {};

// name.addEventListener('input', () => {
//     if (name.value.length < 2 || name.value.length > 20) {
//         name.classList.add('error-input');
//         errors = {
//             name: {
//                 msg: 'Ingresa entre 2 y 20 caracteres'
//             }
//         };
//         errors;
//     } else if (!(/^[a-zA-Z]*$/).test(name.value)) {
//         name.classList.add('error-input');
//         errors = {
//             name: {
//                 msg: 'Ingresa solo letras'
//             }
//         };
//     } else {
//         name.classList.remove('error-input');
//         delete errors.name;
//     };
// });

// name.addEventListener('blur', () => {
//     if (!name.value) {
//         name.classList.add('error-input');
//         errors = {
//             name: {
//                 msg: 'Completa este campo'
//             }
//         };
//     } else if (name.value.length < 2 || name.value.length > 20) {
//         name.classList.add('error-input');
//         errors = {
//             name: {
//                 msg: 'Ingresa entre 2 y 20 caracteres'
//             }
//         };
//     } else if (!(/^[a-zA-Z]*$/).test(name.value)) {
//         name.classList.add('error-input');
//         errors = {
//             name: {
//                 msg: 'Ingresa solo letras'
//             }
//         };
//     } else {
//         name.classList.remove('error-input');
//         delete errors.name;
//     };
// });


// capturar todas las cajitas donde voy a meter los errores
// if ()

// // creo las validaciones que después voy a aplicar a los input
// function checkEmpty(field) {
//     key = field.id;
//     if (!field.value) {
//         // field.classList.add('error-input');
//         errors = {
//             [key]: {
//                 msg: 'Completa este campo'
//             }
//         };
//     } else {
//         // field.classList.remove('error-input');
//         delete errors.field;
//     };
// };

// function checkLength(field) {
//     key = field.id;
//     if (field.value.length < 2 || field.value.length > 20) {
//         // field.classList.add('error-input');
//         errors = {
//             [key]: {
//                 msg: 'Ingresa entre 2 y 20 caracteres'
//             }
//         };
//     } else {
//         // field.classList.remove('error-input');
//         delete errors.field;
//     };
// };

// function checkAlpha(field) {
//     key = field.id;
//     if (!(/^[a-zA-Z]*$/).test(field.value)) {
//         // field.classList.add('error-input');
//         errors = {
//             [key]: {
//                 msg: 'Ingresa solo letras'
//             }
//         };
//     } else {
//         // field.classList.remove('error-input')
//         delete errors.field;
//     };
// };

// // hago las validaciones sobre los input
// for (let field of notEmpty) {
//     field.addEventListener('blur', () => {
//         checkEmpty(field);
//         errorClass(field)
//     });
// };

// for (let field of someLenght) {
//     field.addEventListener('input', () => {
//         checkLength(field);
//         errorClass(field);
//     });
// };

// for (let field of onlyAlpha) {
//     field.addEventListener('input', () => {
//         checkAlpha(field);
//         errorClass(field);
//     });
// };

// window.addEventListener('keypress', () => {
//     console.log(Object.keys(errors).includes('surname'));
// });
    
// pregunto si algún campo tiene errores con su nombre, si
// tiene le aplico la clase "error", si no la saco
// function errorClass(field) {
//     if (Object.keys(errors).includes(field.id)) {
//         field.classList.add('error-input');
//     } else {
//         field.classList.remove('error-input');
//     };
// };

// lo último que quiero hacer es preguntar si mi objeto tiene
// alguna propiedad (error). si tiene, aquí es donde agrego
// el mensaje a los span de error. si errores está vacío,
// envío el formulario
// form.addEventListener('submit', (e) => {
//     name.
//     if (Object.keys(errors).length > 0) {
//         console.log('hay errores');
//         e.preventDefault();
//     } else {
//         // enviar formulario
//         form.submit();
//         console.log('no hay errores');
//     };
// });


// //////////////////////////////////////////////////////////////
// con funciones


// agrupo según validación
let notEmpty = [
    name,
    surname
];

let someLenght = [
    name,
    surname
];

// let otherLenght = [

// ]

let onlyAlpha = [
    name,
    surname
];

// capturo los <div> que van a contener mi <span> con el
// mensaje de error


// creo un objeto que se llama errors:
let key = '';
let errors = {};
errors = [key];

// creo las validaciones que después voy a aplicar a los input
function checkEmpty(field) {
    key = field.id;
    if (!field.value) {
        field.classList.add('error-input');
        errors = {
            [key]: {
                msg: 'Completa este campo'
            }
        };
    } else {
        field.classList.remove('error-input');
        delete errors.field;
    };
};

function checkLength(field) {
    key = field.id;
    if (field.value.length < 2 || field.value.length > 20) {
        field.classList.add('error-input');
        errors = {
            [key]: {
                msg: 'Ingresa entre 2 y 20 caracteres'
            }
        };
    } else {
        field.classList.remove('error-input');
        delete errors.field;
    };
};

function checkAlpha(field) {
    key = field.id;
    if (!(/^[a-zA-Z]*$/).test(field.value)) {
        field.classList.add('error-input');
        errors = {
            [key]: {
                msg: 'Ingresa solo letras'
            }
        };
    } else {
        field.classList.remove('error-input')
        delete errors.field;
    };
};

// hago las validaciones sobre los input
for (let field of notEmpty) {
    field.addEventListener('blur', () => {
        checkEmpty(field);
    });
};

for (let field of someLenght) {
    field.addEventListener('input', () => {
        checkLength(field);
    });
};

for (let field of onlyAlpha) {
    field.addEventListener('input', () => {
        checkAlpha(field);
    });
};

// lo último que quiero hacer es preguntar si mi objeto tiene
// alguna propiedad (error). si tiene, aquí es donde agrego
// el mensaje a los span de error. si errores está vacío,
// envío el formulario
form.addEventListener('submit', (e) => {
    for (let field of notEmpty) {
        checkEmpty(field);
    };
    if (Object.keys(errors).length > 0) {
        e.preventDefault();
    } else {
        form.submit();
    };
});