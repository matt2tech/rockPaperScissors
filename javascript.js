function rockPaperScissors(hand) {
    com = computerHand()
    if ((hand === 'rock' && com === 'scissors') || (hand === 'paper' && com === 'rock') || (hand === 'scissors' || com === 'paper')) {
        document.getElementById('winnerCircle').insertAdjacentHTML('beforeend', 'Player Wins!');
    } else if (hand === com) {
        document.getElementById('winnerCircle').insertAdjacentHTML('beforeend', 'Tie!');
    } else {
        document.getElementById('winnerCircle').insertAdjacentHTML('beforeend', 'Computer Wins!');
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
    } else {
        document.getElementById('comHand').src = 'images/scissors.jpeg';
    };
    return hand;
}
