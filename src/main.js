//QuerySelectors
var box1 = document.getElementById('box1')
var box2 = document.getElementById('box2')
var box3 = document.getElementById('box3')
var box4 = document.getElementById('box4')
var box5 = document.getElementById('box5')

var icon1 = document.getElementById('unlockIcon1')
var icon2 = document.getElementById('unlockIcon2')
var icon3 = document.getElementById('unlockIcon3')
var icon4 = document.getElementById('unlockIcon4')
var icon5 = document.getElementById('unlockIcon5')

var lockedicon1 = document.getElementById('lockedIcon1')
var lockedicon2 = document.getElementById('lockedIcon2')
var lockedicon3 = document.getElementById('lockedIcon3')
var lockedicon4 = document.getElementById('lockedIcon4')
var lockedicon5 = document.getElementById('lockedIcon5')

var hexBox = document.querySelectorAll('.hex-boxes')
var hexValues = document.querySelectorAll('.hex-values')
var unlockImages = document.querySelectorAll('.image-button')
var lockedImages = document.querySelectorAll('.locked-image-button')

//EventListeners
window.addEventListener('load', randomColor)
// icon1.addEventListener('click', toggleLockIcons)
// icon2.addEventListener('click', toggleLockIcons)
// icon3.addEventListener('click', toggleLockIcons)
// icon4.addEventListener('click', toggleLockIcons)
// icon5.addEventListener('click', toggleLockIcons)

function displayButtonLocks() {
  var buttonLocks = document.querySelectorAll(".image-button");
  for (var i = 0; i < buttonLocks.length; i++) {
    buttonLocks[i].addEventListener("click", function() {
      toggleLockIcons(event)
    })
  };
  console.log(buttonLocks)
};

var palette = new Palette()
var color = new Color()

function randomColor() {
  displayButtonLocks()
  for (var i = 0; i < hexBox.length; i++) {
    var color = getRandomColor()
    hexBox[i].style.backgroundColor = color
    hexValues[i].innerText = color
    palette.generateColor(color)
  }
}

function toggleLockIcons(event) {
  console.log(event.target)
  for (var i = 0; i < unlockImages.length; i++) {
    color.toggle()
    if (color.locked) {
      unlockImages[i].classList.add("hidden")
    } else {
      lockedImages[i].classList.remove("hidden")
    }
  }
}



//we know there are 5 locks
//we have to lock them independently
//if we click on one lock it will change to a locked icon
//if the icon is locked, the color should not change
//if the icon is locked, the user can unlock it