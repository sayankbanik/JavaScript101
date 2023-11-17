// Primitive (STACK)
/*
String
Number (include both whole and decimal numbers)
Boolean
Null
Undefined
Symbol (unique)
BigInt
*/
const firstName = "Sayan"
const lastName = "Kansabanik"
let age = 24
let score = 95.64
let isLoggedIn = true
const nodeVersion = null
let bankBalance = undefined
const buttonId = Symbol("id")
const aReallyLongNumber = 90071648442n

console.log(2+2)
console.log(2+"2")


// Reference (Non-primitive) - Objects (HEAP)
/*
Arrays
Objects
Functions

only declarations
*/

const numbers = [1,2,6,8,4]
const heroes = ["batman","Ironman","Superman"]
const mixture = ["string",123,true,236.369,undefined,null]

const userObject={
    name : "Sayan",
    age : 20,
    isLoggedIn : true
}

//functions
const sayHello = function(){
    console.log("Hello")
}

const loginUser = function(){
const registerUser = function(){}
}