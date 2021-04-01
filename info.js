const alice = {
  firstName: 'Alice',
  lastName: 'Liddell',
  age: 28,
  language : ['JS', 'CSS', 'Python', 'C', 'C++', 'Solidity'] 
}

const bob = {
  firstName: 'Bob',
  lastName: 'Lemon',
  age: 30,
  language : ['C++']
}

const charlie = {
  firstName: 'Charlie',
  lastName: 'Charlot',
  age: 8,
  language : ['Solidity']
}

const printInfo = (person) => {
  console.log(`first name: ${person.firstName}`)
  console.log(`last name: ${person.lastName}`)
  console.log(`age: ${person.age}`)
  console.log(`language:`)
  person.language.forEach((elem) => {
    console.log(`\t${elem}`)
  })
  console.log('\n')
}
/*
printInfo(alice)
printInfo(bob)
printInfo(charlie)
*/
const canVote = (person) => {
  let maj = 18
  return (person.age >= maj ? true : false)
}
/*
console.log(canVote(alice))
console.log(canVote(bob))
console.log(canVote(charlie))
*/
const mostSkilledDev = (person, person2) => {
  if (person.language.length > person2.language.length) {
    return (person.firstName)
  } else if (person.language.length < person2.language.length) {
    return (person2.firstName)
  } else {
    return ('draw')
  }
}
/*
console.log(mostSkilledDev(bob, alice))
console.log(mostSkilledDev(alice, bob))
console.log(mostSkilledDev(bob, charlie))
*/