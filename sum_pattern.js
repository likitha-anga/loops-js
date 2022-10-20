// 1
// 12
// 123
// 1234
// 12345

var a=require("readline-sync")
n=a.questionInt("enter the number:")
i=1
str=""
while (i<=n){
    j=1
    while (j<=i){
        str+=(j)+""
        j++
    }
    str+="\n"
    i++
}
console.log(str)
