

var a=require("readline-sync")
num=a.questionInt("enter the number:")
i=1
sum=0
while (i<num){
    if (num%i==0){
        sum=sum+i
    i++
    }
}
if (num==sum){
    console.log("PERFECT NUM")
}
else{
    console.log("NOT A PERFECT NUM")
}