// 54321
// 5432
// 543
// 54
// 5

i=5
n=i
str=""
while (i>=1){
   j=0
   while (j<i){
      str+=(n-j)+" "
      j++
   }
   i--
   str+="\n"

}
console.log(str)