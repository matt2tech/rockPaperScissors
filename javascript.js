function rockPaperScissors(hand) {
    if ((hand === 'rock' && com === 'scissors') || (hand === 'paper' && com === 'rock') || (hand === 'scissors' || com === 'paper')) {
        document.getElementById('winnerCircle').insertAdjacentHTML('Player Wins!')
    } else if (hand === com) {
        document.getElementById('winnerCircle').insertAdjacentHTML('Tie!')
    } else {
        document.getElementById('winnerCircle').insertAdjacentHTML('Computer Wins!')
    }
}

