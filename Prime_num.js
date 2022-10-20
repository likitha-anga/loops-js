

// var a=require("readline-sync")
// num=a.questionInt("enter the number:")
// for (var i=1;i<num/2;i++){
    // if (num%i==0){
        // console.log("NOT A PRIME")
        // break
    // }
    // else{
        // console.log("PRIME NUM")
    // }
    // i++ 
    // break
// }

// var a=require("readline-sync")
// num=a.questionInt("enter the number:")
// var sum=0
// i=1
// while (i<=num/2){
    // if (num%i==0){
        // sum=sum+i
    // i++
    // }
// }
// if (sum==num){
    // console.log("PERFECT NUM")
// }
// else{
    // console.log("NOT PERFECT NUM")
// }  





var a=require("readline-sync")
num=a.questionInt("enter the number:")
let i=2
var count=0
while (i<num){
    if (num%i==0){
        count+=1
    }
    i++
}
if (count==0){
    console.log("PRIME")
}
else{
    console.log("NOT A PRIME")
}
// \\
