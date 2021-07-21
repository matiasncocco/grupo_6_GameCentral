let categories = document.querySelector('.properties-category');
let categoryBox = document.querySelector('.properties-categories');

// categories.addEventListener('change', () => {
    // quiero que cuando cambie un select, me aparezca otro
    // cambie un select = elija una categoría
// });

let offerTrue = document.querySelector('#inOffer-true');
let offerFalse = document.querySelector('#inOffer-false');
let inputDiscount = document.querySelector('.input-discount');
let discountSpan = document.querySelector('#discount-span');



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
})