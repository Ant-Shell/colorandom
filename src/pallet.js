function getRandomColor() {
  var randNum = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randNum}`
}

class Palette {
  constructor() {
    this.id = Date.now();
    this.colors = [];
  }
  generateColor(color) {
    var newColor = new Color(color);
    this.colors.push(newColor)
  }
}
