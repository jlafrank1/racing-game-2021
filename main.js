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
    $('#blue-square').css('left', newPosition)
    //my first attempt at vanilla js to move the block 50px (it worked, but only on the first keydown.)
    // blueSquare.style.left += "50px"

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
    $('#red-square').css('left', newPosition)
  }
});




// get raceButton info (add even listener at bottom of code)
const raceButton = document.getElementById('race');


// function to start game
const startGame = () => {
  console.log("Clicked button!")
};


// build a function to see if the player has won the race. checkIfComplete. if isComplete is == false, then isComplete = true. else place = 2nd.

// select width of racer

// get the width of the race track

// since positions move at the top left corner, the player would disappear on screen, unless you subtract the width of the player from the width of the window

// for the computer racer, generate a random number between 1 and 5000 (for example) to decide how long cars can race for, using Math.floor( (Math.random() * 5000) + 1)

// set a flag/finish line variable to false by default. use this to check if the player has finished the race.

// set another flag variable by to first by default

// build an animation. move the car the width of the racetrack. left: raceTrackWidth. include the time it takes the animation to run for, using the race time variable. include a call back for once the animation is complete. run the function checkIfComplete, and give info about if the race is complete.

// figure out how to duplicate this work for the 2nd player, but let it intake keypress instead of Math.random() to get to the finish line.


// reset button
// onClick, reset the css left property to zero of the players
// clear the raceInfo span with an empty string








// event listener to listen for click of race button. kicks off function startGame, above.
raceButton.addEventListener('click', startGame)

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
*/
