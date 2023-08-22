// for-in-loop

// const myObject = {   // iterations 
//     js: 'javascript',
//     cpp: 'c++', 
//     rb: 'ruby'
// }

// for (const key in myObject) { // this is only for keys 
//     console.log(key);
// }

for (const key in myObject) {   // this is for a value and key boths  
    // console.log(myObject[key]);
}

for (const key in myObject) {   // thsi is new
    // console.log(`${key} shortcut is for ${myObject[key]}` );
}


const programming = ['js', 'rb', 'py', 'java']

for (const key in programming) {
    console.log(programming[key]);
}