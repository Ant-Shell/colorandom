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
var colorsContainer = document.querySelector(".colors-container")

var buttonArray = []


//EventListeners
window.addEventListener('load', randomColor)

colorsContainer.addEventListener('click', function(event) {
  toggleLockIcons(event)
})


function hide() {
  icon1.classList.toggle("hidden")
  lockedicon1.classList.toggle("hidden")
}

function show() {
  icon1.classList.toggle("hidden")
  lockedicon1.classList.toggle("hidden")
}

function toggleLockIcons(event) {
  if (event.target.id === "unlockIcon1") {
    hide()
  }  else if (event.target.id === "lockedIcon1") {
    show()
  }
 //  } else if () {
 // return;
 //  } else if {
 //    return;
 //  } else if () {
 //    return;
 //  } else if () {
 //    return;
 //  } else () {
 //    return;
 //  }
}

// function displayButtonLocks() {
//   var buttonLocks = document.querySelectorAll(".image-button");
//   for (var i = 0; i < buttonLocks.length; i++) {
//     buttonLocks[i].addEventListener("click", function() {
//       toggleLockIcons(event)
//     })
//   };
//   console.log(buttonLocks)
// };

var palette = new Palette()
var color = new Color()

function randomColor() {
  // displayButtonLocks()
  for (var i = 0; i < hexBox.length; i++) {
    var color = getRandomColor()
    hexBox[i].style.backgroundColor = color
    hexValues[i].innerText = color
    palette.generateColor(color)
  }
}

// function toggleLockIcons(event) {
//   console.log(event.target)
//   // for (var i = 0; i < unlockImages.length; i++) {
//   // color.toggle()
//   if (event.target.src === './assets/unlock.svg') {
//     event.target.closest('img').classList.remove("hidden")
//     event.target.classList.toggle("hidden")
//   } else {
//     event.target.classList.remove("hidden")
//     // event.target.src = './assets/lock-screen.svg'
//     // toggleUnlockIcons()
//   }
// }

function toggleUnlockIcons() {
  for (var i = 0; i < lockedImages.length; i++) {
    color.toggle()
    if (color.locked) {
      lockedImages[i].classList.add("hidden")
      unlockImages[i].classList.remove("hidden")
    }
  }
}






//we know there are 5 locks
//we have to lock them independently
//if we click on one lock it will change to a locked icon
//if the icon is locked, the color should not change
//if the icon is locked, the user can unlock it
