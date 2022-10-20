// 1
// 14
// 149
// 14916
// 1491625
// 

var a=require("readline-sync")
b=a.questionInt("enter the number:")
i=0
str=""
while (i<=b) {
    j=1
    while (j<=i){
        str+=(j*j)+""
        j++
    }
    i++
    str+="\n"
}
console.log(str)



