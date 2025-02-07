// synchronus proggraming
console.group("task1");
console.group("task2");
console.group("task3");
// asynchronus:
// আমরা যখন অনেকগুলা প্রোগ্রাম লিখি তখন একটি টাস্ক শেষ করে অপরটি যায়;মানে লোড নিতে থাকে;কিন্তু এটি ঝামেলা।
// এই পদ্ধতি প্রথম টাস্ক লোড হলেও বাকিগুলা চলতে থাকে;
const loading=()=>{
    console.log("tasktwoLoading");

}

const taskOne=()=>{
console.log("task1");

}
const taskTwo=()=>{
    console.log(setTimeout(loading,2000));

    
}
const taskThree=()=>{
    console.log("task2");

    
}
const taskFour=()=>{
    console.log("task3");

    
}
taskOne();
taskTwo();
taskThree();
taskOne();
