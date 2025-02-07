function Addnumber(x,y,z){
    return x+y+z;
}
// normal method:
const number=[12,67,34];
console.log(Addnumber(number[0],number[1],number[2]));

//spread method:
console.log(Addnumber(...number));

let num=[12,6,...number];
console.log(num);

let p1={
    name:"abu yousuf",
    age:34
}

let p2={
    country:"bangladesh",
    height:72
}
let p={...p1,  ...p2};
console.log(p);
