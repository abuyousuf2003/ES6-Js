const square=(x)=>{
    console.log(`square of ${x}:${x*x}`);
}
console.log(square(5));
//square function callback:
function higherOrderFunction(num,func){
func(num);
}
higherOrderFunction(6,square);