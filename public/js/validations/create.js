// Se llama al formulario

let createForm = document.querySelector('.product-create-form');

// Se capturan los imput del createFormulario

let title = createForm.title;
let description = createForm.description
// let image = createForm.img 
// let relevant = createForm.relevant
// let offer = createForm.offer
// let categories = createForm.categories
// let price = createForm.price
// let discount = createForm.discount

// Se crea array vacio para agregar errores a futuro

let errorsFront = [ ];

// Validacion del title

title.addEventListener('blur', () => {
    if(!title.value){
        // Si el campo esta vacio
        title.classList.add('error-input');
        errorsFront = 'Completa este campo'
        console.log (errorsFront)
    }else{
        title.classList.remove('error-input');
    }
});

title.addEventListener('input', () => {
    // limites en los caracteres del titulo
    if(title.value.length < 5 || title.value.length > 20) {
        title.classList.add('error-input');
        errorsFront = 'El titulo debe tener entre 5 y 20 caracteres'
        console.log (errorsFront)
    }else{
        title.classList.remove('error-input');
    }
});

// Validaciones de la descripcion

description.addEventListener('input', () => {
    // limites en los caracteres del titulo
    if(description.value.length < 20) {
        description.classList.add('error-input');
        errorsFront = 'La descripción debe tener más de 20 caracteres'
        console.log (errorsFront)
    }else{
        description.classList.remove('error-input');
    }
});

// Validacion de imagen

// image.addEventListener(' ', () => {
    // let allowedExtensions = ['JPG', 'JPEG', 'PNG', 'GIF'];
// })

// Validaciones de la seleccion de plataformas

// Quiero por lo menos, 1 cajita de "platforms" con valor:
function isChecked(array) {
    for (let thing of array) {
        if (thing.checked) {
            return true;
        };
    };
};

form.addEventListener('submit', (e) => {
    if (isChecked(platformCheckbox) == undefined) {
        e.preventDefault();
        console.log('TENES QUE ELEGIR POR LO MENOS 1 PLATAFORMA');
    } else {
        form.submit();
    };
});