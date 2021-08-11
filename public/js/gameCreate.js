// capturo el <form>, lo voy a usar bastante
let form = document.querySelector('.product-create-form');

// A continuación, para que si al crear un producto,
// si elijo "¿en oferta?" = "NO", se deshabilita
// el campo de "DESCUENTO"
let offerTrue = document.querySelector('#offer-true');
let offerFalse = document.querySelector('#offer-false');
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

console.log(offerTrue);

// quiero cambiar las clases de la label cuando check o uncheck el checkbox.
let platformLabel = document.querySelectorAll('.label-platforms');
let platformCheckbox = document.querySelectorAll('.input-checkbox-platform');

// no quiero ver el checkbox en las plataformas.
for (let box of platformCheckbox) {
    box.style.display = 'none';
};

// función que check y uncheck el checkbox que esta oculto.
function switchIt(box) {
    if (box.checked) {
        box.checked = false;
    } else {
        box.checked = true;
    };
};

// acá capturo y aplico las clases a las label si está checkeado o no el input checkbox.
for (let label of platformLabel) {
    let box = label.lastElementChild;
    label.addEventListener('click', () => {
        switchIt(box);
        if (box.checked) {
            label.classList.add('label-platform-checked');
        } else {
            label.classList.remove('label-platform-checked');
        };
    });
};

// con esto hago que si la página refresca y las cajas están "CHECKED",
// aparecen pintadas desde la carga.
window.addEventListener('load', () => {
    for (let label of platformLabel) {
        let box = label.lastElementChild;
        if (box.checked) {
            label.classList.add('label-platform-checked');
        } else {
            label.classList.remove('label-platform-checked');
        };
    };
});

// Quiero programar que cuando hover lo del ejemplo anterior,
// me muestre el nombre de lo que es, no solo ver el ícono.
// Lo voy a hacer a parte porque ésto lo quiero llevar a otras
// vistas.
for (i = 0; i < platformLabel.length; i++) {
    let icon = platformLabel[i].firstElementChild;
    let previousClass = icon.className;
    platformLabel[i].addEventListener('mouseover', () => {
        if (icon.classList.contains('fa-windows')) {
            icon.innerText = 'WINDOWS',
            icon.className = '';
            icon.classList.add('label-platforms-icon-text');
        };
        if (icon.classList.contains('fa-apple')) {
            icon.innerText = 'MAC OS',
            icon.className = '';
            icon.classList.add('label-platforms-icon-text');
        };
        if (icon.classList.contains('fa-linux')) {
            icon.innerText = 'LINUX',
            icon.className = '';
            icon.classList.add('label-platforms-icon-text');
        };
        if (icon.classList.contains('fa-vr-cardboard')) {
            icon.innerText = 'VR HEADSET';
            icon.className = '';
            icon.classList.add('label-platforms-icon-text');
        };
    });
    platformLabel[i].addEventListener('mouseout', () => {
        icon.className = previousClass;
        icon.innerText = '';
    });
};
 
// Quiero por lo menos, 1 cajita de "platforms" con valor:
// Esto es una validación, hay que moverlo a /validations
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

// console.log(form.title);
let title = form.title;
console.log(title);

if (title.value.length < 5) {
    title.addEventListener('blur', () => {
        alert('hola');
    })
}