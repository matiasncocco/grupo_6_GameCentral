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