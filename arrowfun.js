// tradtional function vs arrow funttion
// traditional func:
function abc(){
    return ("hello there");
    //we cant ise it without karli braces;
}
console.log(abc());

//arrow fun:
// const life=()=>{ return "massage 1";
// }
// console.log(life());
// if we want to remove return than we need toremove karlie braces:
const life=()=>"massage 1";

console.log(life());
