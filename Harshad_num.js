var a=require("readline-sync")
num=a.questionInt("enter the number:")
sum=0
temp=num
while (temp>0){
    digit=temp%10
    sum=sum+digit
    temp=parseInt(temp/10)
}
if (num%sum==0){
    console.log("HARSHAD NUM")
}
else{
    console.group("NOT A HARSHAD NUM")
}