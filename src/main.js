//QuerySelectors
var hexBox = document.querySelectorAll('.hex-boxes')
var hexValues = document.querySelectorAll('.hex-values')
var unlockImages = document.querySelectorAll('.image-button')
var imageButtonContainer = document.getElementsByClassName('image-button-container')
var colorContainer = document.querySelector('.colors-container')
var newPaletteButton = document.querySelector(".new-palette");

//EventListeners
window.addEventListener('load', randomColor)
colorContainer.addEventListener('click', function(event) {
  lockColor(event)
})
newPaletteButton.addEventListener('click', newPalette)

var palette = new Palette()
var color = new Color()

function randomColor() {
  for (var i = 0; i < hexBox.length; i++) {
    var color = getRandomColor()
    hexBox[i].style.backgroundColor = color
    hexValues[i].innerText = color
    palette.generateColor(color)
  }
}



function lockColor(event) {
  var hexId = event.target.id
  for (var i = 1; i <= unlockImages.length; i++) {
    if (hexId === `unlockIcon${i}` && !palette.colors[(i - 1)].locked) {
      palette.colors[(i - 1)].locked = true
      unlockImages[(i-1)].src = './assets/lock-screen.svg'
    }
    else if (hexId === `unlockIcon${i}` && palette.colors[(i - 1)].locked) {
      palette.colors[(i - 1)].locked = false
      unlockImages[(i - 1)].src = './assets/unlock.svg'
    }
  }
}
// We want to prevent a new palette from loading upon pressing the refresh button
// When the "new Palette" button is clicked
// We want to invoke a function that will generate a new set of colors to the palette container

function newPalette() {
  randomColor();
}
