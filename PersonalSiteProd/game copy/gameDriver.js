document.addEventListener("DOMContentLoaded", function() {

// this is the game driver. It will use methods from the game.js file.

// getting the start button element

var startMe = document.getElementById("fireItUp");

// disable buttons until game is started

window.onload = function() {
    disableInput();
    alert("Welcome to Ultimate Simon Says. Press the gold tile to start.")
};



startMe.addEventListener("click", function() {
    
    checkCorrectness();

    disableInput();
    
    randomColorGen();

    startAnimation();

});



});
