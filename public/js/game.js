let newPrice = document.querySelectorAll('.new-price-math');
for (i = 0; i < newPrice.length; i++) {
    let number = newPrice[i].innerHTML;
    let roundedNumber = Math.floor(number);
    newPrice[i].innerHTML = `$${roundedNumber}.00`;
};