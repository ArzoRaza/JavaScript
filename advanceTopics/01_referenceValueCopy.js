/*we have two types of data types first one called Primitive and second called Reference: [], (), {}. 
When we copy Primitive data there are nothing happend about Reference Value but when we use breaces data type their are come reference topics. So let understand in detail about how to copy Reference value */

const fruits = ["Apple", "BlueBerry", "PineApple", "Cherry", "Guava"];

const breckFast = [...fruits];

breckFast.pop();



console.log(breckFast);
console.log(fruits);