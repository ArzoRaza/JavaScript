function findMax(arr){
    let max = arr[0];

    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max;
}
let jadu = [3, 5, 7, 9, 3];
console.log(findMax(jadu));