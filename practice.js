// let score = 5; 
function one() {
    let score = 0 
    console.log(score);
}
function two() {
    let score =8
    console.log(score)
}

// one()
// two()
// console.log(score);

function outerFucn(){
    let outerVar = "I'm at scope level one"
    function innerFunc(){
        let innerVal = "I'm at scope level two"
        console.log(outerVar); 
    }
    console.log(innerVal);
    innerFunc()
}

// outerFucn()

// now intresting things exprole like: inner values explore. 

const myGlobleValue = 0;

function func(){
    let value1 = 1; 
    console.log(myGlobleValue,);

    function innerOfFunc(){
        let value2 = 2;
        console.log(value1, myGlobleValue, );

        function innerOfThirth(){
            let value3 = 3;
            console.log(value2, value1, myGlobleValue);

            function innerOFInnerFunc(){
                console.log(value3, value2, value1, myGlobleValue);
            }
            innerOFInnerFunc()
        }
        innerOfThirth()
    }
    innerOfFunc()
}
// func()

// closure *******************************  Closure *************************

function superFunc(){
    const testValue = "I am Akbar"
    function test2Value() {
        console.log(testValue);
    }
    test2Value()
}
// superFunc()


// practice with your self  

function nagma(){
    const intro = "name-nagma, home-noida"
    function arzo(){
        console.log(intro);
    }
    arzo()
}
nagma()

// new  try 

const erroMessage = "file not found"

setTimeout(function callback(){
    console.log(erroMessage);
}, 1000)

let pageCount = 0

const items = [1, 2, 3, 4,  5, 6, 7]

items.forEach(function iterator(num) {
    pageCount++
    console.log(num);
})

console.log("page Count", pageCount);