console.log("Go speed racer, go!")

// -------------- Player Variables ------------------------
// establish variables for blue square and red square, for easy reference
const blueSquare = document.getElementById('blue-square');
// console.log(blueSquare)
const redSquare = document.getElementById('red-square');
// console.log(redSquare)

// ------------- Starting Position Variables -----------------
// had to set this variable because whenever i tried to move the player to the right without a variale, it would only move once, to +50px. i needed something i could increment.
// let position = 0
// need to create two separate starting position variables, one for each player
let positionBlue = 0;
let positionRed = 0;

/*
Taking this out for now because blue square will be the computer
// create event listener for blue square
document.addEventListener('keydown', (e) => {
  if (e.code === "ArrowUp") {
    console.log("blue move")
    // on arrow right, move right +50px
    positionBlue += 50
    let newPosition = positionBlue + 'px'
    console.log(newPosition)

    //i'm sorry but i'm mixing jquery with javascript right now. i'll try to figure out how to make this a vanilla command later.
    // $('#blue-square').css('left', newPosition)
    blueSquare.style.left = newPosition   // nailed it
    // blueSquare.style.left += "50px"   // my first attempt at vanilla js to move the block 50px (it worked, but only on the first keydown.)
  }
});
*/

// --------------- Event Listener for Human Player ---------------
// create event listener for red square
document.addEventListener('keydown', (e) => {
  if (e.code === "ArrowRight") {
    console.log("red move")
    // on arrow up, move right +30px
    redSquare.style.left += "30px"
    positionRed += 30
    let newPosition = positionRed + 'px'
    console.log(newPosition)
    // TOFIX: try to make this vanilla JS instead of jQuery
    // $('#red-square').css('left', newPosition)
    redSquare.style.left = newPosition
  }
});



// ---------------- Event Listener for Race Button ------------------
// get raceButton info (add even listener at bottom of code)
const raceButton = document.getElementById('race');


// ----------- Functino for Start Game ------------------------------
// function to start game
const startGame = () => {
  // console.log("Clicked button!") // check your work


// --- first draft at function checkIfComplete
// build a function to see if the player has won the race. checkIfComplete. if isComplete is == false, then isComplete = true. else place = 2nd.
  let checkIfComplete = () => {
    if (isComplete == false) {
      isComplete = true;
    } else {
      place = 'second';
    }
  };


/*
--- 2nd try at checkIfComplete
if blue is at end and red is at less than end, place = 1st
else, second

TOFIX

*/

// ---------- Calculate Player Width ------------------------------
// select width of racer
const bluePlayerWidth = blueSquare.offsetWidth;
  // console.log(playerWidth) // check your work

// get the width of the race track. since positions move at the top left corner, the player would disappear on screen, unless you subtract the width of the player from the width of the window
const raceTrackWidth = document.querySelector('body').offsetWidth - bluePlayerWidth;
// console.log(raceTrackWidth);   // check your work

// --------- Randomize Computer Player Time --------------------
// for the computer racer, generate a random number between 1 and 5000 (for example) to decide how long cars can race for, using Math.floor( (Math.random() * 5000) + 1)
let blueRaceTime = Math.floor((Math.random() * 10000) + 1);
// let redRaceTime = 0;

// ------------ Variable for Finish Completion ---------------------
// might take this out to try using raceTrackWidth to track the isComplete variable
// set a flag/finish line variable to false by default. use this to check if the player has finished the race.
let isComplete = false;

// ------ Variable for First or Second Place -----------------------
// set another flag variable by to first by default
let place = 'first';

// ------------- Animation for Computer Player -----------------------
// build an animation. move the car the width of the racetrack. left: raceTrackWidth. include the time it takes the animation to run for, using the race time variable. include a call back for once the animation is complete. run the function checkIfComplete, and give info about if the race is complete.
// ----- TOFIX: THIS IS IN JQUERY INSTEAD OF JAVASCRIPT -----
$('#blue-square').animate({
  left: raceTrackWidth
}, blueRaceTime, function() {
  // callback for once animation is complete
  checkIfComplete();
  // report on results
  $('#race-results').text(`Blue player finished in ${place} place and clocked in at ${blueRaceTime} milliseconds!`);
});

// /* leaving out for now */
//   $('#red-square').function(checkIfComplete())
//   $('#race-results').text(`Red player finished in ${place} place and clocked in at ${redRaceTime} milliseconds!`);

};

// ------------ Someone else's code to Detect if Two Objects Touch ------------
// May modify this to represent 3 objects: blueSquare, redSquare, and finishLine
// if blueSquare touches finishe line and redSquare does not, blue Wins
// else redWins
// run this in a loop to constantly monitor if there is a winner? if neither are touching, keep running the loop.

let div1 = document.getElementById('div1').getBoundingClientRect();
let div1Top = div1.top;
let div1Left = div1.left;
let div1Right = div1.right
let div1Bottom = div1.bottom

let div2 = document.getElementById('div2').getBoundingClientRect();
let div2Top = div1.top;
let div2Left = div1.left;
let div2Right = div1.right
let div2Bottom = div1.bottom

if ((div2Top > div1Top && div2Top < div1Bottom)||(div2Bottom > div1Top && div2Bottom < div1Bottom)) {
  let verticalMatch = true
} else{
  let verticalMatch = false
}

if ((div2Right > div1Left && div2Right < div1Right)||(div2Left < div1Right && div2Left > div1Left)) {
  let horizontalMatch = true
} else {
  let horizontalMatch = false
}

if (horizontalMatch && vertialMatch){
  let intersect = true
} else {
  let intersect = false
}
//-----------



// reset button
// onClick, reset the css left property to zero of the players
// clear the raceInfo span with an empty string

// -------- Variable for Reset Button -------------------------
const resetButton = document.getElementById('reset')


// --------- Function to Clear Player Coordinates/Reset -----------
const clearAll = () => {
  // $('.players').css('left', 0);     // jQuery version
  // turns out this didn't actually work to reset everything. takes the square back to zero, but if you race again it starts where you left off on the x-axis.
  // update: figured out that i also needed to reset the value of positionRed
  blueSquare.style.left = 0
  redSquare.style.left = 0
  positionRed = 0

  // $('#race-results').text('');    // jQuery version
  let raceResultText = document.getElementById('race-results')
  raceResultText.textContent = ''
};


// --------- Event Listeners for Race and Reset Buttons --------------
// event listener to listen for click of race button. kicks off function startGame, above.
raceButton.addEventListener('click', startGame)
resetButton.addEventListener('click', clearAll)

/*
-------- RESOURCES ---------------------------


started with inspiration from this video of building a jQuery race game: https://www.youtube.com/watch?v=QVSwX98kKFs
making modifications to have a diff user experience

.offset() is a jQuery method according to: https://api.jquery.com/offset/
.offset() allows us to retrieve a current position, relative to the document
the .offset() setter method allows us to reposition an element, relative to the document


this resource on vanilla javascript game controllers has been helpful: https://www.w3schools.com/graphics/game_controllers.asp

might use the location object, as learned from w3 school: https://www.w3schools.com/jsref/obj_location.asp

this article cleared up why i need to create a variable for position: https://stackoverflow.com/questions/52293082/keep-moving-an-element-when-one-key-is-pressed-jquery

*/
