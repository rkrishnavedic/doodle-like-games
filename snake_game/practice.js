
console.log("Namaskaram");

//JavaScript

c=15;//global scope
var d=67;//function scope
let e=89;//block scope

function fun(){
    
    let a=15;
    if(a==15){
        f=9;
        console.log("Inside", f);
            }
    console.log("out", f);
}

fun();
console.log(f);
 // var f has only function scope

let arr=["Good", "Hold", "Blessings"];
console.log(arr);
arr.push("New value");//push_back

arr.pop();

arr.shift();//delete value fron begin

arr.unshift("New value in begin")
