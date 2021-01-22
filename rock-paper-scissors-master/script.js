let userChoice = document.querySelectorAll('.container__board div');

function userChoiceTranslated(choice) {
    for (let i = 0; i < choice.length; i++) {
        choice[i].addEventListener('click', () => {})
        return i + 1;
    }
}

function homeChoice() {
    return Math.floor(Math.random() * 3) + 1;
}

function compareChoice(choiceNumber) {
    homeChoice();
    switch (choiceNumber) {
        case 1: //user choose paper
            if (homeChoice() === 3) {
                console.log("user take paper, home take rock");
                console.log("user win");
            } else if (homeChoice() === 2) {
                console.log("user take paper, home take scissor");
                console.log("user looze");
            } else {
                console.log("user take paper, home take paper...");
                console.log("equality");
            }
            break;
        case 2: //user choose scissor
            if (homeChoice() === 3) {
                console.log("user take scissor, home take rock");
                console.log("user looze");
            } else if (homeChoice() === 2) {
                console.log("user take scissor, home take scissor...");
                console.log("equality");
            } else {
                console.log("user take scissor, home take paper");
                console.log("user win");
            }
            break;
        case 3: //user choose rock
            if (homeChoice() === 3) {
                console.log("user take rock, home take rock...");
                console.log("equality");
            } else if (homeChoice() === 2) {
                console.log("user take rock, home take scissor");
                console.log("user win");
            } else {
                console.log("user take rock, home take paper");
                console.log("user looze");
            }
            break;
        default:
            console.log("ERROR");
            break;
    }
}

// userChoiceTranslated(userChoice)
// console.log(userChoiceTranslated(userChoice))
// const test = userChoiceTranslated(userChoice);
// console.log(test);
// compareChoice(test)

userChoice.addEventListener('click', () => {

})