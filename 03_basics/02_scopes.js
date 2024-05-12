// globle scopes 

// var c = 50 
let a = 100 

if (true){ // block scopes
    let a = 10
    const b = 15
    var c = 50 
    // console.log("andar ka: ", a)
}

// console.log("bahar ka: ", a);
// console.log(b);
// console.log(c);

function one (){
    const username = "Akbar"

    function two (){
        const secondname = "arzo"
        // console.log(username);
    }
// console.log(secondname);
two()

}
one()

if (true) {
    const username = "Akbarali"
    if (username === "Akbarali") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);   // not able to access to website because of it's a block level.
}
// console.log(username);  // similer to above 

// ++++++++++++++++++++++++++++++  intresting  +++++++++++++++++++++++

function addOne (num){
    return num + 1 
}
// console.log(addOne(5))

addTwo(5)
const addTwo = function(num){   // in JavaScript variable have capibily to store anything 
    return num + 2
}