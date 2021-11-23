(function() {
    'use strict';
    console.log('reading js');

    const startGame = document.getElementById('startgame');
    const gameControl = document.getElementById('gamecontrol');
    const game = document.getElementById('game');
    const score = document.getElementById('score');
    const actionArea = document.getElementById('actions');

    //audio files
    const diceRoll = new Audio('media/diceRoll.mp3');
    const winningSound = new Audio('media/finalWin.mp3');
    const snakeEyes = new Audio('media/snakeEyes-2.mp3');

    const inst = document.getElementById('inst');

    const mute = document.getElementById('mute');

    //individual squid images
    const squid1 = document.getElementById('squid_l');
    const squid2 = document.getElementById('squid_r');

    //individual balloon images
    const balloon1 = document.getElementById('balloon_l');
    const balloon2 = document.getElementById('balloon_r');

    //individual banners
    const player1_banner = document.getElementById('player1_banner');
    const player2_banner = document.getElementById('player2_banner');

    player1_banner.style.display = 'none';
    player2_banner.style.display = 'none';

    const gameData = {
        dice: ['1die.png', '2die.png', '3die.png', '4die.png', '5die.png', '6die.png'],
        players: ['Player_1', 'Player_2'],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        score: [0, 0],
        gameEnd: 29
    }

    document.getElementById('overlay').className = 'showing';
    displayInfo();

    //to show/hide the instructions overlay
    document.querySelector('#info').addEventListener("click",function(event) {
        event.preventDefault();
        displayInfo();
        document.getElementById('overlay').className = 'showing';

        document.querySelector('body').style.overflow = "hidden";
    });

    document.querySelector('.close').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('overlay').className = 'hidden';

        document.querySelector('body').style.overflow = "auto";
    })

    //To exit overlay on pressing ESC key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            document.getElementById('overlay').className = 'hidden';

            document.querySelector('body').style.overflow = "auto";
        }
    })

    //instructions text
    function displayInfo() {

        const myText = "Hello! Welcome to my game! Here are the rules: "; "There are two players. The player whose turn it is rolls the dice. The total of the roll is added to the current player's score, unless either die comes up as a 'one'. If this happens, this player's turn is over, and it is the other player’s turn. After each roll, the current player can either roll again, (assuming a 'one' was not rolled) or if the current player feels that luck is running thin, they can pass to the other player.";

        inst.innerHTML = myText;

        inst.innerHTML += "<br>There are two players. The player whose turn it is rolls the dice. The total of the roll is added to the current player's score, unless either die comes up as a 'one'. If this happens, this player's turn is over, and it is the other player’s turn. After each roll, the current player can either roll again, (assuming a 'one' was not rolled) or if the current player feels that luck is running thin, they can pass to the other player.";

        inst.innerHTML += "<p>The first player to get 30 points or higher wins.</p>";

        inst.innerHTML += "<p>Oh, and if you roll two 'ones' (snake eyes), your current score gets zeroed out. So don’t do that.</p>";

    }

    //mute button
    mute.addEventListener("click",function(event) {
        const sounds = [diceRoll, winningSound, snakeEyes];

        for (var i=0; i< sounds.length; i++) {
            if (sounds[i].muted == true) {
                sounds[i].muted = false;
                mute.innerHTML = '<img src="images/mute.png">';
                document.getElementById('mute')
            }
            else{
                sounds[i].muted = true;
                mute.innerHTML = '<img src="images/unmute.png">';
            }
        }
    });

    //startGame button
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

    //setting up game
    function setUpTurn() {
        game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
        actionArea.innerHTML = '<button id="roll">Roll the Dice</button>';
        document.getElementById('roll').addEventListener('click', function() {

            console.log('roll the dice!');

        })
        throwDice();
    }

    //throwDice function
    function throwDice() {
        diceRoll.play();
        actionArea.innerHTML = '';
        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;
        game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
        game.innerHTML += `<img src="images/${gameData.dice[gameData.roll1-1]}">
                            <img src="images/${gameData.dice[gameData.roll2-1]}">`;
        gameData.rollSum = gameData.roll1 + gameData.roll2;

        //if two 1s are rolled
        if (gameData.rollSum === 2) {
            console.log("snake eyes were rolled");
            game.innerHTML += '<p>Oh snap! Snake eyes!</p>';
            snakeEyes.play();
            gameData.score[gameData.index] = 0;
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            if (gameData.index == 0) {
                squid1.style.transform = "rotate(90deg)";
            }
            else {
                squid2.style.transform = "rotate(90deg)";
            }
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

            squid1.style.transform = "rotate(0deg)";
            squid2.style.transform = "rotate(0deg)";

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

    //checking score of the players against the winning condition
    function checkWinningCondition () {
        if (gameData.score[gameData.index] > gameData.gameEnd) {
            score.innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!</h2>`;

            winningSound.play();

            actionArea.innerHTML = '';

            const images = document.querySelectorAll('img');

            game.innerHTML = '<h1>GAME OVER!</h1>';
            game.style.textShadow = '3px 2px gray';
            game.style.fontSize = '20px';

            balloon1.style.top = '10vh';
            balloon1.style.transition = '4s';

            balloon2.style.top = '10vh';
            balloon2.style.transition = '4s';

            if (gameData.index == 0) {
                squid1.style.left = '45%';
                squid1.style.transition = '2s';
                squid1.style.transition = '2s';
                squid1.style.transform = 'rotate(360deg)';
                squid2.style.transition = '10s';
                squid2.style.top = '200vh';
                player1_banner.style.display = 'block';
                player2_banner.style.display = 'none';
            }
            else {
                squid2.style.left = '45%';
                squid2.style.transition = '2s';
                squid2.style.transition = '2s';
                squid2.style.transform = 'rotate(360deg)';
                squid1.style.transition = '10s';
                squid1.style.top = '200vh';
                player1_banner.style.display = 'none';
                player2_banner.style.display = 'block';
            }

            document.getElementById('quit').innerHTML = "Start a New Game?";
        }

        else {
            showCurrentScore();
        }
    }

    //current scores of the players
    function showCurrentScore() {
        score.innerHTML = `<p> <strong>${gameData.players[0]}: ${gameData.score[0]}/30</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>${gameData.players[1]}: ${gameData.score[1]}/30</strong></p>`;
    }

}());