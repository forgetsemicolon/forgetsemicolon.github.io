(function() {
    'use strict';
    console.log('reading js');

    const startGame = document.getElementById('startgame');
    const gameControl = document.getElementById('gamecontrol');
    const game = document.getElementById('game');
    const score = document.getElementById('score');
    const actionArea = document.getElementById('actions');

    const diceRoll = new Audio('media/diceRoll.mp3');
    const winningSound = new Audio('media/winningSound.mp3');

    // const info = document.getElementById('info');
    const inst = document.getElementById('inst');

    const gameData = {
        dice: ['1die.png', '2die.png', '3die.png', '4die.png', '5die.png', '6die.png'],
        players: ['player1', 'player2'],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        score: [0, 0],
        gameEnd: 29
    }

    // console.log(gameData);

    document.querySelector('#info').addEventListener("click",function(event) {
        event.preventDefault();
        const formData = document.querySelectorAll("input[type=text]");
        displayInfo();
        document.getElementById('overlay').className = 'showing';

        document.querySelector('body').style.overflow = "hidden";
    });

    document.querySelector('.close').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('overlay').className = 'hidden';

        document.querySelector('body').style.overflow = "auto";
    })

    //To exit to pressing ESC key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            document.getElementById('overlay').className = 'hidden';

            document.querySelector('body').style.overflow = "auto";
        }
    })

    function displayInfo() {

        const myText = "There are two players. The player whose turn it is rolls the dice. The total of the roll is added to the current player's score, unless either die comes up as a 'one'. If this happens, this player's turn is over, and it is the other player’s turn. After each roll, the current player can either roll again, (assuming a 'one' was not rolled) or if the current player feels that luck is running thin, they can pass to the other player.";

        inst.innerHTML = myText;

        inst.innerHTML += "<p>The first player to get 30 points or higher wins.</p>";

        inst.innerHTML += "<p>Oh, and if you roll two 'ones' (snake eyes), your current score gets zeroed out. So don’t do that.</p>";

    }

    startGame.addEventListener('click', function() {
        gameData.index = Math.round(Math.random());
        console.log(gameData.index);

        gameControl.innerHTML = '<h2>The Game Has Started</h2>';
        gameControl.innerHTML += '<button id="quit">Wanna Quit?</button>';

        document.getElementById('quit').addEventListener('click', function() {
            location.reload();
        });

        setUpTurn();
    });

    function setUpTurn() {
        game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
        actionArea.innerHTML = '<button id="roll">Roll the Dice</button>';
        document.getElementById('roll').addEventListener('click', function() {

            console.log('roll the dice!');

        })
        throwDice();
    }

    function throwDice() {
        actionArea.innerHTML = '';
        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;
        game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
        game.innerHTML += `<img src="images/${gameData.dice[gameData.roll1-1]}">
                            <img src="images/${gameData.dice[gameData.roll2-1]}">`;
        gameData.rollSum = gameData.roll1 + gameData.roll2;
        diceRoll.play();

        //if two 1s are rolled
        if (gameData.rollSum === 2) {
            console.log("snake eyes were rolled");
            game.innerHTML += '<p>Oh snap! Snake eyes!</p>';
            gameData.score[gameData.index] = 0;
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            showCurrentScore();

            //show the current score
            setTimeout(setUpTurn, 2000);
        }

        //if either die rolled a 1
        else if (gameData.roll1 === 1 || gameData.roll2 === 1) {
            console.log("one of the two dice was a 1");
            //switch play
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            game.innerHTML += `<p>Sorry, one of your rolls was a one, switching to ${gameData.players[gameData.index]}</p>`;

            setTimeout(setUpTurn, 2000);
        }

        //if neither die is a 1
        else{
            console.log("the game continues");
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            actionArea.innerHTML = '<button id="rollagain">Roll again</button> or <button id="pass">Pass</button>';

            document.getElementById('rollagain').addEventListener('click',function() {
                setUpTurn();
            });

            document.getElementById('pass').addEventListener('click',function() {
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setUpTurn();
            });
        }

        checkWinningCondition();
    }

    function checkWinningCondition () {
        if (gameData.score[gameData.index] > gameData.gameEnd) {
            score.innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!</h2>`;

            winningSound.play();

            actionArea.innerHTML = '';
            const images = document.querySelectorAll('img');

            for (let i=0;i<images.length;i++){
                images[i].style.display = 'none';
            }
            document.getElementById('quit').innerHTML = "Start a New Game?";
        }

        else {
            showCurrentScore();
        }
    }

    function showCurrentScore() {
        score.innerHTML = `<p> <strong>${gameData.players[0]}: ${gameData.score[0]}/30</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>${gameData.players[1]}: ${gameData.score[1]}/30</strong></p>`;
    }

}());