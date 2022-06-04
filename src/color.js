class Color {
  constructor(randNum) {
    this.hexCode = randNum
    this.locked = false
  }
  toggle() {
    if (!this.locked) {
      this.locked = true
    } else
      this.locked = false
  }
}
//   constructor(hexcode) {
//     this.src = "./assets/unlock.svg"
//     this.locked = false;
//     //this.hexCodeArray = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']
//     this.hexCode = hexcode
//   }
//   generatePalette() {
//     var hexCodeArray = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']
//     var hexCode = "#"
//
//     for (var i = 0; hexCodeArray.length < 6; i++) {
//       hexCode += hexCodeArray[Math.floor(Math.random() * hexCodeArray.length).toString(16)];
//       return hexCode
//     }
//   }
// }

//hexCode += hexCodeArray[Math.floor(Math.random() * hexCodeArray.length).toString(16))];
//[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']
//'0123456789ABCDEF'
// toggle() {
//   if (!this.lock) {
//     this.lock = true
//     this.src = "./assets/lock-screen.svg"
//   }
//   else if (this.lock) {
//     this.lock = false
//     this.src = "./assets/unlock.svg"
//   }
// }

// var hexCodeArray = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']
// var hexCode = "#"
// var hexCode = `#${output}`

// function getRandomColor(hexCodeArray) {
//   return Math.floor(Math.random(hexCodeArray) * hexCodeArray.length);

//     for (var i = 0; hexCodeArray.length < 6; i++) {
//       var hexCode = Math.floor(Math.random(hexCodeArray) * hexCodeArray.length).toString(16);
//       return hexCode
//     }
//   }
// }
// var hexCodeArray = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']
// var hexCode = "#"

// function getRandomColor(hexCodeArray) {
//   return Math.floor(Math.random(hexCodeArray) * hexCodeArray.length);
// }
//a code hex starts with a pound sign
//and it has 6 characters (letters and numbers)
//iterate over 6 characters
