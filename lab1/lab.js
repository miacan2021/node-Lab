import { mySum } from "./sum.js"


const myArr = [1, 4, 5, 8, 2]
const result = mySum(...myArr)
console.log(result)

const average = () => {
    let mySecoundArr = myArr.map((num) => num * 2)
    mySecoundArr.sort((a,b) => a-b)
    mySecoundArr = mySecoundArr.slice(mySecoundArr.length / 2)
    console.log(mySecoundArr)
}

average()

setTimeout(() => {
    console.log('Goodbye!')
}, 3000)

const Employee = {
    name:'test',
    email:'test',
    department:'test',
    startDate:'test'
}
const Person = Object.assign({}, Employee);
delete Person.department
delete Person.startDate

console.log(Employee, Person)
