// const isUserLoggedIn = true
// const temperature = 52
// if (temperature < 50){
//     console.log("less than 50");
// }else console.log("temperature is greater than 50");

// <, >, <=, >=, ==, !=, ===, !==

// const score = 300 

// if (score > 100) {
//     const power = "fly"
//     console.log(`user power: ${power}`);
// }
// console.log(`User power: ${power}`);

// const balance = 1000

// // if (balance > 500 ) console.log("test"), console.log("test"); don't do like this 

// if (balance < 20) {
//     console.log("More than 1444");
// }else if (balance > 900){
//     console.log("less than 900")
// }else if (balance > 750) {
//     console.log("less than 750 ")
// }else {
//     console.log("less than 1004");
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromEmail = false
const loggedInFromGoogle = false

// and operation requred boths condition true 
if (userLoggedIn && debitCard ){
    // console.log("allow to buys course");
}

// or operation means requred one condition true 
if (loggedInFromEmail || loggedInFromGoogle){
    console.log("user logged in");
}else {
    console.log("please logged in your account");
}