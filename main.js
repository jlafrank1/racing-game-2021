console.log("Go speed racer, go!")

// establish variables for blue square and red square, for easy reference
const blueSquare = document.getElementById('blue-square');
// console.log(blueSquare)
const redSquare = document.getElementById('red-square');
// console.log(redSquare)



// create event listener for blue square
document.addEventListener('keydown', (e) => {
  if (e.code === "ArrowRight") {
    console.log("blue move")
    // on arrow right, move right +50px
    blueSquare.style.left += "50px"
  }
});

// create event listener for red square
document.addEventListener('keydown', (e) => {
  if (e.code === "ArrowUp") {
    console.log("red move")
    // on arrow up, move right +30px
    redSquare.style.left += "30px"
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
*/
