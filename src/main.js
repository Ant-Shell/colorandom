//QuerySelectors
var hexBox = document.querySelectorAll('.hex-boxes')
var hexValues = document.querySelectorAll('.hex-values')
var unlockImages = document.querySelectorAll('.image-button')
var imageButtonContainer = document.getElementsByClassName('image-button-container')
var colorContainer = document.querySelector('.colors-container')
var newPaletteButton = document.querySelector(".new-palette");
var savedPaletteButton = document.querySelector(".save-palette");
var accordionButton = document.querySelector(".accordion");
var savedPaletteWindow = document.querySelector(".palette-window");
var closeSavedPaletteWindowButton = document.querySelector(".closeSavedPaletteWindow");
var savePaletteSection = document.querySelector('.saved-palettes')

//EventListeners
window.addEventListener('load', newPalette)
colorContainer.addEventListener('click', function(event) {
  lockColor(event)
})
newPaletteButton.addEventListener('click', newPalette)
savedPaletteButton.addEventListener('click', savePalette2)
accordionButton.addEventListener('click', displaySavedPaletteWindow);
closeSavedPaletteWindowButton.addEventListener('click', closeSavedPaletteWindow)


var palette;

function newPalette() {
  palette = new Palette();
  randomColor();
}

function randomColor() {
  for (var i = 0; i < hexBox.length; i++) {
    var color = getRandomColor()
    hexBox[i].style.backgroundColor = color
    hexValues[i].innerText = color
    palette.generateColor(color)
  }
}

function getRandomColor() {
  var randNum = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randNum}`
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

function savePalette2() {
  savePaletteSection.innerHTML += ""
   if (savePaletteSection.innerHTML !== newPaletteElement) {
    var newPaletteElement = document.createElement('figure')
    newPaletteElement.classList.add('mini-hex-boxes-container')
    newPaletteElement.innerHTML = `<div class="hex-boxes" style="background-color: ${palette.colors[0].hexCode};height:25px;width:25px"></div>
      <div class="hex-boxes" style="background-color: ${palette.colors[1].hexCode};height:25px;width:25px"></div>
      <div class="hex-boxes" style="background-color: ${palette.colors[2].hexCode};height:25px;width:25px"></div>
      <div class="hex-boxes" style="background-color: ${palette.colors[3].hexCode};height:25px;width:25px"></div>
      <div class="hex-boxes" style="background-color: ${palette.colors[4].hexCode};height:25px;width:25px"></div>
      <img class="hex-boxes" id="trash" style="height:25px;width:25px" src="./assets/bin.svg">`
    savePaletteSection.appendChild(newPaletteElement)
    }
  }

function displaySavedPaletteWindow() {
  savedPaletteWindow.classList.remove('hidden');
}

function closeSavedPaletteWindow() {
  savedPaletteWindow.classList.add('hidden');
}
