//const { myClass } = require("../../../lect/day2/Demo/Modules/module")
var myModule=require("./Module")
//console.log(myModule)

let myClass = myModule.myClass;
//console.log(myClass)
let user1=new myClass();
user1.getticket("1-5-2023")
user1.dispaly()
user1.updateTicket(5,6,6)
user1.dispaly()
console.log("/////////////////////")
let user2=new myClass()
user2.getticket("20-10-2023")
user2.dispaly();
user2.updateTicket(20,9,8)
user2.dispaly()

