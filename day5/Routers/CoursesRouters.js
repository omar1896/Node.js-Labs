const express = require("express");
let router = express.Router();
const coursecontroller = require("../controllers/CoursesControler")

//get all courses
router.get("/", coursecontroller.get_all_course)
//get courses by id
router.get("/:id", coursecontroller.get_courses_byid)
//delete student by id
router.delete("/:id", coursecontroller.delete_course_byid)
//add courses
router.post("/creat", coursecontroller.add_new_course)
//update co
router.put("/:id", coursecontroller.update_course)


module.exports = router;