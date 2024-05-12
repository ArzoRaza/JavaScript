const my_heros = ["ironman", "hulk", "batman", "spiderman"]
const dc_heros = ["batman", "flash", "superman"]

// my_heros.push(dc_heros)

// console.log(my_heros);
// console.log(my_heros[4][2]);

// let all_herso = my_heros.concat(dc_heros)  // concat operator
// console.log(all_herso);

// const all_new_heros = [...my_heros, ...dc_heros]   // spread operator 
// console.log(all_new_heros);

// const another_array = [1, 2, 3, 4, 5, 6, [7, 8], [9, 10, 1], [12, 13, 14, [15, 16]]]
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array)

console.log(Array.isArray("Akbar"));
console.log(Array.from("Akbar"));
console.log(Array.from({name: "akbar"})); // Interesting for interview

let score = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score, score2, score3));
