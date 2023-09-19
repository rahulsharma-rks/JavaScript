const developerInfo ={
    fname : 'Kevin',
    lname: 'Stark',
    age : 25,
    location: 'Denmark',
    skills: ['HTML','CSS','JavaScript','Python', 'Java'],

    getFullName: function() {
        return `${this.fname} ${this.lname}`
    }
}

console.log(developerInfo.getFullName())
console.log('------------------------------------')

//An object is a mutable data structure and we can modify the content of an object after it gets created.
const person = {
    fName: 'Martha',
    lName: 'Stuart',
    age: 25,
    country: 'USA',
    skills: [
      'HTML',
      'JavaScript',
      'React',
      'Node',
      'MongoDB',
      'Python',
    ],
    getfullName: function() {
      return `${this.fName} ${this.lName}`
    }
  }
  person.nationality = 'American'
  person.country = 'USA'
  person.title = 'Professor'
  person.skills.push('IaaC')
  person.skills.push('SasS')
  person.isMarried = true
  
  person.getPersonInfo = function() {
    let skillsWithoutLastSkill = this.skills
      .splice(0, this.skills.length - 1)
      .join(', ')
    let lastSkill = this.skills.splice(this.skills.length - 1)[0]
  
    let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
    let fullName = this.getfullName()
    let statement = `${fullName} is a ${this.title}.\nShe lives in ${this.country}.\nShe teaches ${skills}.`
    return statement
  }
  console.log(person)
  console.log(person.getPersonInfo())

console.log('------------------------------------')

