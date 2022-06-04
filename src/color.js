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
