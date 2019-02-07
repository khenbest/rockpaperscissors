

let userChoice = '' //this is a global variable


let playerChoice = {
    rock: 'rock',
    paper: 'paper',
    scissors: 'scissors'
}
let cpuChoice = {
    rock: 'rock',
    paper: 'paper',
    scissors: 'scissors'
}
function drawButtons() {
    let template = ''
    for (let input in playerChoice) {
        template += `<button class="${input}-btn" onclick="setUserChoice('${input}')">${input}</button>`
    }
    document.getElementById('buttons').innerHTML = template
}
drawButtons()




function play(cpuChoice) {
    userChoice
    if (userChoice == 'rock') {
        if (cpuChoice == 'rock') {
            document.getElementById('result').innerHTML = 'DRAW';
        }
        else if (cpuChoice == 'paper') {
            document.getElementById('result').innerHTML = 'LOSE';
        }
        else if (cpuChoice == 'scissors') {
            document.getElementById('result').innerHTML = 'WIN'
        }
    }
    if (userChoice == 'paper') {
        if (cpuChoice == 'paper') {
            document.getElementById('result').innerHTML = 'DRAW';
        }
        else if (cpuChoice == 'scissors') {
            document.getElementById('result').innerHTML = 'LOSE';
        }
        else if (cpuChoice == 'rock') {
            document.getElementById('result').innerHTML = 'WIN'
        }
    }
    if (userChoice == 'scissors') {
        if (cpuChoice == 'scissors') {
            document.getElementById('result').innerHTML = 'DRAW';
        }
        else if (cpuChoice == 'rock') {
            document.getElementById('result').innerHTML = 'LOSE';
        }
        else if (cpuChoice == 'paper') {
            document.getElementById('result').innerHTML = 'WIN'
        }
    }
}

function setUserChoice(name) {
    userChoice = name
    //set the html of an element on the page equal to BATTLE.. vs already = battle
}

// random() sets the computers choice
function random() {
    let choices = Object.keys(cpuChoice)
    let choiceIndex = Math.floor(Math.random() * choices.length)
    let choice = choices[choiceIndex]
    return choice
}


function battle() {
    let cpuChoice = random();
    play(cpuChoice);

}
