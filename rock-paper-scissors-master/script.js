// Variables :
let paper = document.querySelectorAll('.icon')[0];
let scissors = document.querySelectorAll('.icon')[1];
let rock = document.querySelectorAll('.icon')[2];
let containerStep1 = document.querySelector('.container__board__step-1');
let containerStep2 = document.querySelector('.container__board__step-2');
let pickedPaper = document.querySelector('.paper__choice');
let pickedScissors = document.querySelector('.scissors__choice');
let pickedRock = document.querySelector('.rock__choice');
let homePickedPaper = document.querySelector('.paper__home__choice');
let homePickedScissors = document.querySelector('.scissors__home__choice');
let homePickedRock = document.querySelector('.rock__home__choice');
let winResult = document.querySelector('.container__board__step-2__block__result__win');
let looseResult = document.querySelector('.container__board__step-2__block__result__loose');
let equalResult = document.querySelector('.container__board__step-2__block__result__equal');
let button = document.querySelector('button');
let userScore = document.querySelector('.result');
let numberHomeChoice = 0;




// Main :

containerStep2.style.display = "none";

paper.addEventListener('click', () => {
    const userChoice = 1;
    compareChoice(userChoice);
    translatedHomeChoice(numberHomeChoice);

    containerStep1.style.display = "none";
    containerStep2.style.display = "block";

    pickedPaper.style.display = "block";
    pickedScissors.style.display = "none";
    pickedRock.style.display = "none";
})

scissors.addEventListener('click', () => {
    const userChoice = 2;
    compareChoice(userChoice);
    translatedHomeChoice(numberHomeChoice);

    containerStep1.style.display = "none";
    containerStep2.style.display = "block";

    pickedPaper.style.display = "none";
    pickedScissors.style.display = "block";
    pickedRock.style.display = "none";
})

rock.addEventListener('click', () => {
    const userChoice = 3;
    compareChoice(userChoice);
    translatedHomeChoice(numberHomeChoice);

    containerStep1.style.display = "none";
    containerStep2.style.display = "block";

    pickedPaper.style.display = "none";
    pickedScissors.style.display = "none";
    pickedRock.style.display = "block";
})

button.addEventListener('click', () => {
    containerStep1.style.display = "flex";
    containerStep2.style.display = "none";
    // pickedPaper.classList.remove('test');
})

// Functions :

function homeChoice() {
    return Math.floor(Math.random() * 3) + 1;;
}

function compareChoice(choiceNumber) {
    homeChoice();
    switch (choiceNumber) {
        case 1: //user choose paper
            if (homeChoice() === 3) {
                numberHomeChoice = 3;
                winResult.style.display = "block";
                looseResult.style.display = "none";
                equalResult.style.display = "none";
                userScore.innerHTML++
                    // pickedPaper.classList.add('test')
            } else if (homeChoice() === 2) {
                numberHomeChoice = 2;
                winResult.style.display = "none";
                looseResult.style.display = "block";
                equalResult.style.display = "none";
                userScore.innerHTML--
            } else {
                numberHomeChoice = 1;
                winResult.style.display = "none";
                looseResult.style.display = "none";
                equalResult.style.display = "block";
            }
            break;
        case 2: //user choose scissors
            if (homeChoice() === 3) {
                numberHomeChoice = 3;
                winResult.style.display = "none";
                looseResult.style.display = "block";
                equalResult.style.display = "none";
                userScore.innerHTML--

            } else if (homeChoice() === 2) {
                numberHomeChoice = 2;
                winResult.style.display = "none";
                looseResult.style.display = "none";
                equalResult.style.display = "block";
            } else {
                numberHomeChoice = 1;
                winResult.style.display = "block";
                looseResult.style.display = "none";
                equalResult.style.display = "none";
                userScore.innerHTML++
            }
            break;
        case 3: //user choose rock
            if (homeChoice() === 3) {
                numberHomeChoice = 3;
                winResult.style.display = "none";
                looseResult.style.display = "none";
                equalResult.style.display = "block";

            } else if (homeChoice() === 2) {
                numberHomeChoice = 2;
                winResult.style.display = "block";
                looseResult.style.display = "none";
                equalResult.style.display = "none";
                userScore.innerHTML++

            } else {
                numberHomeChoice = 1;
                winResult.style.display = "none";
                looseResult.style.display = "block";
                equalResult.style.display = "none";
                userScore.innerHTML--
            }
            break;
        default:
            console.log("ERROR");
    }
}

function translatedHomeChoice(number) {
    if (number === 1) {
        homePickedPaper.style.display = "block";
        homePickedScissors.style.display = "none";
        homePickedRock.style.display = "none";
    } else if (number === 2) {
        homePickedPaper.style.display = "none";
        homePickedScissors.style.display = "block";
        homePickedRock.style.display = "none";
    } else {
        homePickedPaper.style.display = "none";
        homePickedScissors.style.display = "none";
        homePickedRock.style.display = "block";
    }

}