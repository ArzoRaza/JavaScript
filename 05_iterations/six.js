// const coding = ['js', 'py', 'cpp', 'ruby', 'java', 'c', 'c#', ]

// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item
// } )

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNumbs = myNums.filter ( (num) => {
//     return num > 4
// })

const newNums = []
myNums.forEach( (num) => {
    if (num > 4){
        newNums.push(num)
    }
} )
console.log(newNums)

console.log(newNums);