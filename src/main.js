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
window.addEventListener('load', randomColor)
colorContainer.addEventListener('click', function(event) {
  lockColor(event)
})
newPaletteButton.addEventListener('click', newPalette)
savedPaletteButton.addEventListener('click', savePalette)
accordionButton.addEventListener('click', displaySavedPaletteWindow);
closeSavedPaletteWindowButton.addEventListener('click', closeSavedPaletteWindow)


var palette = new Palette()
var color = new Color()

var savedPalette = []

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

function newPalette() {
  randomColor();
}

function savePalette() {
  savePaletteSection.innerHTML = ""
  for (var i = 0; i < palette.colors.length; i++) {
    savePaletteSection.innerHTML +=
    `<section class="mini-palettes-container">
      <div class="hex-boxes" style="background-color: ${palette.colors[i].hexCode};height:25px;width:25px"></div>
    </section>
    <button class="trash-can-button"> <img class="image-button" src="./assets/bin.svg">
    </button>`
    savedPalette.appendChild()
  }
}

function displaySavedPaletteWindow() {
  savedPaletteWindow.classList.remove('hidden');
}

function closeSavedPaletteWindow() {
  savedPaletteWindow.classList.add('hidden');
}
