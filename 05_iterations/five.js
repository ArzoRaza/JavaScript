// for-each-loop 

const coding = ['js', 'py', 'cpp', 'ruby', 'java', 'c', 'c#', ]

// coding.forEach( function  (student) {
//     console.log(student);
// })

// coding.forEach ( (item) => {
//     console.log(item);
// })

// function printMe(item ){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr)

// })


const myCoding = [
    {
        languageNama: "javascrip", 
        languageFile: "js"
    },
    {
        languageNama: "java", 
        languageFile: "javaaaa"
    },
    {
        languageNama: 'python', 
        languageFile: 'py'
    },
]

myCoding.forEach ( (item) => {
    console.log(item.languageFile);
})