// 1
// 12
// 123
// 1234
// 12345

var a=require("readline-sync")
b=a.questionInt("enter the number:")
i=1
str=""
while (i<=b){
    j=1
    while (j<=i){
        str+=(i*i)+""
        j++
    }
    str+="\n"
    i++
}
console.log(str)



