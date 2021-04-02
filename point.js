class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  show() {
    console.log(`(${this.x}, ${this.y})`)
  }
  isEqual(point) {
    return this.x === point.x && this.y === point.y ? true : false
  }
  distance(nb) {
    let a = Math.pow(this.x - nb.x, 2)
    let b = Math.pow(this.y - nb.y, 2)
    let c = Math.sqrt(a + b).toFixed(2)
      return c
  }
}

exports.Point = Point