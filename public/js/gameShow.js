// Con éste código capturo la descripción que va abajo del header
// y la acorto, para que no quede una pared de texto.
let shortenDescription = document.querySelector('#shorten-description');
let readMore = document.querySelector('.read-more-link');

var shortText = shortenDescription.innerHTML.substring(0,175);
shortenDescription.innerHTML = shortText + '...';

// acá programo para que me haga la cuenta matemática del precio final
let newPrice = document.querySelectorAll('.new-price-math');
for (i = 0; i < newPrice.length; i++) {
    let number = newPrice[i].innerHTML;
    let roundedNumber = Math.floor(number);
    newPrice[i].innerHTML = `$${roundedNumber}.00`;
};

// acá programo para dar el resultado de $$$ ahorrado
let savedMoneyMath = document.querySelector('.saved-money-math');
if (savedMoneyMath) {
    let price = parseInt(savedMoneyMath.children[0].innerHTML);
    let discount = parseInt(savedMoneyMath.children[1].innerHTML);
    function math(n1,n2) {
        multiplier = n1 * n2;
        division = multiplier / 100;
        result = n1 - division;
        saved = n1 - result;
        return Math.floor(saved);
    };
    savedMoneyMath.innerHTML = `AHORRAS $${math(price,discount)}!`;
};