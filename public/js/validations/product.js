let form = document.querySelector('.product-create-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
});

let title = form.title;
let categories = form.categories;
let platforms = form.platforms;
let img = form.img;
let relevant = form.relevant;
let offer = form.offer;
let price = form.price;
let discount = form.discount;
let description = form.description;

let platformsLabel = document.querySelectorAll('.label-platforms');
let imgLabel = document.querySelector('#img-label');
let relevantLabel = document.querySelectorAll('.label-relevant');
let offerLabel = document.querySelectorAll('.label-offer');

let errors = [];

let errorBoxes = document.querySelectorAll('.error-box');

// <!-- title -->
title.addEventListener('input', validateTitle, false);
title.addEventListener('blur', validateTitle, false);
// <!-- categories -->
for (let select of categories) {
    select.addEventListener('change', () => {
        validateCategories(select);
    });
};
// <!-- platforms -->
for (let checkbox of platforms) {
    checkbox.addEventListener('change', () => {
        validatePlatforms(checkbox);
    });
};
// <!-- img -->
img.addEventListener('input', validateImg, false);
img.addEventListener('blur', validateImg, false);
// <!-- relevant -->
for (let radio of relevant) {
    radio.addEventListener('change', () => {
        validateRelevant(radio);
    });
};
// <!-- offer -->
for (let radio of offer) {
    radio.addEventListener('change', () => {
        validateOffer(radio);
    });
};
// <!-- price -->
// <!-- discount -->
// <!-- description -->

form.addEventListener('submit', (e) => {
    // <!-- title -->
    validateTitle();
    // <!-- categories -->
    for (let select of categories) {
        validateCategories(select);
    };
    // <!-- platforms -->
    for (let checkbox of platforms) {
        validatePlatforms(checkbox);
    };
    // <!-- img -->
    validateImg();
    // <!-- relevant -->
    for (let radio of relevant) {
        validateRelevant(radio);
    };
    // <!-- offer -->
    for (let radio of offer) {
        validateOffer(radio);
    };
    // <!-- price -->
    // <!-- discount -->
    // <!-- description -->
    if (errors.length > 0) {
        e.preventDefault();
    } else {
        form.submit();
    };
});

let regexImgExt = /\.(gif|jpe?g|png|webp)$/i;

function validateTitle() {
    if (!title.value) {
        errors.push({
            field: 'title',
            msg: 'Completa este campo'
        });
    } else if (title.value.length < 2 || title.value.length > 30) {
        errors.push({
            field: 'title',
            msg: 'Ingresa entre 2 y 30 caracteres'
        });
    } else {
        errors = errors.filter(
            error => error.field !== 'title'
        );
    };
    errorClass(title);
    printErr(errorBoxes);
};

function validateCategories(select) {
    // me falta comprobar que los valores sean únicos (que la categoría no esté repetida)
    let error = [];
    switch (select.id) {
        case '1':
            if (select.value === '0') {
                error.push({
                    id: 1,
                    ok: 'false'
                });
            } else {
                error = false;
            };
            break;
        case '2':
            if (select.value === '0') {
                error = true;
            } else {
                error = false;
            };
            break;
        case '3':
            if (select.value === '0') {
                error = true;
            } else {
                error = false;
            };
            break;
        case '4':
            if (select.value === '0') {
                error = true;
            } else {
                error = false;
            };
            break;
    };
    console.log(error);
    if (error === true) {
        errors.push({
            field: 'categories',
            msg: 'Asigna cuatro categorías'
        });
        select.classList.add('error-input');
    };
    //     (select.id == '1' && select.value === '0') && 
    //     (select.id == '2' && select.value === '0') &&
    //     (select.id == '3' && select.value === '0') &&
    //     (select.id == '4' && select.value === '0')
    //     ) {
    //     errors.push({
    //         field: 'categories',
    //         msg: 'Asigna cuatro categorías'
    //     });
    //     select.classList.add('error-input');
    // } else {
    //     errors = errors.filter(
    //         error => error.field !== 'categories'
    //     );
    //     select.classList.remove('error-input');
    // };
    // console.log(errors);
    printErr(errorBoxes);
};

function validatePlatforms(checkbox) {
    if (isChecked(checkbox) === true) {
        errors = errors.filter(
            error => error.field !== 'platforms'
        );
        for (let label of platformsLabel) {
            label.classList.remove('error-input');
        };
    } else {
        errors.push({
            field: 'platforms',
            msg: 'Elije al menos una plataforma'
        });
        for (let label of platformsLabel) {
            label.classList.add('error-input');
        };
    };
    printErr(errorBoxes);
};

function validateImg() {
    if (!img.value) {
        errors.push({
            field: 'img',
            msg: 'Subi una imágen del producto'
        });
        imgLabel.classList.add('error-input');
    } else if (!regexImgExt.test(img.value)) {
        errors.push({
            field: 'img',
            msg: 'La imágen solo puede ser \'.jpg\', \'.jpeg\', \'.png\' o \'.webp\''
        });
        imgLabel.classList.add('error-input');
    } else {
        errors = errors.filter(
            error => error.field !== 'img'
        );
        imgLabel.classList.remove('error-input');
    }
    printErr(errorBoxes);
};

function validateRelevant(radio) {
    if (isChecked(radio) === undefined) {
        errors.push({
            field: 'relevant',
            msg: 'Selecciona una opción'
        });
        for (let label of relevantLabel) {
            label.classList.add('error-input');
        };
    } else {
        errors = errors.filter(
            error => error.field !== 'relevant'
        );
        for (let label of relevantLabel) {
            label.classList.remove('error-input');
        };
    };
    printErr(errorBoxes);
};

function validateOffer(radio) {
    if (isChecked(radio) === undefined) {
        errors.push({
            field: 'offer',
            msg: 'Selecciona una opción'
        });
        for (let label of offerLabel) {
            label.classList.add('error-input');
        };
    } else {
        errors = errors.filter(
            error => error.field !== 'offer'
        );
        for (let label of offerLabel) {
            label.classList.remove('error-input');
        };
    };
    printErr(errorBoxes);
};

function errorClass(field) {
    field.classList.remove('error-input');
    errors.forEach(error => {
        if (error.field === field.id) {
            field.classList.add('error-input');
            field.focus();
        };
    });
};

function printErr(boxes) {
    for (let box of boxes) {
        box.innerHTML = '';
        errors.forEach(error => {
            if (error.field === box.id) {
                box.innerHTML = `<span class="error-msg">${ error.msg }</span>`;
            };
        });
    };
};

function isChecked(thing) {
    if (Array.isArray(thing)) {
        for (let item of thing) {
            if (item.checked) {
                return true
            };
        };
    } else {
        if (thing.checked) {
            return true;
        };
    };
};