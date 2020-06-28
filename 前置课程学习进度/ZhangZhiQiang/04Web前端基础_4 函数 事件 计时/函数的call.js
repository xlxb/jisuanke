function add(a, b){
    return this + (a + b);
}

console.log(add.call(null, 3, 6));
console.log(add.call('www', 3, 6));
console.log(add.call(2, 3, 6));
