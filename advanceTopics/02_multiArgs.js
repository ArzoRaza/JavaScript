// ******************   unlimited Argument accept code with spread operatos
/*
function multiArgs(...args) {
    let ans = 0;
    for(let i = 0; i < args.length; i++){
        ans = ans + args[i];
    }
    return ans;
}
let result = multiArgs(10, 20, 30, 80)
console.log(result);

// *******************  let see other way to take unlimited argument accept
function multiArgs() {
    let ans = 0; 
    for(let i = 0; i < arguments.length; ++i){
        ans = ans + arguments[i];
    }
    return ans; 

}
let results = multiArgs(10, 20, 30, 40, 50, 60, 70, 80, 90);
console.log(results);
*/

// *******************  let do above task on Arrow function. 
let multiArgs = () => {
    let ans = 0; 
    for(let i = 0; i < arguments.length; i++){
        ans = ans + arguments[i];
    }
    return ans; 
}
let result = multiArgs(10, 20, 30);
console.log(result);
