const rockPick = document.getElementById('rock');
const paperPick = document.getElementById('paper');
const scissorsPick = document.getElementById('scissor');
const playerScoreboard = document.getElementById('player-scoreboard');
const botScoreboard = document.getElementById('bot-scoreboard');
const playerPicked = document.getElementById('player-picked');
const botPicked = document.getElementById('bot-picked');
const result = document.getElementById('result');

let botScore = 0;
let playerScore = 0;

const playGame = (choice) => {

    let botRandom = Math.floor(Math.random() * 3) + 1;
    let botPick;

    switch (botRandom) {
        case 1:
            botPick = 'rock';
            break;
        case 2:
            botPick = 'paper';
            break;
        case 3:
            botPick = 'scissors';
            break;
        default:
            console.log('Error');
    }

    if (choice == 'rock') {

        playerPicked.textContent = `You pick ${'rock'}`

        if (botPick == 'paper') {
            botPicked.textContent = `Bot pick ${botPick}`
            result.textContent = 'Bot wins'
            increaseBotScore();
        } else if (botPick == 'scissors') {
            botPicked.textContent = `Bot pick ${botPick}`
            result.textContent = 'You wins'
            increasePlayerScore();
        } else if (choice === botPick) {
            result.textContent = 'Draw'
        }
    }

    if (choice == 'paper') {

        playerPicked.textContent = `You pick ${'paper'}`

        if (botPick == 'scissors') {
            botPicked.textContent = `Bot pick ${botPick}`
            result.textContent = 'Bot wins'
            increaseBotScore();
        } else if (botPick == 'rock') {
            botPicked.textContent = `Bot pick ${botPick}`
            result.textContent = 'You wins'
            increasePlayerScore();
        } else if (choice === botPick) {
            result.textContent = 'Draw'
        }
    }

    if (choice == 'scissors') {

        playerPicked.textContent = `You pick ${'scissors'}`
        if (botPick == 'rock') {
            botPicked.textContent = `Bot pick ${botPick}`
            result.textContent = 'Bot wins'
            increaseBotScore();
        } else if (botPick == 'paper') {
            botPicked.textContent = `Bot pick ${botPick}`
            result.textContent = 'You wins'
            increasePlayerScore();
        } else if (choice === botPick) {
            result.textContent = 'Draw'
        }
    }
}

const increaseBotScore = () => {
    botScore += 1;
    botScoreboard.textContent = botScore;
}

const increasePlayerScore = () => {
    playerScore += 1;
    playerScoreboard.textContent = playerScore;
}

