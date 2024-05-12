
function sayMyName() {
    console.log("A");
    console.log("K");
    console.log("B");
    console.log("A");
    console.log("R");
}

// sayMyName()

// function addTwoNumber (number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumber (number1, number2){
    // let result = number1 + number2 
    // return result 
    return number1 + number2

}

const result = addTwoNumber(4, 9)

// console.log("result", result);

function loginUserMessage(username = "sam" ){
    if (!username){
        console.log("Please Enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Akbar"))
// console.log(loginUserMessage());

function calculateCartPrice (val1, val2, val3, val4,  ...num1){
    return num1
}
// console.log(calculateCartPrice(200, 500, 100, 600, 8000));

// const user = {
//     username: "Akbar", 
//     prics: 199
// }
function handleObject (oneobject){
    console.log(`Username is ${oneobject.username} and prics is ${oneobject.price}`);
}
// handleObject(user)
handleObject({
    username: "sam", 
    price: 7000
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[2]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 600]));