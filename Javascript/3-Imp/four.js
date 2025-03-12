//how to verify given object is empty or not?
let account={
    acc_Id:101,
    acc_Name:"Rahul"
}
let user={}
//using ternary operator
//condiitonal st?  true st: false st 
Object.keys(user).length>0 ? console.log("Not Empyt Object")
                             :console.log("Empty Object")