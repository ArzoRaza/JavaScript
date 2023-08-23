// primitive:- (7 types): String, Number, Boolean, null, undefined, Symbol, BigInt

// string 
let = "sanjana"
let = "munajie"

// number
const scorevalue = 100.8


 
// boolean
const isLoggedIn = false 
const outSideTemp = true

// undefined 
let userEmail;

// symbol
const id = Symbol ('123') 
const anotherId = Symbol ('123') 
// console.log(id === anotherId);

// bigInt
const bigNumber = 98797979798798797988878788n 


// Reference (Non Primitive):- 
// Array, Objects, Functions

// array
const heros = ["shaktiman, naagraj, doga"]

// object
let myObj = {name: "Akbar", age: 19,}

// function
// const myFunction = function(){
//     console.log("hello world");
// }

//***********************DATATYPES****************************//

// console.log(typeof scorevalue);  // Number
// console.log(typeof isLoggedIn);  // boolean
// console.log(typeof outSideTemp); // object
// console.log(typeof userEmail);   // undefined
// console.log(typeof id);          // symbol
// console.log(typeof bigNumber);   // bigint
// console.log(typeof heros);       // object
// console.log(typeof myObj);       // object
// console.log(typeof myFunction);  // function


// ************************************       Stack     Heap    ************************************


// Stack (primitive) memory

// Heap (Non primitive) memory


let userOne = {
    email: "tuktuk@gmail.com",
    upi:  "akbar@ybl"
}

let userTwo = userOne 

userTwo.email = "tungtung@gmil.com"

console.log(userOne);
console.log(userTwo);