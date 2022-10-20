// var c = 1;
// while (c < 10) {
   // console.log(c)
   // c +=1
// }

// let a=1
// while (a<=10){
   // a++
   // console.log(a)
// }

// i=1
// while (i<=10){
   // console.log(i*i)
   // i++
// }
// 



const n=require("readline-sync");
var name=n.question("enter name: ")
const store=name;
var string=""
for (let i=name.length-1;i>=0;i--) {
   string=string+name[i]
}
if (store===string) {
   console.log("its palindrome string")
}
else {
   console.log("it's not a palindrome string")
}
