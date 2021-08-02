// quiero programar que cuando click en editar, se ocultan mis datos y
// aparece el formulario de edición

let profileSection = document.querySelector('.profile-section-profile');
let profileForm = document.querySelector('.profile-section-form');
let editButton = document.querySelector('.edit-profile-button');
let editButtonText = document.querySelector('.edit-profile-button h3');
let delogButton = document.querySelector('#delog-button');
let deleteButton = document.querySelector('#delete-button');

editButtonText.innerText = 'EDITAR MIS DATOS'

editButton.addEventListener('click', () => {
    if (profileForm.classList.contains('profile-section-hide')) {
        switchClasses();
        switchButtonClasses();
        switchText(editButtonText);
        profileForm.addEventListener('submit', (e) => {
            e.preventDefault();
        });
    } else {
        console.log('acá debería enviar el form');
        switchClasses();
        switchButtonClasses();
        switchText(editButtonText);
        profileForm.submit();
    };
});

function switchClasses () {
    if (profileForm.classList.contains('profile-section-hide')) {
        profileForm.classList.remove('profile-section-hide');
        profileSection.classList.add('profile-section-hide');
    } else {
        profileForm.classList.add('profile-section-hide');
        profileSection.classList.remove('profile-section-hide');
    };
};

function switchButtonClasses () {
    if (!delogButton.classList.contains('user-control-disable') && !deleteButton.classList.contains('user-control-disable')) {
        delogButton.classList.add('user-control-disable');
        deleteButton.classList.add('user-control-disable');
        delogButton.classList.remove('user-control-button');
        deleteButton.classList.remove('user-control-button');
        deleteButton.classList.remove('user-eliminar');
        delogButton.disabled = true;
        deleteButton.disabled = true;
    } else {
        delogButton.classList.remove('user-control-disable');
        deleteButton.classList.remove('user-control-disable');
        delogButton.classList.add('user-control-button');
        deleteButton.classList.add('user-control-button');
        deleteButton.classList.add('user-eliminar');
        delogButton.disabled = false;
        deleteButton.disabled = false;
    };
};

function switchText (thing) {
    if (thing.innerText == 'EDITAR MIS DATOS') {
        thing.innerText = 'GUARDAR CAMBIOS';
    } else if (thing.innerText == 'GUARDAR CAMBIOS') {
        thing.innerText = 'EDITAR MIS DATOS'
    };
};