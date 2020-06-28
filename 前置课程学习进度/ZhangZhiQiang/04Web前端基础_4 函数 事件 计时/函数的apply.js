var arr = [5, 6, 3, 2, 9, 44, 6, 3, 61, 22];
function add(a, b){
    return this + (a + b);
}

console.log(add.apply(null, [3, 6]));
console.log(add.apply(2, [3, 6]));
console.log(Math.min.apply(null,arr));