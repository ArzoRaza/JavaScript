// we have two ways to define objects :- (i) lileral (ii) singleton: we use constructors  
//  Object.create:- singleton  

// object literals 

const mySym = Symbol("key1")

const JsUser = {
    name: "Akbar", 
    "full name": "Md Akbar Ali",
    [mySym]: "mykey1" ,
    age: 18 , 
    location : "punjab", 
    email: "alimdakbar241@google.com",
    isLoggedIn: true,
    lastLoginDays : ["saturday", "sunday"]   
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser [mySym]);

JsUser.email = "e019160@gmail.cim"
// Object.freeze(JsUser)
JsUser.email = "kukuapp@jjlad.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`hello JS user,${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());