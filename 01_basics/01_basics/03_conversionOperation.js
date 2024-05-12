let scope = "akbar"

// console.log(typeof scope);
// console.log(typeof (scope));

let valueInNumber = Number(scope); // converting in number
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1; talse => 0

let LoggedIn = "Akbar"
let booleanIsLoggedIn = Boolean(LoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true; // 0 => false
// "" => false; // "Akbar" => true

let someNumber = 700
let stringNumber = String(someNumber)
// console.log(typeof stringNumber);

//***************************operation**********************************

let value = 44
let negValue = -value
// console.log(negValue); 

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 ** 3);
// console.log(2 / 2);
// console.log(4 % 2);

let str1 = "hello"
let str2 = " Akbar"
let str3 = str1 + str2
// console.log(str3); 

// console.log("2" + 6);
// console.log(8 + "6");
// console.log("8" + 8 + 8);
// console.log(8 + 2 + "8");

// console.log((2+2) * 2 % 3);

console.log(+true);
console.log(+"");

let num1, num2, num3
num1 = num2 = num3 = 2 + 2
// let num4 = (num1, num2, num3)
// console.log(num4);

let gameCounter = 100
++gameCounter; // precedence  : prefix increment , postfix increment
console.log(gameCounter);