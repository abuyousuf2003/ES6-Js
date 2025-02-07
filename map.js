//foreach

var d=[34,9,4,3,2];
d.forEach(function(y){
console.log(y);

})

// map
// var number=[3,8,1,2,5];
// var sqnum=[];
// number.forEach(function(x){
//     console.log(sqnum.push(x*x));

// })
// console.log(sqnum);
var numbers=[3,7,5,4,9];
var cubenum=numbers.map(function(x){
    return x*x*x;
})
console.log(cubenum);
//filter function is being used to filter numbers that we required using one conditions:
var numbers=[23,7,5,4,9,3,6,22,4,10];
var cubenum=numbers.filter(function(x){
return x<10;
})

console.log(cubenum);
