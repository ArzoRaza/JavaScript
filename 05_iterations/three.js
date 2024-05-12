// for of 

// ["", "", "", ""]  arrays
// [{}, {}, {}, {}] objects 

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world"
for (const greet of greetings) {
    if (greet ==" ") {
        // console.log(`detected space`);  //continue loops here 
        continue
    }
    // console.log(`Each char is: ${greet}`);
}

// Maps 
// maps is unique 

const map = new Map()
map.set('IN', "india")
map.set('USA', "United State of America")
map.set('FR', "France")

// console.log(map);

// for (const keys of map) { // this is a first ways
//     console.log(keys);
// }

for (const [key, value] of map) { // this is a second ways 
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}


for (const [key, value] of map) { // this is a second ways 
    // console.log(key, ':-', value);
}


