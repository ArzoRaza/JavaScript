// Date 

let myDate = new Date ()
// console.log(myDate.toLocaleDateString());    // 12/8/2023
// console.log(myDate.toISOString());           // 2023-08-12T17:35:11.253Z
// console.log(myDate.toUTCString());           // Sat, 12 Aug 2023 17:35:53 GMT
// console.log(myDate.toDateString());          // Sat Aug 12 2023
// console.log(myDate.toJSON());                // 2023-08-12T17:37:41.007
// console.log(myDate.toLocaleString());        // 12/8/2023, 11:08:33 pm
// console.log(myDate.toLocaleTimeString());    // 11:09:10 pm
// console.log(myDate.toString());              // Sat Aug 12 2023 23:10:36 GMT+0530 (India Standard Time)
// console.log(myDate.toTimeString());          // 23:10:36 GMT+0530 (India Standard Time)
// console.log(myDate.getTimezoneOffset());     // -330

// console.log(typeof myDate);                     // object 


// let myCreatedDate = new Date (2023, 1, 20)
// let myCreatedDate = new Date (2023, 1, 20, 21, 81)
// let myCreatedDate = new Date ("2023-02-22")
let myCreatedDate = new Date ("11-30-2023")
// console.log(myCreatedDate.toLocaleString());

let meTimeStamp = Date.now()

// console.log(meTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log((Date.now()/1000));
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay() + 1);

`${newDate.getDay()} the time is ....`

newDate.toLocaleString('default'{
    weekday: "long"
})