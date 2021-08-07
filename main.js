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
  if (e.code === "ArrowRight") {
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
  if (e.code === "ArrowUp") {
    console.log("red move")
    // on arrow up, move right +30px
    redSquare.style.left += "30px"
    positionRed += 30
    let newPosition = positionRed + 'px'
    console.log(newPosition)
    $('#red-square').css('left', newPosition)
  }
});

/*
-------- RESOURCES ---------------------------
as realted to:
javascript to move the div a little to the left


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
