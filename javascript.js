function rockPaperScissors(hand) {
    playerHand(hand);
    com = computerHand();
    if ((hand === 'rock' && com === 'scissors') || (hand === 'paper' && com === 'rock') || (hand === 'scissors' && com === 'paper')) {
        document.getElementById('winnerCircle').innerHTML = 'Player Wins!';
    } else if (hand === com) {
        document.getElementById('winnerCircle').innerHTML = 'Tie!';
    } else {
        document.getElementById('winnerCircle').innerHTML = 'Computer Wins!';
    };
}

function computerHand() {
    handSigns = ['rock', 'paper', 'scissors'];
    hand = handSigns[Math.floor(Math.random() * 3)];
    if (hand === 'rock') {
        document.getElementById('comHand').src = 'images/rock.jpeg';
        document.getElementById('comHand').style.transform = 'none'
    } else if (hand === 'paper') {
        document.getElementById('comHand').src = 'images/paper.jpeg';
        document.getElementById('comHand').style.transform = 'none'
    } else {
        document.getElementById('comHand').src = 'images/scissors.jpeg';
        document.getElementById('comHand').style.transform = 'none'
    };
    return hand;
}

function playerHand(hand) {
    if (hand === 'rock') {
        document.getElementById('playerHand').src = 'images/rock.jpeg';
        document.getElementById('playerHand').style.transform = 'scaleX(-1)'
    } else if (hand === 'paper') {
        document.getElementById('playerHand').src = 'images/paper.jpeg';
        document.getElementById('playerHand').style.transform = 'scaleX(-1)'
    } else {
        document.getElementById('playerHand').src = 'images/scissors.jpeg';
        document.getElementById('playerHand').style.transform = 'scaleX(-1)'
    };

}
