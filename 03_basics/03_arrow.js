const user = {
    username: "Akbar",
    price: "999", 

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "arzo"
// user.welcomeMessage()

// console.log(this);  // in browse have window onject 

// function chai(){
//     let username ="Akbar"
//     console.log(this.username);
// }

// chai()

// const chai = function(){     // undefined 
//     let username = "Akbar"
//     console.log(this.username);
// }
// chai()

// const chai = () => {
//     let username = "Akbar"
//     console.log(this);
// }
// chai ()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + 

// const addTwo = (num1, num2) =>  (num1 + num2)

const addTwo = (num1, num2) => ({username: "Akbar"})

console.log(addTwo(3, 4));

// const myArray = [3, 5, 2, 55, 32]
// myArray.forEach()