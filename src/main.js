//QuerySelectors
var hexBox = document.querySelectorAll('.hex-boxes');
var hexValues = document.querySelectorAll('.hex-values');
var unlockImages = document.querySelectorAll('.image-button');
var imageButtonContainer = document.getElementsByClassName('image-button-container');
var colorContainer = document.querySelector('.colors-container');
var newPaletteButton = document.querySelector(".new-palette");
var savedPaletteButton = document.querySelector(".save-palette");
var accordionButton = document.querySelector(".accordion");
var savedPaletteWindow = document.querySelector(".palette-window");
var closeSavedPaletteWindowButton = document.querySelector(".closeSavedPaletteWindow");
var savePaletteSection = document.querySelector('.saved-palettes');

//EventListeners
window.addEventListener('load', newPalette)
colorContainer.addEventListener('click', function(event) {
  toggleLockIcon(event)
})
newPaletteButton.addEventListener('click', lockColors)
savedPaletteButton.addEventListener('click', savePalette)
accordionButton.addEventListener('click', displaySavedPaletteWindow);
closeSavedPaletteWindowButton.addEventListener('click', closeSavedPaletteWindow)
savePaletteSection.addEventListener('click', deleteSavedPalette)

// Global array
var savedPalettes = [];

function newPalette() {
  palette = new Palette();
  displayRandomColor();
}

function getRandomHexCode() {
  var randHex = ""
  var string = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
  for (var i = 0; i <= 5; i++) {
   randHex += string[Math.floor(Math.random() * 16)];
  }
  return `#${randHex}`
}

function displayRandomColor() {
  for (var i = 0; i < hexBox.length; i++) {
    var color = getRandomHexCode()
    hexBox[i].style.backgroundColor = color
    hexValues[i].innerText = color
    palette.generateColor(color)
  }
}

function lockColors() {
  for (var i = 0; i < palette.colors.length; i++) {
    if (!palette.colors[i].locked) {
      palette.colors[i] = new Color(getRandomHexCode())
      }
    }
    for (var i = 0; i < palette.colors.length; i++) {
        hexBox[i].style.backgroundColor = palette.colors[i].hexCode
        hexValues[i].innerText = palette.colors[i].hexCode
  }
}

function savePalette() {
    savedPalettes.push(palette)
    displaySavedPalettes()
    newPalette()
}

function displaySavedPalettes() {
    savePaletteSection.innerHTML = ""
    for (var i = 0; i < savedPalettes.length; i++) {
      var newPaletteElement = document.createElement('figure')
      newPaletteElement.classList.add('palettes-container')
      for (var j = 0; j < savedPalettes[i].colors.length; j++) {
        newPaletteElement.innerHTML += `<div class="hex-boxes" style="background-color: ${savedPalettes[i].colors[j].hexCode};height:25px;width:25px"></div>`
      }
      newPaletteElement.innerHTML += `<img class="hex-boxes" id=${i} style="height:25px;width:25px" src="./assets/bin.svg">`
      savePaletteSection.appendChild(newPaletteElement)
    }
  }

function displaySavedPaletteWindow() {
    savedPaletteWindow.classList.remove('hidden');
}

function closeSavedPaletteWindow() {
    savedPaletteWindow.classList.add('hidden');
}

function toggleLockIcon(event) {
  var hexId = event.target.id
  for (var i = 1; i <= unlockImages.length; i++) {
    if (hexId === `unlockIcon${i}` && !palette.colors[(i - 1)].locked) {
      palette.colors[(i - 1)].locked = true
      unlockImages[(i - 1)].src = './assets/lock-screen.svg'
    } else if (hexId === `unlockIcon${i}` && palette.colors[(i - 1)].locked) {
      palette.colors[(i - 1)].locked = false
      unlockImages[(i - 1)].src = './assets/unlock.svg'
    }
  }
}

function deleteSavedPalette(event) {
  var id = event.target.id
  savedPalettes.splice(id, 1)
  displaySavedPalettes()
}
