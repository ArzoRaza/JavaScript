const myNums = [1, 2, 3, 4]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval }`);
//     return acc + currval 
// }, 0 ) 

const myTotal = myNums.reduce( (acc, curr) =>acc+curr, )
// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course", 
        price: 3000
    },
    {
        itemName: "py course", 
        price: 999
    },
    {
        itemName: "js course", 
        price: 2999
    },
    {
        itemName: "js course", 
        price: 3999
    }

]

const priceyToPay  =  shoppingCart.reduce( (acc, item) => acc + item. price, 0 )
console.log(myTotal);