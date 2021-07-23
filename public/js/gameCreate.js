// capturo el <form>, lo voy a usar bastante
let form = document.querySelector('.product-create-form');

// A continuación, para que si al crear un producto,
// si elijo "¿en oferta?" = "NO", se deshabilita
// el campo de "DESCUENTO"
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
    form.addEventListener('submit', () => {
        inputDiscount.value = null;
    });
});

// Acá programé no ver el checkbox de cada plataforma
// y cambiar las clases de la label cuando check o uncheck el checkbox
let platformLabel = document.querySelectorAll('.label-platforms');
let platformCheckbox = document.querySelectorAll('.input-checkbox-platform');

for (let box of platformCheckbox) {
    box.style.display = 'none';
};

function switchIt(box) {
    if (box.checked) {
        box.checked = false;
    } else {
        box.checked = true;
    };
};

for (let label of platformLabel) {
    let box = label.lastElementChild;
    let icon = label.firstElementChild;
    label.addEventListener('click', () => {
        switchIt(box);
        if (box.checked) {
            label.classList.add('label-platform-checked');
            icon.classList.add('label-platform-checked-i');
        } else {
            label.classList.remove('label-platform-checked');
            icon.classList.remove('label-platform-checked-i');
        };
    });
};

// con esto hago que si la página refresca y las cajas están "CHECKED",
// aparecen pintadas desde la carga.
window.addEventListener('load', () => {
    for (let label of platformLabel) {
        let box = label.lastElementChild;
        let icon = label.firstElementChild;
        if (box.checked) {
            label.classList.add('label-platform-checked');
            icon.classList.add('label-platform-checked-i');
        } else {
            label.classList.remove('label-platform-checked');
            icon.classList.remove('label-platform-checked-i');
        };
    };
});

// Quiero programar que cuando hover lo del ejemplo anterior,
// me muestre el nombre de lo que es, no solo ver el ícono.
// Lo voy a hacer a parte porque ésto lo quiero llevar a otras
// vistas.
// LOGRADO: SE BORRA EL ÍCNO.
// SIN LOGRAR: MOSTRAR UN TEXTO
for (let label of platformLabel) {
    let icon = label.firstElementChild;
    let previousClass = icon.className;
    label.addEventListener('mouseenter', () => {
        icon.className = '';
    });
    label.addEventListener('mouseout', () => {
        icon.className = previousClass;
    });
};
 
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
        // POR AHORA VOY A HACER ÉSTO, ACÁ VENDRÍA
        // ENVIAR UNA ALERTA, ADVERTENCIA, SPAN, ECT
        console.log('TENES QUE ELEGIR POR LO MENOS 1 PLATAFORMA');
    } else {
        form.submit();
    };
});

// Quiero programar que cuando el usuario elige, en el <select>,
// una categoría, otro <select> aparece, permitiendo que el
// usuario agrege así otra categoría