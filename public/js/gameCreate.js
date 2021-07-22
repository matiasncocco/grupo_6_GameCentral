// A continuación, para que si al crear un producto,
// si elijo "¿en oferta?" = "NO", se deshabilita
// el campo de "DESCUENTO"
let offerTrue = document.querySelector('#inOffer-true');
let offerFalse = document.querySelector('#inOffer-false');
let inputDiscount = document.querySelector('.input-discount');
let discountSpan = document.querySelector('#discount-span');
let form = document.querySelector('.product-create-form');

offerTrue.addEventListener('change', () => {
    inputDiscount.disabled = false;
    inputDiscount.required = true;
    inputDiscount.classList.remove('enable-disable-offer');
    discountSpan.classList.remove('enable-disable-offer');
});

offerFalse.addEventListener('change', () => {
    inputDiscount.disabled = true;
    inputDiscount.classList.add('enable-disable-offer')
    discountSpan.classList.add('enable-disable-offer');
    form.addEventListener('submit', () => {
        inputDiscount.value = null;
    });
});

// Quiero programar que cuando el usuario elige, en el <select>,
// una categoría, otro <select> aparece, permitiendo que el
// usuario agrege así otra categoría

// Quiero programar no ver el checkbox de cada plataforma
// y cambiar las clases de la label cuando check o uncheck el checkbox
let platformLabel = document.querySelectorAll('.label-platforms');
let platformCheckbox = document.querySelectorAll('.input-checkbox-platform');

console.log(platformLabel);
console.log(platformCheckbox);

for (i = 0; i < platformCheckbox; i++) {
//     if (this.checked == true) {
//         console.log('click');
//         console.log(this.labels[0]);
// //         this[platformLabel].classList.add('label-platform-checked');
//     };
    platformCheckbox[i].addEventListener('click', () => {
        console.log('click');
    })
};

