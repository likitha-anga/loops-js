// 1
// 24
// 369
// 481216
// 510152025

var a=require("readline-sync")
var n=a.questionInt("enter the number:")
i=1
str=""
while (i<=n){
   j=1
   while (j<=i){
      str+=(i*j)+" "
      j++
   }
   i++
   str+="\n"

}
console.log(str)


