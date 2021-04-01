
const { show, isEqual, distance } = require('./point')
const p1 = new Point(1, 10)
const p2 = new Point(10, 11)

p1.show()
p2.show()
console.log(p1.isEqual(p2))
console.log(p1.distance(p2))
//NaN

