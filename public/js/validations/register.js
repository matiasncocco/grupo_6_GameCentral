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

// creo un array donde voy a guardar los errores
let errors = [];

// capturo los <div> que van a contener mi <span> con el
// mensaje de error
let errorBoxes = document.querySelectorAll('.error-box');

// hago las validaciones sobre los input

// <!-- name -->
name.addEventListener('input', () => {
    if (!name.value) {
        errors.push({
            field: name.id,
            msg: 'Completa este campo'
        });
    } else if (name.value.length < 2 || name.value.length > 20) {
        errors.push({
            field: name.id,
            msg: 'Ingresa entre 2 y 20 caracteres'
        });
    } else if (!regexAlpha.test(name.value)) {
        errors.push({
            field: name.id,
            msg: 'Ingresa solo letras'
        });
    } else {
        errors = errors.filter(
            error => error.field !== name.id
        );
    };
    errorClass(name);
    printErr(errorBoxes);
});

name.addEventListener('blur', () => {
    if (!name.value) {
        errors.push({
            field: name.id,
            msg: 'Completa este campo'
        });
    };
    errorClass(name);
    printErr(errorBoxes);
});

// <!-- surname -->
surname.addEventListener('input', () => {
    if (!surname.value) {
        errors.push({
            field: surname.id,
            msg: 'Completa este campo'
        });
    } else if (surname.value.length < 2 || surname.value.length > 20) {
        errors.push({
            field: surname.id,
            msg: 'Ingresa entre 2 y 20 caracteres'
        });
    } else if (!regexAlpha.test(surname.value)) {
        errors.push({
            field: surname.id,
            msg: 'Ingresa solo letras'
        });
    } else {
        errors = errors.filter(
            error => error.field !== surname.id
        );
    };
    errorClass(surname);
    printErr(errorBoxes);
});

surname.addEventListener('blur', () => {
    if (!surname.value) {
        errors.push({
            field: surname.id,
            msg: 'Completa este campo'
        });
    };
    errorClass(surname);
    printErr(errorBoxes);
});

// <!-- email -->
email.addEventListener('input', () => {
    if (!email.value) {
        errors.push({
            field: email.id,
            msg: 'Completa este campo'
        });
    } else if (!regexEmail.test(email.value)) {
        errors.push({
            field: email.id,
            msg: 'Ingresa una dirección de e-mail válida'
        });
    } else {
        errors = errors.filter(
            error => error.field !== email.id
        );
    };
    errorClass(email);
    printErr(errorBoxes);
});

email.addEventListener('blur', () => {
    if (!email.value) {
        errors.push({
            field: email.id,
            msg: 'Completa este campo'
        });
    } else {
        errors = errors.filter(
            error => error.field !== email.id
        );
    };
    errorClass(email);
    printErr(errorBoxes);
});

// lo último que quiero hacer es preguntar si mi objeto tiene
// alguna propiedad (error). si tiene, aquí es donde agrego
// el mensaje a los span de error. si errores está vacío,
// envío el formulario
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // if (errors.length > 0) {
    //     console.log('hay errores');
    //     e.preventDefault();
    // } else {
    //     console.log('no hay errores');
    //     // form.submit();
    // };
});

let regexAlpha = /^[a-zA-Z]*$/;
let regexEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

// funciones que pude "modularizar":
function errorClass(field) {
    field.classList.remove('error-input');
    errors.forEach(error => {
        if (error.field === field.id) {
            field.classList.add('error-input');
        };
    });
};

// quiero proramar que si tengo coincidencia de
// id del campo a validar y su cajita donde iría
// el error, imprimo un mensaje de error
function printErr(boxes) {
    for (let box of boxes) {
        box.innerHTML = '';
        errors.forEach(error => {
            if (error.field === box.id) {
                box.innerHTML = `<span class="error-msg">${error.msg}</span>`
            };
        });
    };
};