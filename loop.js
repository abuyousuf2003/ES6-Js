let a=[44,8,9,4];
for(let name of a){
    console.log(name);
}
const namefun={
    name:"abu yousuf",
    cgpa:5.09

}
for(let x in namefun)
    {
        console.log(x);//it will print element name not the value
    }
    for(let x in namefun)
        {
            console.log(namefun[x]);//it will print  the value
        }



        //foreach:
        var d=[34,9,4,3,2];
        d.forEach(function(y){
console.log(y);

        })
