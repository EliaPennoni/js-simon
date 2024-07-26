console.log('js connected');

const min = 1;
const max = 10;
const randomNumber = [];
const numbersContainer = document.getElementById('number-containers');
const timeToWait = 5; // in secondi

for (let i = 0; i < 5; i++) {
    const num = getRandomNumber(min, max);
    console.log('num', num, typeof num);

    randomNumber.push(num);
    numbersContainer.innerHTML += `
    <span>
      ${num}
    </span>
    `;
}
console.log('randomNumber', randomNumber, typeof randomNumber);

setTimeout(function() {
    numbersContainer.innerHTML = '<h1>Inserisci il testo che hai appena visto</h1>';
}, timeToWait * 1000 - 1000);

setTimeout(function () {
    console.log('timer finito');
    let guessNumber = 0;
    let guessNumberList = [];
    for (let i = 0; i < 5; i++) {
        const userNumber = parseInt(prompt(`Inserisci il ${i + 1}° numero:`));
        
        console.log('userNumber', userNumber, typeof userNumber);
        if (userNumber === randomNumber[i]) {
            guessNumber++;
            guessNumberList.push(userNumber);
        } 
    }
    alert(`Hai indovinato ${guessNumber} numeri. Nello specifico hai indovinato: ${guessNumberList.join(', ')}`);
}, timeToWait * 1000);

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}