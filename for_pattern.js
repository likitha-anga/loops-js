// 1
// 23
// 456
// 78910
// 1112131415

var n=5
let s="";
var k=1;
for (i=1;i<=n;i++){
    for (j=1;j<=i;j++){
        s+=k
        k++
    }
    s+="\n"
}
console.log(s)


