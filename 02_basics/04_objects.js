// const tenderUser = new Object()
const tenderUser = {}


tenderUser.id = "1234akbar"
tenderUser.name = "arzo_raza"
tenderUser.isLoggedIn = false 

// console.log(tenderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullName: {
            firstname: "arzo",
            lastname: "raza"
        }
    }
}

// console.log(regularUser.fullname.userFullName.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign( obj1, obj2, obj4)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "map@mail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    }
]

users [1].email
// console.log(tenderUser);

// console.log(Object.keys(tenderUser));
// console.log(Object.values(tenderUser));

// console.log(tenderUser.hasOwnProperty('isLoggedIn'));



// const course = {
//     coursename: "js in hindi",
//     price: "999",
//     courseInstructor: "hitesh"
// }

// course.courseInstructor 

const {courseInstructor: instructor} = course
console.log(instructor);

// {
//     name: "akbar",
//     course: "javascript in hindi",
//     price : "1000"
    
// }


[
    {},
    {},
    {}
]