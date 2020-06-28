function sortNum(a,b) {
    return a - b;
    //升序，如降序，把“a - b”该成“b - a”
}
var myarr1 = new Array("Hello", "John", "love", "JavaScript");
var myarr2 = new Array("80", "16", "50", "6", "100", "1");
console.log(myarr1.sort());
console.log(myarr2.sort());
console.log(myarr2.sort(sortNum));
