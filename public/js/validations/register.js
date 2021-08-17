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

// creo un objeto que se llama errors:
let errors = {};

// capturo los campos del formulario y hago las validaciones

// si alguna de las validaciones que quiero hacer no se cumple,
//  agrego una propiedad a mi objeto con un mensaje
errors = {
    name: {
        msg: 'completame'
    }
}

// también quiero capturar todos los <span> que ya existen en
// mi vista, y si tengo un span que matchea el id del campo con
// una de las propiedades de mi objeto errors, le agrego el mensaje 
// como inner html

// lo último que quiero hacer es preguntar si mi objeto tiene
// alguna propiedad (error). si tiene, aquí es donde agrego
// el mensaje a los span de error. si errores está vacío,
// envío el formulario
form.addEventListener('submit', (e) => {
    if (Object.keys(errors).length > 0) {
        console.log(errors);
        e.preventDefault();
    } else {
        form.submit();
    }
})