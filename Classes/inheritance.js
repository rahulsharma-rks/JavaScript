/*
Using inheritance we can access all the properties and the methods of the parent class. This reduces repetition of code. 
If you remember, we have a Person parent class and we will create children from it. Our children class could be student, 
teach etc.


// syntax
class ChildClassName extends {
 // code goes here
}
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
console.log(person1)

class employee extends Person{
    
    emp(){
        console.log("Employee -> Person")
    }
}

const emp1 = new employee('Tony','Stark',25,'New York','M')
console.log(emp1.emp)
console.log(emp1)
console.log(emp1.fullName)
console.log(emp1.skills)