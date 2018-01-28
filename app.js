var score, roundScore, activePlayer, dice, gamePlaying, previousDice;
previousDice = 0;
newGame();

document.querySelector('.btn-roll').addEventListener('click', function()  {
   if (gamePlaying){
    // Random number
     dice = Math.floor(Math.random() * 6) + 1;
     // Display the result
     var diceDOM = document.querySelector('.dice');
     diceDOM.style.display = 'block';
     diceDOM.src = 'dice-' + dice + '.png';
    
     // Update the round score IF the rolled number was not a 1
     if (dice !== 1 && !(previousDice === 6 && dice === 6)) {
         roundScore += dice;
         document.querySelector('#current-' + activePlayer).textContent = roundScore;
     }
     else {
         playerNext();
            //document.querySelector('.dice').style.display = 'none';

        }
    }


});



document.querySelector('.btn-hold').addEventListener('click', function()  {
    if (gamePlaying) {
        //Add current score to global score
        score[activePlayer] += roundScore;
        document.getElementById('score-' + activePlayer).textContent = score[activePlayer];
        if (score[activePlayer] >= 100) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false

        }
        else {
            playerNext();
            document.querySelector('.dice').style.display = 'none';
        }
    }
    

});


document.querySelector('.btn-new').addEventListener('click', newGame);



function playerNext() {
    
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    roundScore = 0;
    document.getElementById('current-' + activePlayer).textContent = roundScore;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');
    
};

function newGame() {
    score = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'PLAYER 1';
    document.getElementById('name-1').textContent = 'PLAYER 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}
