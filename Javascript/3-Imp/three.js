//how to verify given object is empty or not?
let account={
    acc_Id:101,
    acc_Name:"Rahul"
}
let user={}

if(Object.keys(account).length>0){
    console.log("Not Empty Object")
}
else{
    console.log("Empty Object")
}