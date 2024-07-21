let myDate =   new Date(2024, 3, 3)
console.log(myDate.toLocaleString() );

let nowtime = Date.now()
console.log(nowtime);
console.log(myDate.getTime());


let newdate = new Date("2-22-2024");
console.log(newdate.getUTCFullYear());
console.log(newdate.getUTCMonth()+1);
console.log(newdate.getDay());
console.log(newdate.getDate());
