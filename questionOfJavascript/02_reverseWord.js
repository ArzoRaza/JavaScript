function nameReverse(str){
    let name = str.split('');
    let revName = name.reverse();
    let result = revName.join();
    return result;
}
console.log(nameReverse("Entrepreneurship"));

