// Arithmetic operators

// 5+5
// 5*3
// 9-5
// 10/2
//2**3
//10%3    1

const numberOne = "2"
const numberTwo = "3"
const numberThree = numberOne + numberTwo
console.log(numberThree)

const firstString = "Hello"
const secondString = "World"
const finalString = firstString + secondString
console.log(finalString)

console.log(finalString * 4)
//console.log("Hello" * 2)      Nan

let valueOne = 3
//valueOne++  // valueOne = valueOne + 1 : 
let res = valueOne++  // post increment : first assignment then increment
console.log(valueOne)
console.log(res)

let valueTwo = 3
//++valueTwo    // pre increment
let resOne = ++valueTwo  // first increment then assignment
//console.log(valueTwo)
console.log(resOne)


// assignment operators
let valueX = 4
valueX+=10
valueX-=10
valueX*=10

//comparison operator
let aw = 2
let awSk = 2
console.log(aw==awSk)

let awa = 2
let awaSk = "2"
console.log(awa==awaSk) // checking value only

console.log(awa===awaSk) //checking values as well as data type

console.log(aw != awSk)

