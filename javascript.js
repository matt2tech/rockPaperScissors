function rockPaperScissors(hand) {
    playerHealth = document.getElementById('playerHealth').innerHTML.length;
    comHealth = document.getElementById('comHealth').innerHTML.length;
    playerHand(hand);
    com = computerHand();
    if ((hand === 'rock' && com === 'scissors') || (hand === 'paper' && com === 'rock') || (hand === 'scissors' && com === 'paper')) {
        document.getElementById('winnerCircle').innerHTML = 'Player Wins!';
        document.getElementById('comHealth').innerHTML = '='.repeat(comHealth - 1), comHealth -= 1;
    } else if (hand === com) {
        document.getElementById('winnerCircle').innerHTML = 'Tie!';
        document.getElementById('comHealth').innerHTML = '='.repeat(comHealth - 1), comHealth -= 1;
        document.getElementById('playerHealth').innerHTML = '='.repeat(playerHealth - 1), playerHealth -= 1;
    } else {
        document.getElementById('winnerCircle').innerHTML = 'Computer Wins!';
        document.getElementById('playerHealth').innerHTML = '='.repeat(playerHealth - 1), playerHealth -= 1;
    };
    winOrLose(playerHealth, comHealth);
}

function computerHand() {
    handSigns = ['rock', 'paper', 'scissors'];
    hand = handSigns[Math.floor(Math.random() * 3)];
    if (hand === 'rock') {
        document.getElementById('comHand').src = 'images/rock.jpeg';
        document.getElementById('comHand').style.transform = 'none';
    } else if (hand === 'paper') {
        document.getElementById('comHand').src = 'images/paper.jpeg';
        document.getElementById('comHand').style.transform = 'none';
    } else {
        document.getElementById('comHand').src = 'images/scissors.jpeg';
        document.getElementById('comHand').style.transform = 'none';
    };
    return hand;
}

function playerHand(hand) {
    if (hand === 'rock') {
        document.getElementById('playerHand').src = 'images/rock.jpeg';
        document.getElementById('playerHand').style.transform = 'scaleX(-1)';
    } else if (hand === 'paper') {
        document.getElementById('playerHand').src = 'images/paper.jpeg';
        document.getElementById('playerHand').style.transform = 'scaleX(-1)';
    } else {
        document.getElementById('playerHand').src = 'images/scissors.jpeg';
        document.getElementById('playerHand').style.transform = 'scaleX(-1)';
    };
}

function winOrLose(playerHealth, comHealth) {
    buttons = document.querySelectorAll('button');
    if (comHealth < 1 && playerHealth < 1) {
        document.getElementById('winnerCircle').innerHTML = "It's a draw";
        buttons.forEach(function(button) {
            button.disabled = true;
        });
    } else if (comHealth < 1) {
        document.getElementById('winnerCircle').innerHTML = 'Player has won the war';
        buttons.forEach(function(button) {
            button.disabled = true;
        });
    } else if (playerHealth < 1) {
        document.getElementById('winnerCircle').innerHTML = 'Computer has won the war';
        buttons.forEach(function(button) {
            button.disabled = true;
        });
    };
}
