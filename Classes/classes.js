/*
JavaScript is an object oriented programming language. Everything in JavScript is an object, with its properties and 
methods. We create class to create an object. A Class is like an object constructor, or a "blueprint" for creating 
objects. We instantiate a class to create an object. The class defines attributes and the behavior of the object, 
while the object, on the other hand, represents the class.

// syntax
class ClassName {
    //  code goes here
}

Methods are JavaScript functions inside the class.

*/


class Person{
    constructor(firstName, lastName, age, location, sex){
        console.log(this)
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.location = location
        this.sex = sex
        this.score = 0
        this.skills = []
    }
    //Method
    get fullName(){
        const fullName = this.firstName + ' ' +this.lastName
        return fullName
    }
    //The get method allow us to access value from the object.
    get getScore(){
        return this.getScore
    } 
    
    get getSkill(){
        return this.skills
    }
    //The setter method allow us to modify the value of certain properties.
    set setScore(score){
        this.score += score
    }
    set setskill(skill){
        this.skills.push(skill)
    }

}
const person = new Person()
console.log(person)

const person1 = new Person('Mark', 'Scott', 20, 'USA', 'M')
person1.setScore = 10
person1.setskill = 'HTML'
person1.setskill = 'TailWind'
person1.setskill = 'JS'
console.log(person1.fullName)
console.log(person1)
console.log(person1.score)
console.log(person1.skills)