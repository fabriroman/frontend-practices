const startButton = document.querySelector('.start-button');
const number = document.querySelector('.number');

function updateNumber() {
    const actualNumber = number.textContent;
    const newNumber = parseInt(actualNumber) + 1;
    number.textContent = newNumber.toString();
}
