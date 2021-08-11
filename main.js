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


// --------------- Event Listener for Human Player ---------------
// create event listener for red square
const addKeydownListener = (e) => {
  if (e.code === "ArrowRight") {
    console.log("red move")
    // on arrow up, move right +30px
    redSquare.style.left += "30px"
    positionRed += 30
    let newPosition = positionRed + 'px'
    console.log(newPosition)
    // $('#red-square').css('left', newPosition)
    redSquare.style.left = newPosition
  }
}


document.addEventListener('keydown', addKeydownListener)
// // Originial code
// document.addEventListener('keydown', (e) => {
//   if (e.code === "ArrowRight") {
//     console.log("red move")
//     // on arrow up, move right +30px
//     redSquare.style.left += "30px"
//     positionRed += 30
//     let newPosition = positionRed + 'px'
//     console.log(newPosition)
//     // $('#red-square').css('left', newPosition)
//     redSquare.style.left = newPosition
//   }
// });


// ---------------- Event Listener for Race Button ------------------
// get raceButton info (add event listener at bottom of code)
const raceButton = document.getElementById('race');



// ----------- Function for Start Game ------------------------------
// function to start game
const startGame = () => {
  // console.log("Clicked button!") // check your work


// ------- Remove Event Listener in startGame function ---------
raceButton.removeEventListener('click', startGame)
console.log('remove event listener in start game function')


// ------- Function to Compare Positions -------
// TOFIX: CHANGE THIS TO JAVASCRIPT IF POSSIBLE -------
const comparePositions = () => {

  let r = $("#red-square")
  let rOffset = r.offset();
  console.log( "left: " + rOffset.left + ", top: " + rOffset.top );


  let b = $('#blue-square')
  let bOffset = b.offset();
  console.log( "left: " + bOffset.left + ", top: " + bOffset.top )

  if (rOffset.left > bOffset.left) {
    console.log('Red wins!')
    $('#race-results').text("Human wins!");
  } else {
    console.log('Blue wins!')
    $('#race-results').text("Doggo wins!");
  }
};


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


// ------------- Animation for Computer Player -----------------------
// build an animation. move the player the width of the racetrack. left: raceTrackWidth. include the time it takes the animation to run for, using the race time variable. include a call back for once the animation is complete. run the function checkIfComplete, and give info about if the race is complete.

/*
Logic for checking coordinates and how it relates to the race:
1. run animation of computerplayer from L to R
2. at end of animation, check position of the humanPlayer
3. if blueSquare.offset.left > redSquare.offset.left,
  a. then blueSquare wins
*/

// 2nd draft with new callback function
$('#blue-square').animate({
  // set the animation
  left: raceTrackWidth
  // set the time of the animation
}, blueRaceTime, function() {
  // callback to check if animation is complete
  comparePositions();
});


};     // ends the startGame function



// -------- Variable for Reset Button -------------------------
// onClick of reset button, reset the css left property to zero of the players
// clear the raceInfo span with an empty string
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


  // Bug: if I hit start 2x in a row, it breaks the game
  // Fix: Remove startGame event listener from start Button
  // and add it back on click of Reset button

  // add Race Button Event Listener back in
  raceButton.addEventListener('click', startGame)
  console.log('adding startGame function back')

  // // clear class from #randomimage
  // slippers.className = '';
};


// --------- Event Listeners for Race and Reset Buttons --------------
// event listener to listen for click of race button. kicks off function startGame, above.
raceButton.addEventListener('click', startGame)
resetButton.addEventListener('click', clearAll)



// ----------------CODE I DIDN'T END UP USING: -----------------------

// 1st draft of animation the blue player and reporting on race results. used starting code from the youtube video linked at the bottom.
// $('#blue-square').animate({
//   // name the animation
//   left: raceTrackWidth
//   // set the time of the animation
// }, blueRaceTime, function() {
//   // callback to check if animation is complete
//   checkIfComplete();
//   // report on results
//   $('#race-results1').text(`Blue player finished in ${place} place and clocked in at ${blueRaceTime} milliseconds!`);
// });

// // ------- first draft at function checkIfComplete ----
// // build a function to see if the player has won the race.
//   let checkIfComplete = () => {
//     // if no car has completed the race
//     if (isComplete == false) {
//       // then set isComplete variable to true. a car will reach the end, then this function is run, so it will change isComplete to true
//       isComplete = true;
//     } else {
//       place = 'second';
//     }
//   };
//



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


// // ------- Animate Slippers on click of Race button -----------
// let slippers = document.getElementById('randomimage')
//
// const animateSlippers = () => {
//   slippers.className = 'classname';
//   console.log('function to animate slippers')
// };
//
// raceButton.addEventListener('click', animateSlippers)




// ---- no longer relevant given new approach to determining winner of game----
// // ------------ Variable for Finish Completion ---------------------
// // might take this out to try using raceTrackWidth to track the isComplete variable
// // set a flag/finish line variable to false by default. use this to check if the player has finished the race.
// let isComplete = false;
// // ------ Variable for First or Second Place -----------------------
// // set another flag variable by to first by default
// let place = 'first';





// ------------ Someone else's code to Detect if Two Objects Touch ------------
// Planning to modify this to represent 3 objects: blueSquare, redSquare, and finishLine
// if blueSquare touches finishe line and redSquare does not, blue Wins
// else redWins
// run this in a loop to constantly monitor if there is a winner? if neither are touching, keep running the loop. run this loop if #race-results = '' ???
/*
if (document.getElementById('race-results') == '') {
  console.log("empty race results string")
}
*/

/*
const collisionDetection = () => {

let horMatch = ""
let vertMatch = ""
let intersect = ""

let humanPlayerRef = blueSquare.getBoundingClientRect();
let humanTop = humanPlayerRef.top;
let humanLeft = humanPlayerRef.left;
let humanRight = humanPlayerRef.right
let humanBottom = humanPlayerRef.bottom

let finishLineRef = document.getElementById('finish-line').getBoundingClientRect();
let finishLineTop = finishLineRef.top;
let finishLineLeft = finishLineRef.left;
let finishLineRight = finishLineRef.right
let finishLineBottom = finishLineRef.bottom

if ((finishLineTop > humanTop && finishLineTop < humanBottom)||(finishLineBottom > humanTop && finishLineBottom < humanBottom)) {
  vertMatch = true
    console.log("vertical match")
} else{
  vertMatch = false
    console.log("no vertical match")
}

if ((finishLineRight > humanLeft && finishLineRight < humanRight)||(finishLineLeft < humanRight && finishLineLeft > humanLeft)) {
  horMatch = true
  console.log("horizontal match")
} else {
  horMatch = false
    console.log("no horizontal match")
}

if (horMatch && vertMatch) {
  let intersect = true
    console.log("intersect")
} else {
  let intersect = false
  console.log("no intersect")
}

};
*/







/*
-------- RESOURCES ---------------------------
started with inspiration from this video of building a jQuery race game: https://www.youtube.com/watch?v=QVSwX98kKFs
making modifications to have a diff user experience

.offset() is a jQuery method according to: https://api.jquery.com/offset/
.offset() allows us to retrieve a current position, relative to the document
the .offset() setter method allows us to reposition an element, relative to the document

how to detect object collision: https://stackoverflow.com/questions/50378855/how-to-detect-if-two-divs-are-touching-collision-detection

this resource on vanilla javascript game controllers has been helpful: https://www.w3schools.com/graphics/game_controllers.asp

might use the location object, as learned from w3 school: https://www.w3schools.com/jsref/obj_location.asp

this article cleared up why i need to create a variable for position: https://stackoverflow.com/questions/52293082/keep-moving-an-element-when-one-key-is-pressed-jquery

*/
