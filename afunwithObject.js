var ara=[
    {
        name:"abu yousuf",
        age:22
    },
    {
        name:"Tamim vai",
        age:25
    },
    {
        name:"dadi",
        age:67
    },
    {
        name:"uncle",
        age:56
    }
]


const studentname = ()=>{
return ara.filter(function(x){
    return x.age>30;
}).map(function(y){
    return y.name;
})
}
console.log(studentname());


