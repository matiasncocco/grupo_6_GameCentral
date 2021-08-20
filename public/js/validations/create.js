// Se llama al formulario

let createForm = document.querySelector('.product-create-form');

// Se capturan los imput del createFormulario

let title = createForm.title;
let description = createForm.description;
let image = createForm.img;
// let relevant = createForm.relevant
// let offer = createForm.offer
// let categories = createForm.categories

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
        errorsFront = ' '
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
        errorsFront = ' '
    }
});

// Validaciones de la descripcion

description.addEventListener('blur', () => {
    if(!description.value){
        // Si el campo esta vacio
        description.classList.add('error-input');
        errorsFront = 'Completa este campo'
        console.log (errorsFront)
    }else{
        description.classList.remove('error-input');
        errorsFront = ' '
    }
});

description.addEventListener('input', () => {
    // limites en los caracteres del titulo
    if(description.value.length < 20) {
        description.classList.add('error-input');
        errorsFront = 'La descripción debe tener más de 20 caracteres'
        console.log (errorsFront)
    }else{
        description.classList.remove('error-input');
        errorsFront = ' '
    }
});

// Validacion de imagen

// extensiones permitidas
let regexAvatarExt = /\.(gif|jpe?g|png|webp)$/i;

image.addEventListener('input', () => {
    if(regexAvatarExt.test(image.value) === false){
        // si la imagen no tiene extension permitida
        image.classList.add('error-input');
        errorsFront = 'La imagen debe ser en formato JPG, JPEG, PNG o GIF'
        console.log (errorsFront)
    }else if(regexAvatarExt.test(image.value) === true){
        image.classList.remove('error-input');
        errorsFront = ' '
    }
});

image.addEventListener('blur', () => {
    if(!image.value){
        // Si el campo esta vacio
        image.classList.add('error-input');
        errorsFront = 'Debes subir una imágen'
        console.log (errorsFront)
    }else{
        image.classList.remove('error-input');
        errorsFront = ' '
    }
});

// // Validaciones de la seleccion de plataformas

// // quiero cambiar las clases de la label cuando check o uncheck el checkbox.
// let platformCheckbox = document.querySelectorAll('.input-checkbox-platform');

// // Quiero por lo menos, 1 cajita de "platforms" con valor:
// function isChecked(array) {
//     for (let thing of array) {
//         if (thing.checked) {
//             return true;
//         };
//     };
// };

// createForm.addEventListener('submit', (e) => {
//     if (isChecked(platformCheckbox) == undefined) {
//         e.preventDefault();
//         console.log('TENES QUE ELEGIR POR LO MENOS 1 PLATAFORMA');
//     } else {
//         createForm.submit();
//     };
// });

createForm.addEventListener('submit', (e) => {
    if(errorsFront !== ' '){
        e.preventDefault();
    }else{
        createForm.submit();
    }
});