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
    let a = Math.pow(nb.x - this.x)
    let b = Math.pow(nb.y - this.y)
    let c = Math.sqrt(a + b)
    const d = Number(c)
      return d
  }
}

exports.show = this.show
exports.isEqual = this.isEqual
exports.distance = this.distance
//l'export/import n'a pas l'air de marché

/*
const p1 = new Point(1, 10)
const p2 = new Point(10, 11)

p1.show()
p2.show()
console.log(p1.isEqual(p2))
console.log(p1.distance(p2))
*/