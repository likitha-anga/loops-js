// n=int(input("enter th enumber:"))
// x=n
// while x>=10:
    // sum=0
    // while x>0:
        // r=x%10
        // sum=sum+(r**2)
        // x=x//10
    // x=sum
// if x==1:
    // print("happy number") 
// else:
    // print("not a happy number")

// var a=require("readline-sync")
// num=a.questionInt("enter the number:")
// temp=num
// while (temp>=10){
    // sum=0
    // while (temp>0){
        // digit=temp%10
        // sum=sum+(digit**2)
        // temp=parseInt(temp/10)
    // temp=sum
    // }
// }
// if (temp==1){
    // console.log("HAPPY NUM")
// }
// else{
    // console.log("NOT A HAPPY NUM")
// }


var cars={"honda":"2","bike":"oudi"}    
for (car in cars){
    console.log(cars[car])
}