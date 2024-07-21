const fruits = ["BlueBerry", "Guava", "Orange", "Cherry", "PineApple"];
// fruits.toString(); 

// *******************    Concat:- used to add two or more array 
// const food = ["Biryani", "Rise", "Burger", "Pizza"];
// const results = fruits.concat(food);
// console.log(results);


// console.log(typeof(fruits));

// ********************    lexical Environment 
function parents() {
    var chips = "5packet";
    function child() {
        var iceCream = "1pics";
        console.log(chips);
    }
    child()
    
    console.log(chips);
}
parents()

