let randomNumber = Math.round(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userField = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const newGameButton = document.querySelector('#newGame');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    newGameButton.addEventListener('click',function(e){
        newGame();
    })
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userField.value);
        validateGuess(guess);
    });
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('please enter a valid number');
    }
    else if(guess < 1){
        alert('number is smaller than 1');
    }
    else if(guess > 100){
        alert('number is greater than 100');
    }
    else{
        prevGuess.push(guess);
        if(numGuess === 10){
            displayGuess(guess);
            displayMessage(`Game over. Random number was ${randomNumber}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage('You guess correct one.');
        endGame();
    }
    else if(guess < randomNumber){
        if(randomNumber - guess >= 10){
            displayMessage('You are very far from correct one');
        }
        else{
            displayMessage('you are very near to correct one');
        }
    }
    else{
        if(guess - randomNumber >= 10){
            displayMessage('You are very far from correct one');
        }
        else{
            displayMessage('you are very near to correct one');
        }
    }
}

function displayGuess(guess){
    userField.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
    userField.value = '';
    userField.setAttribute('disabled','');
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click',function(e){
        randomNumber = Math.round(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${10}`;
        lowOrHi.innerHTML = `<h2></h2>`;
        userField.removeAttribute('disabled');
        playGame = true;
    });
}
