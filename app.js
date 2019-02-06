




let playerChoice = {
    rock: 'rock',
    paper: 'paper',
    scissors: 'scissors'
}
function drawButtons() {
    let template = ''
    for (let input in playerChoice) {
        template += `<button class="${input}-btn" onclick="play('${input}')">${input}</button>`
    }
    document.getElementById('buttons').innerHTML = template
}
drawButtons()




function play(playerChoice) {

    if (playerChoice == 'rock') {
        document.getElementById('result').innerHTML = 'DRAW'
    }
    else if (playerChoice == 'paper') {
        document.getElementById('result').innerHTML = 'WIN'
    }
    else if (playerChoice == 'scissors')
        document.getElementById('result').innerHTML = 'LOSE'

}
play()

