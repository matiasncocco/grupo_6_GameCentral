// voy a validar los campos del siguiente formulario
let form = document.querySelector('.register-form');

// capturo los campos del formulario
let name = form.name;
let surname = form.surname;
let email = form.email;
let password = form.password;
let passwordCheck = form.passwordCheck;
let avatar = form.avatar;
let newsletter = form.newsletter;
let tyc = form.tyc;

// capturo otras cosas donde voy a mostrar error
let avatarLabel = document.querySelector('#avatar-label');
let newsletterLabel = document.querySelectorAll('.label-radio');
let tycLabel = document.querySelector('.label-tyc');

// creo un array donde voy a guardar los errores
let errors = [];

// capturo los <div> que van a contener mi <span> con el mensaje de error
let errorBoxes = document.querySelectorAll('.error-box');

// hago las validaciones sobre los input:

// <!-- name -->
name.addEventListener('input', validateName, false);
name.addEventListener('blur', validateName, false);
// <!-- surname -->
surname.addEventListener('input', validateSurname, false);
surname.addEventListener('blur', validateSurname, false);
// <!-- email -->
email.addEventListener('input', validateEmail, false);
email.addEventListener('blur', validateEmail, false);
// <!-- password -->
password.addEventListener('input', validatePassword, false);
password.addEventListener('blur', validatePassword, false);
// <!-- passwordCheck -->
passwordCheck.addEventListener('input', validatePasswordCheck, false);
passwordCheck.addEventListener('blur', validatePasswordCheck, false);
// <!-- avatar -->
avatar.addEventListener('input', validateAvatar, false);
avatar.addEventListener('blur', validateAvatar, false);
// <!-- newsletter -->
for (let option of newsletter) {
    option.addEventListener('change', () => {
        validateNewsletter();
    });
};
// <!-- TERMS & CONDITIONS -->
tyc.addEventListener('change', validateTyc, false);

// es la hora de enviar el formulario. hay errores? no envío.
form.addEventListener('submit', (e) => {
    // valido todo antes de enviar
    validateName();
    validateSurname();
    validateEmail();
    validatePassword();
    validatePasswordCheck();
    validateAvatar();
    validateNewsletter();
    validateTyc();
    if (errors.length > 0) {
        // si hay errores
        e.preventDefault();
    } else {
        // no hay errores
        form.submit();
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

// funciones para validar <input>

function validateName() {
    if (!name.value) {
        // not empty
        errors.push({
            field: 'name',
            msg: 'Completa este campo'
        });
    } else if (!regexAlpha.test(name.value)) {
        // solo letras
        errors.push({
            field: 'name',
            msg: 'Ingresa solo letras'
        });
    } else if (name.value.length < 2 || name.value.length > 20) {
        // entre 2 y 20 caracteres
        errors.push({
            field: 'name',
            msg: 'Ingresa entre 2 y 20 caracteres'
        });
    } else {
        errors = errors.filter(
            error => error.field !== 'name'
        );
    };
    errorClass(name);
    printErr();
};

function validateSurname() {
    if (!surname.value) {
        // not empty
        errors.push({
            field: 'surname',
            msg: 'Completa este campo'
        });
    } else if (!regexAlpha.test(surname.value)) {
        // solo letras
        errors.push({
            field: 'surname',
            msg: 'Ingresa solo letras'
        });
    } else if (surname.value.length < 2 || surname.value.length > 20) {
        // entre 2 y 20 caracteres
        errors.push({
            field: 'surname',
            msg: 'Ingresa entre 2 y 20 caracteres'
        });
    } else {
        errors = errors.filter(
            error => error.field !== 'surname'
        );
    };
    errorClass(surname);
    printErr();
};

function validateEmail() {
    if (!email.value) {
        // not empty
        errors.push({
            field: 'email',
            msg: 'Completa este campo'
        });
    } else if (!regexEmail.test(email.value)) {
        // e-mail válido
        errors.push({
            field: 'email',
            msg: 'Ingresa una dirección de e-mail válida'
        });
    } else {
        // configuraciones del feth por POST
        let settings = {
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/json'
            },
            'body': JSON.stringify({
                email: email.value
            })
        };
        // fetch con endpoint y configuración
        fetch('http://localhost:3001/api/users/free-email', settings)
            .then(response => { return response.json() })
            .then(info => {
                info.result === false ? errors.push({
                    field: 'email',
                    msg: info.msg
                }) : errors = errors.filter(
                    error => error.field !== 'email'
                );
            })
            .catch(err => {
                console.log(err);
            });
    };
    errorClass(email);
    printErr();
};

function validatePassword() {
    if (!password.value) {
        // not empty
        errors.push({
            field: 'password',
            msg: 'Completa este campo'
        });
    } else if (password.value.length < 8 || password.value.length > 20) {
        // entre 8 y 20 caracteres
        errors.push({
            field: 'password',
            msg: 'Ingresa entre 8 y 20 caracteres'
        });
    } else if (!regexPasswordLower.test(password.value)) {
        // password potente 1
        errors.push({
            field: 'password',
            msg: 'Debe tener al menos una letra minúscula'
        });
    } else if (!regexPasswordUpper.test(password.value)) {
        // password potente 2
        errors.push({
            field: 'password',
            msg: 'Debe tener al menos una letra mayúscula'
        });
    } else if (!regexPasswordNumber.test(password.value)) {
        // password potente 3
        errors.push({
            field: 'password',
            msg: 'Debe tener al menos un número'
        });
    } else if (!regexPasswordSpecial.test(password.value)) {
        // password potente 4
        errors.push({
            field: 'password',
            msg: 'Debe tener al menos un caracter especial (!@#$%^&*)'
        });
    } else {
        errors = errors.filter(
            error => error.field !== 'password'
        );
    };
    errorClass(password);
    printErr();
};

function validatePasswordCheck() {
    if (!passwordCheck.value) {
        errors.push({
            field: 'passwordCheck',
            msg: 'Completa este campo'
        });
    } else if (passwordCheck.value !== password.value) {
        errors.push({
            field: 'passwordCheck',
            msg: 'Las contraseñas deben coincidir'
        });
    } else {
        errors = errors.filter(
            error => error.field !== 'passwordCheck'
        );
    };
    errorClass(passwordCheck);
    printErr();
};

function validateAvatar() {
    if (!avatar.value) {
        errors.push({
            field: 'avatar',
            msg: 'Subi una imágen de perfil'
        });
        avatarLabel.classList.add('error-input');
    } else if (!regexAvatarExt.test(avatar.value)) {
        errors.push({
            field: 'avatar',
            msg: 'La imágen solo puede ser \'.jpg\', \'.jpeg\', \'.png\' o \'.webp\''
        });
        avatarLabel.classList.add('error-input');
    } else {
        errors = errors.filter(
            error => error.field !== 'avatar'
        );
        avatarLabel.classList.remove('error-input');
    };
    printErr();
};

function validateNewsletter(option) {
    if (newsletter.value === '') {
        errors.push({
            field: 'newsletter',
            msg: 'Selecciona una opción'
        });
        for (let label of newsletterLabel) {
            label.classList.add('error-input');
        };
    } else {
        errors = errors.filter(
            error => error.field !== 'newsletter'
        );
        for (let label of newsletterLabel) {
            label.classList.remove('error-input');
        };
    }
    printErr();
};

function validateTyc() {
    if (tyc.checked === false) {
        errors.push({
            field: 'tyc',
            msg: 'Leé y acepta los términos y condiciones'
        });
        tycLabel.classList.add('tyc-error');
    } else {
        errors = errors.filter(
            error => error.field !== 'tyc'
        );
        tycLabel.classList.remove('tyc-error');
    };
    printErr();
};

// función que aplica clase "con error" al input
function errorClass(field) {
    field.classList.remove('error-input');
    errors.forEach(error => {
        if (error.field === field.id) {
            field.classList.add('error-input');
        };
    });
};

// función que imprime el error dentro del <div> para errores
function printErr() {
    for (let box of errorBoxes) {
        box.innerHTML = '';
        errors.forEach(error => {
            if (error.field === box.id) {
                box.innerHTML = `<span class="error-msg">${ error.msg }</span>`;
            };
        });
    };
};