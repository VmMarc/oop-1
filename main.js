const { Human } = require('./classInfo')
const { Point } = require('./point')

const alice = new Human ('Alice', 'Liddell', 28, ['JS', 'CSS', 'Python', 'C', 'C++', 'Solidity'])
const bob = new Human ('Bob', 'lemon', 30, ['C++'])
const charlie = new Human ('Charlie', 'Charlot', 8, ['Solidity'])

const p1 = new Point(1, 2)
const p2 = new Point(10, 11)

alice.printInfo()
bob.printInfo()
charlie.printInfo()

console.log(alice.canVote())
console.log(bob.canVote())
console.log(charlie.canVote())

console.log(bob.mostSkilledDev(alice))
console.log(alice.mostSkilledDev(bob))
console.log(bob.mostSkilledDev(charlie))

p1.show()
p2.show()
console.log(p1.isEqual(p2))
console.log(p1.distance(p2))