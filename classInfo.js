class Human {
  constructor (firstName, lastName, age, language) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.language = language
  }

  printInfo() {
    console.log(`first name: ${this.firstName}`)
    console.log(`last name: ${this.lastName}`)
    console.log(`age: ${this.age}`)
    console.log('language:')
    this.language.forEach((elem) => {
      console.log(`\t${elem}`)
    })
    console.log('\n')
  }

  canVote() {
    let maj = 18
    return (this.age >= maj ? true : false)
  }

  mostSkilledDev (person) {
    if (this.language.length > person.language.length) {
      return (this.firstName)
    } else if (this.language.length < person.language.length) {
      return (person.firstName)
    } else {
      return ('draw')
    }
  }
}

exports.Human = Human