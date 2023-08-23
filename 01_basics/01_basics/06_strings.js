const name = "arzo"
const repoCount = 4 
// console.log(name + repoCount + " value");

// console.log(`hello my name is ${name.toUpperCase()} and my rapo count is ${repoCount}`);

const gameName = new String ('BARNAG')

let tuk = gameName 
tuk = "JAVAscri-python-c++" 

console.log(tuk[0]);
console.log(tuk.__proto__);

console.log(tuk.length);
console.log(tuk.toUpperCase());
console.log(tuk.charAt(6));
console.log(tuk.indexOf('c'));

const newTuk = tuk.substring(5, 10)
console.log(newTuk);

const tukOne = tuk.slice (-8, 4)
console.log(tukOne);

const tukTwo ="    akbar    "
console.log(tukTwo);
console.log(tukTwo.trim());

const url = "https://akbat.com/akbar%50ali"
console.log(url.replace('%50', '_'));

console.log(url.includes ('alia'));

console.log(tuk.split('-'))