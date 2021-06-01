/**
 * main.js
 * Description:
 * 
 * @author Clint J Skouson (2021)
 */

//vars
let buttonColors = ['red', 'blue', 'green', 'yellow'];
let randColor = '';
let gamePattern = [];

//click listener
$('.btn').on('click', (e) => {
    $(e.target).fadeOut().fadeIn();
});

//funcs
//
function nextSequence(){
    let rand = getRand(4);
    console.log(rand);
}

//
function getRand(max){
    return Math.floor(Math.random()*max);
}
