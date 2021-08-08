console.log("Go speed racer, go!")

// establish variables for blue square and red square, for easy reference
const blueSquare = document.getElementById('blue-square');
// console.log(blueSquare)
const redSquare = document.getElementById('red-square');
// console.log(redSquare)


// had to set this variable because whenever i tried to move the player to the right without a variale, it would only move once, to +50px. i needed something i could increment.
// let position = 0
// need to create two separate starting position variables, one for each player
let positionBlue = 0;
let positionRed = 0;


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




// get raceButton info (add even listener at bottom of code)
const raceButton = document.getElementById('race');


// function to start game
const startGame = () => {
  // console.log("Clicked button!") // check your work

// build a function to see if the player has won the race. checkIfComplete. if isComplete is == false, then isComplete = true. else place = 2nd.
  let checkIfComplete = () => {
    if (isComplete == false) {
      isComplete = true;
    } else {
      place = 'second';
    }
  };


// select width of racer
const bluePlayerWidth = blueSquare.offsetWidth;
  // console.log(playerWidth) // check your work

// get the width of the race track. since positions move at the top left corner, the player would disappear on screen, unless you subtract the width of the player from the width of the window
const raceTrackWidth = document.querySelector('body').offsetWidth - bluePlayerWidth;
// console.log(raceTrackWidth);   // check your work

// for the computer racer, generate a random number between 1 and 5000 (for example) to decide how long cars can race for, using Math.floor( (Math.random() * 5000) + 1)
let blueRaceTime = Math.floor((Math.random() * 10000) + 1);
let redRaceTime = 0;

// set a flag/finish line variable to false by default. use this to check if the player has finished the race.
let isComplete = false;

// set another flag variable by to first by default
let place = 'first';

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

/* leaving out for now */
  // $('#red-square').function(checkIfComplete())
  // $('#race-results').text(`Red player finished in ${place} place and clocked in at ${redRaceTime} milliseconds!`);

// figure out how to duplicate this work for the 2nd player, but let it intake keypress instead of Math.random() to get to the finish line.
};




// reset button
// onClick, reset the css left property to zero of the players
// clear the raceInfo span with an empty string


const resetButton = document.getElementById('reset')

const clearAll = () => {
  // TOFIX: update this to javascript instead of jquery
  // $('.players').css('left', 0);     // jQuery version // turns out this didn't actually work to reset everything. takes the square back to zero, but if you race again it starts where you left off on the x-axis
  blueSquare.style.left = 0
  redSquare.style.left = 0


  // $('#race-results').text('');    // jQuery version
  let raceResultText = document.getElementById('race-results')
  raceResultText.textContent = ''
};




// event listener to listen for click of race button. kicks off function startGame, above.
raceButton.addEventListener('click', startGame)

resetButton.addEventListener('click', clearAll)

/*
-------- RESOURCES ---------------------------


started with this video of building a jQuery race game: https://www.youtube.com/watch?v=QVSwX98kKFs
making modifications to have a diff user experience

.offset() is a jQuery method
according to: https://api.jquery.com/offset/
.offset() allows us to retrieve a current position, relative to the document
the .offset() setter method allows us to reposition an element, relative to the document

if I wanted to do jQuery, I could do this:
$('#blue-square').offset({top: 10, left: 30})
but for some reason, it only works on the 1st keypress

for vanilla javascript:
this resource on game controllers has been helpful: https://www.w3schools.com/graphics/game_controllers.asp

might use the location object, as learned from w3 school: https://www.w3schools.com/jsref/obj_location.asp

this article cleared some stuff up for me, namely why i need to create a variable for position: https://stackoverflow.com/questions/52293082/keep-moving-an-element-when-one-key-is-pressed-jquery



slippers image from: data:image/jpeg;base64,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
*/
