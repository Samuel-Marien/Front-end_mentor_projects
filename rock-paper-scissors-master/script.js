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
    }
}

let paper = document.querySelectorAll('.icon')[0];
let scissors = document.querySelectorAll('.icon')[1];
let rock = document.querySelectorAll('.icon')[2];

paper.addEventListener('click', () => {
    const userChoice = 1;
    compareChoice(userChoice)
})
scissors.addEventListener('click', () => {
    const userChoice = 2;
    compareChoice(userChoice)
})
rock.addEventListener('click', () => {
    const userChoice = 3;
    compareChoice(userChoice)
})