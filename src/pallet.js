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
