let selectCountry = document.querySelector('.select-country');

let regions = [
    'Africa',
    'América',
    'Asia',
    'Europa',
    'Oceanía'
];

function createOptionGroups(array) {
    let newThings = [];
    for (i = 0; i < array.length; i++) {
        selectCountry.appendChild(
            document.createElement('optgroup')
        );
        selectCountry.children[i].label = array[i];
        newThings.push(selectCountry.children[i])
    };
    // le agrego la clase acá? O después?
    // quiero que tengan una clase y capturarlos para después meterles los países
    return newThings
};

let countryGroups = createOptionGroups(regions);
console.log(countryGroups);

fetch('https://restcountries.eu/rest/v2/all')
    .then(response => {
        return response.json();
    })
    .then(countries => {
        let africaCountries = countries.filter(
            country => country.region == 'Africa'
        );
        // for (let country of africaCountries) {
        //     selectCountry.children.appendChild(
        //         document.createElement('option')
        //     );
            
            
        // };
        let americasCountries = countries.filter(
            country => country.region == 'Americas'
        );
        let asiaCountries = countries.filter(
            country => country.region == 'Asia'
        );
        let europeCountries = countries.filter(
            country => country.region == 'Europe'
        );
        let oceaniaCountries = countries.filter(
            country => country.region == 'Oceania'
        );
    })
    .catch(err => {
        console.log(err);
    });

let countryOption = document.createElement('option');