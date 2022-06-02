//QuerySelectors
var box1 = document.getElementById('box1')
var box2 = document.getElementById('box2')
var box3 = document.getElementById('box3')
var box4 = document.getElementById('box4')
var box5 = document.getElementById('box5')

var icon1 = document.getElementById('lockIcon1')
var icon2 = document.getElementById('lockIcon2')
var icon3 = document.getElementById('lockIcon3')
var icon4 = document.getElementById('lockIcon4')
var icon5 = document.getElementById('lockIcon5')

var hexBox = document.querySelectorAll('.hex-boxes')
var hexValues = document.querySelectorAll('.hex-values')

var images = document.querySelectorAll('img')


//EventListeners
window.addEventListener('load', randomColor)
// images.addEventListener('click', toggle)

function randomColor() {
  for (var i = 0; i < hexBox.length; i++) {
    var color = getRandomColor()
    hexBox[i].style.backgroundColor = color
    hexValues[i].innerText = color;
  }
}


// function toggle() {
//   for (i = 0; i < images.length; i++) {
//
//   }
// }

//we know there are 5 locks
//we have to lock them independently
//if we click on one lock it will change to a locked icon
//if the icon is locked, the color should not change
//if the icon is locked, the user can unlock it
