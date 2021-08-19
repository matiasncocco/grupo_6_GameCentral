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
form.addEventListener('submit', (e) => {
    e.preventDefault();
})

// capturo los campos del formulario
let name = form.name;
let surname = form.surname;
let email = form.email;
let password = form.password;
let passwordCheck = form.passwordCheck;
let avatar = form.avatar;
let avatarLabel = document.querySelector('#avatar-label')
let newsletter = form.newsletter;

// para una validación, voy a meter todos los input
// en un array
let allInputs = [];
allInputs.push(
    name,
    surname,
    email,
    password,
    passwordCheck,
    avatar,
    // newsletter
);

// creo un array donde voy a guardar los errores
let errors = [];

// capturo los <div> que van a contener mi <span> con el
// mensaje de error
let errorBoxes = document.querySelectorAll('.error-box');

// hago las validaciones sobre los input:

// <!-- name -->
// evento input
name.addEventListener('input', () => {
    if (!name.value) {
        // not empty
        errors.push({
            field: name.id,
            msg: 'Completa este campo'
        });
    } else if (name.value.length < 2 || name.value.length > 20) {
        // entre 2 y 20 caracteres
        errors.push({
            field: name.id,
            msg: 'Ingresa entre 2 y 20 caracteres'
        });
    } else if (!regexAlpha.test(name.value)) {
        // solo letras
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
// evento blur
name.addEventListener('blur', () => {
    if (!name.value) {
        // not empty
        errors.push({
            field: name.id,
            msg: 'Completa este campo'
        });
    };
    errorClass(name);
    printErr(errorBoxes);
});

// <!-- surname -->
// evento input
surname.addEventListener('input', () => {
    if (!surname.value) {
        // not empty
        errors.push({
            field: surname.id,
            msg: 'Completa este campo'
        });
    } else if (surname.value.length < 2 || surname.value.length > 20) {
        // entre 2 y 20 caracteres
        errors.push({
            field: surname.id,
            msg: 'Ingresa entre 2 y 20 caracteres'
        });
    } else if (!regexAlpha.test(surname.value)) {
        // solo letras
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
// evento blur
surname.addEventListener('blur', () => {
    if (!surname.value) {
        // not empty
        errors.push({
            field: surname.id,
            msg: 'Completa este campo'
        });
    };
    errorClass(surname);
    printErr(errorBoxes);
});

// <!-- email -->
// evento input
email.addEventListener('input', () => {
    if (!email.value) {
        // not empty
        errors.push({
            field: email.id,
            msg: 'Completa este campo'
        });
    } else if (!regexEmail.test(email.value)) {
        // e-mail válido
        errors.push({
            field: email.id,
            msg: 'Ingresa una dirección de e-mail válida'
        });
    // } else if() {
        // falta hacer el fetch: que no esté en uso
    } else {
        errors = errors.filter(
            error => error.field !== email.id
        );
    };
    errorClass(email);
    printErr(errorBoxes);
});
// evento blur
email.addEventListener('blur', () => {
    if (!email.value) {
        // not empty
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

// <!-- password -->
// evento input
password.addEventListener('input', () => {
    if (!password.value) {
        // not empty
        errors.push({
            field: password.id,
            msg: 'Completa este campo'
        });
    } else if (password.value.length < 8 || password.value.length > 20) {
        // entre 8 y 20 caracteres
        errors.push({
            field: password.id,
            msg: 'Ingresa entre 8 y 20 caracteres'
        });
    } else if (!regexPasswordLower.test(password.value)) {
        // password potente 1
        errors.push({
            field: password.id,
            msg: 'Debe tener al menos una letra minúscula'
        });
    } else if (!regexPasswordUpper.test(password.value)) {
        // password potente 2
        errors.push({
            field: password.id,
            msg: 'Debe tener al menos una letra mayúscula'
        });
    } else if (!regexPasswordNumber.test(password.value)) {
        // password potente 3
        errors.push({
            field: password.id,
            msg: 'Debe tener al menos un número'
        });
    } else if (!regexPasswordSpecial.test(password.value)) {
        // password potente 4
        errors.push({
            field: password.id,
            msg: 'Debe tener al menos un caracter especial (!@#$%^&*)'
        });
    } else {
        errors = errors.filter(
            error => error.field !== password.id
        );
    };
    errorClass(password);
    printErr(errorBoxes);
});
// evento blur
password.addEventListener('blur', () => {
    if (!password.value) {
        // not empty
        errors.push({
            field: password.id,
            msg: 'Completa este campo'
        });
    } else {
        errors = errors.filter(
            error => error.field !== password.id
        );
    };
    errorClass(password);
    printErr(errorBoxes);
});

// <!-- passwordCheck -->
// evento input
passwordCheck.addEventListener('input', () => {
    if (passwordCheck.value !== password.value) {
        errors.push({
            field: passwordCheck.id,
            msg: 'Las contraseñas deben coincidir'
        });
    } else {
        errors = errors.filter(
            error => error.field !== passwordCheck.id
        );
    };
    errorClass(passwordCheck);
    printErr(errorBoxes);
});
// evento blur
passwordCheck.addEventListener('blur', () => {
    if (passwordCheck.value !== password.value) {
        errors.push({
            field: passwordCheck.id,
            msg: 'Las contraseñas deben coincidir'
        });
    } else {
        errors = errors.filter(
            error => error.field !== passwordCheck.id
        );
    };
    errorClass(passwordCheck);
    printErr(errorBoxes);
});

// <!-- avatar -->
// evento input
avatar.addEventListener('input', () => {
    if (!regexAvatarExt.test(avatar.value)) {
        errors.push({
            field: avatar.id,
            msg: 'La imágen solo puede ser \'.jpg\', \'.jpeg\', \'.png\' o \'.webp\''
        });
    } else {
        errors = errors.filter(
            error => error.field !== avatar.id
        );
    };
    errorClass(avatar);
    printErr(errorBoxes);
});
// evento blur
avatar.addEventListener('blur', () => {
    if (!avatar.value) {
        errors.push({
            field: avatar.id,
            msg: 'Subi una imágen de perfil'
        });
    } else {
        errors = errors.filter(
            error => error.field !== avatar.id
        );
    };
    errorClass(avatar);
    printErr(errorBoxes);
});

// quiero preguntar si mi array de errores tiene algo adentro.
// si tiene errores no envío, si está vacío envío el formulario
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // antes de dejar que se envíe mi formulario, tengo que checkear
    // que el usuario "tocó" los input. si fue directo al botón, no
    // se generó ningún error
    allInputs.map(lastEmptyCheck);
    if (errors.length > 0) {
        // si hay errores
        e.preventDefault();
    } else {
        // no hay errores
        return form.submit();
    };
});

// regular expression para validar campos
let regexAlpha = /^[a-zA-Z]*$/;
let regexEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
let regexPasswordLower = /(?=.*[a-z])/;
let regexPasswordUpper = /(?=.*[A-Z])/;
let regexPasswordNumber = /(?=.*[0-9])/;
let regexPasswordSpecial = /(?=.*[!@#$%^&*])/;
let regexAvatarExt = /\.(gif|jpe?g|png|webp)$/i;

// funciones que pude "modularizar":

// funciones para validar <input> name:


// función que aplica clase "con error" al input
function errorClass(field) {
    field.classList.remove('error-input');
    avatarLabel.classList.remove('error-input');
    errors.forEach(error => {
        if (error.field === field.id && error.field !== 'avatar') {
            field.classList.add('error-input');
        };
        if (error.field === 'avatar') {
            avatarLabel.classList.add('error-input');
        };
    });
};

// función que imprime el error dentro del <div> para
// errores
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

// función que va a checkear que ningún input quede
// vacío a la hora de enviar el formulario
function lastEmptyCheck(oneInput) {
    if (errors.length === 0) {
        if (!oneInput.value) {
            errors.push({
                field: oneInput.id,
                msg: 'Completa este campo'
            });
        } else {
            errors = errors.filter(
                error => error.field !== oneInput.id
            );
        };
        errorClass(oneInput);
        printErr(errorBoxes);
    };
};