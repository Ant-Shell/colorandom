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
document.addEventListener('click', function(event) {
  // console.log(event.target)

})
window.addEventListener('load', newPalette)
colorContainer.addEventListener('click', function(event) {
  lockColor(event)
})
newPaletteButton.addEventListener('click', newPalette)
savedPaletteButton.addEventListener('click', savePalette)
accordionButton.addEventListener('click', displaySavedPaletteWindow);
closeSavedPaletteWindowButton.addEventListener('click', closeSavedPaletteWindow)
savePaletteSection.addEventListener('click', deleteSavedPalette)


var palette;
var savedPalettes = [];

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
      unlockImages[(i - 1)].src = './assets/lock-screen.svg'
    } else if (hexId === `unlockIcon${i}` && palette.colors[(i - 1)].locked) {
      palette.colors[(i - 1)].locked = false
      unlockImages[(i - 1)].src = './assets/unlock.svg'
    }
  }
}

function savePalette() {
  savedPalettes.push(palette)
  displaySavedPalettes()
}

function deleteSavedPalette(event) {
  var id = event.target.id
  savedPalettes.splice(id, 1)
  displaySavedPalettes()
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

// newPaletteElement.innerHTML =
// `<div class="hex-boxes" style="background-color: ${savedPalettes[i].colors[0].hexCode};height:25px;width:25px"></div>
// //   <div class="hex-boxes" style="background-color: ${savedPalettes[i].colors[1].hexCode};height:25px;width:25px"></div>
//   <div class="hex-boxes" style="background-color: ${savedPalettes[i].colors[2].hexCode};height:25px;width:25px"></div>
//   <div class="hex-boxes" style="background-color: ${savedPalettes[i].colors[3].hexCode};height:25px;width:25px"></div>
//   <div class="hex-boxes" style="background-color: ${savedPalettes[i].colors[4].hexCode};height:25px;width:25px"></div>
//   <img class="hex-boxes" id=${i} style="height:25px;width:25px" src="./assets/bin.svg">`

function displaySavedPaletteWindow() {
  savedPaletteWindow.classList.remove('hidden');
}

function closeSavedPaletteWindow() {
  savedPaletteWindow.classList.add('hidden');
}
