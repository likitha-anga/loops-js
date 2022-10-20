var a=require("readline-sync")
num=a.questionInt("entre the number:")
temp=num
sum=0
while (temp>0){
    digit=temp%10
    sum=(sum*10)+digit
    temp=parseInt(temp/10)
}
if (num==sum){
    console.log("PALINDROME NUM")
}
else{
    console.log("NOT A PALINDROME NUM")
}