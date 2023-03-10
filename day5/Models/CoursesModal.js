const mongoose=require("mongoose");
var DB_URL="mongodb://127.0.0.1:27017/StudentsDB"
mongoose.connect(DB_URL,{useNewUrlParser:true});

let studentschema = new mongoose.Schema({
    name:{type:String, required:true, minlength:1}
   
})

module.exports = mongoose.model("courses", studentschema);