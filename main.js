/**
 * main.js
 * Description:
 * 
 * @author CJS (2021)
 */

//vars
let buttonColors = ['red', 'blue', 'green', 'yellow'];
let gamePattern = [];
let userPattern = [];
let currentLevel = 0;
let started = false;

//click listener
$('.btn').on('click', (e) => {
    if (started == true) {
        //fade square
        $(e.target).fadeOut().fadeIn();
        let sound = new Audio('sounds/' + e.target.id + '.mp3');
        sound.volume = 0.25;
        sound.play();
        //add to user pattern
        userPattern.push(e.target.id);
        //check if most recent user entry matches game pattern at same index, then check if both patterns are same
        //size to check for pattern match or game over 
        if (userPattern[userPattern.length - 1] === gamePattern[userPattern.length - 1]) {
            if (userPattern.length === gamePattern.length) {
                console.log('round match success');
                setTimeout(() => { runRound() }, 1300);
            }
        } else {
            console.log('loser...');
            $('#level-title').html('YOU SUCK! GAME OVERRRRRRR');
            $('#level-title').after('<h1 id="loser">You made it to level: ' + currentLevel + '</h1>');

            started = false;
            gamePattern = [];
            userPattern = [];
            currentLevel = 0;
        }

    }
});

//game start listen
$('body').on('keypress', (e) => {
    if (started == false) {
        $('#loser').remove();
        if (e.key == 'z') {
            started = true;
            runRound();
        }
    }
});

//simulate current round
function runRound() {
    currentLevel++;
    $('#level-title').html('Level: ' + currentLevel);
    userPattern = [];
    gamePattern.push(buttonColors[getRand(4)]);
    console.log('Current game pattern: ' + gamePattern);
    $('.' + gamePattern[gamePattern.length - 1]).fadeOut(500).fadeIn(500);
    let sound = new Audio('sounds/' + gamePattern[gamePattern.length - 1] + '.mp3');
    sound.volume = 0.25;
    sound.play();
}

//returns integer bewteen 0 and max
function getRand(max) {
    return Math.floor(Math.random() * max);
}
