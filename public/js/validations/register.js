// lógica para hacer un fetch por post preguntando si el
// e-mail ya está en uso

// ésta es la información que voy a enviar
let data = {
    email: 'asdasds'
}

// configuración del envío por post
let settings = {
    'method': 'POST',
    'headers': {
        'Content-Type': 'application/json'
    },
    'body': JSON.stringify(data)
};

// fetch con endpoint y configuración
fetch('http://localhost:3001/api/users/email', settings)
    .then(response => { return response.json() })
    .then(info => { console.log(info) })
    .catch(err => { console.log(err) });


// voy a validar los campos del siguiente formulario:
let form = document.querySelector('.register-form');

// capturo los campos del formulario
let name = form.name;
let surname = form.surname;

// agrupo según validación
let notEmpty = [
    name,
    surname
];

let someLenght = [
    name,
    surname
];

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
        console.log(errors);
        e.preventDefault();
    } else {
        form.submit();
    };
});