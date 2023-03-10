
const express = require("express");
let router = express.Router();
const studentscontroller=require("../controllers/StudentsController")

//get all students
router.get("/",studentscontroller.get_all_student )
//get student by id
router.get("/:id",studentscontroller.get_students_byid)
//delete student by id
router.delete("/:id",studentscontroller.delet_student_byid)
//add students
router.post("/creat",studentscontroller.add_new_student )
//update st
router.put("/:id",studentscontroller.update_student )

//#endregion endpoints
module.exports=router;