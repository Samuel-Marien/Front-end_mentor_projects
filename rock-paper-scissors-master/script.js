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

    containerStep1.style.display = "none";
    containerStep2.style.display = "block";
    pickedPaper.style.display = "none";
    pickedScissors.style.display = "block";
    pickedRock.style.display = "none";
})
rock.addEventListener('click', () => {
    const userChoice = 3;
    compareChoice(userChoice);

    containerStep1.style.display = "none";
    containerStep2.style.display = "block";
    pickedPaper.style.display = "none";
    pickedScissors.style.display = "none";
    pickedRock.style.display = "block";
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
                console.log("user take paper, home take rock \nuser win");
                numberHomeChoice = 3;
            } else if (homeChoice() === 2) {
                console.log("user take paper, home take scissor \nuser loose");
                numberHomeChoice = 2;
            } else {
                console.log("user take paper, home take paper...\nequality");
                numberHomeChoice = 1;
            }
            break;
        case 2: //user choose scissor
            if (homeChoice() === 3) {
                console.log("user take scissor, home take rock \n user looze");
                numberHomeChoice = 3;
            } else if (homeChoice() === 2) {
                console.log("user take scissor, home take scissor...\nequality");
                numberHomeChoice = 2;
            } else {
                console.log("user take scissor, home take paper \nuser win");
                numberHomeChoice = 1;
            }
            break;
        case 3: //user choose rock
            if (homeChoice() === 3) {
                console.log("user take rock, home take rock...\equality");
                numberHomeChoice = 3;
            } else if (homeChoice() === 2) {
                console.log("user take rock, home take scissor\nuser win");
                numberHomeChoice = 2;
            } else {
                console.log("user take rock, home take paper\n user loose");
                numberHomeChoice = 1;
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