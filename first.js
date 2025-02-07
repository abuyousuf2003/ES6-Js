// let,var ,const
let x=78;
if(true){
   let x=45;
//    its just work inside this sope;;;
}
console.log(x);

// print method:
let roll=45;
console.log("my roll is"+roll+"i am happy with that")//old method
console.log(`my roll is ${roll} i am happy with that`)

// new way to declare function:
const add=(x,y) =>{
let sum=x+y;
console.log(sum);
}
add(34,23);



// hoisting:
x=45;
console.log()