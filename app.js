var score, roundScore, activePlayer, dice, dice2, gamePlaying, previousDice, winScore;
//previousDice = 0;      For one dice
winScore = 100
newGame();

document.querySelector('.btn-submit').addEventListener('click', function()  {
    
    winScore = document.getElementById('inputScore-3').value;
    document.getElementById('inputScore-1').style.display = 'none';

});

document.querySelector('.btn-roll').addEventListener('click', function()  {
   if (gamePlaying){
    // Random number
     dice = Math.floor(Math.random() * 6) + 1;
     
     // Display the result
     var diceDOM = document.querySelector('.dice1');
     
     diceDOM.style.display = 'block';
     
     diceDOM.src = 'dice-' + dice + '.png';
    
    
     dice2 = Math.floor(Math.random() * 6) + 1;
     var diceDOM2 = document.querySelector('.dice2');
     diceDOM2.src = 'dice-' + dice2 + '.png';
     diceDOM2.style.display = 'block';


     // Update the round score IF the rolled number was not a 1
     if ((dice !== 1 && dice2 !== 1) && !(dice2 === 6 && dice === 6)) {
        //  console.log(dice);
        //  console.log(dice2);
         roundScore += dice;
         roundScore += dice2;
         document.querySelector('#current-' + activePlayer).textContent = roundScore;
     }
     else {
         if (dice2 === 6 && dice === 6) {
            score[activePlayer] = 0;
         }
         playerNext();
            //document.querySelector('.dice').style.display = 'none';

        }
    }
    //previousDice = dice;

});



document.querySelector('.btn-hold').addEventListener('click', function()  {
    if (gamePlaying) {
        //Add current score to global score
        score[activePlayer] += roundScore;
        document.getElementById('score-' + activePlayer).textContent = score[activePlayer];
        if (score[activePlayer] >= winScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice1').style.display = 'none';
            document.querySelector('.dice2').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false

        }
        else {
            playerNext();
            document.querySelector('.dice1').style.display = 'none';
            document.querySelector('.dice2').style.display = 'none';
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

    document.querySelector('.dice1').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';

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
    document.getElementById('inputScore-1').style.display = 'block';
    document.getElementById('inputScore-3').value = 100;
}
