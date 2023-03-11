const validatecourses = require("../utils/coursesschema")
const coursesmodel = require("../Models/CoursesModal")


var get_all_course = async (req, res) => {

    var allcourses = await coursesmodel.find();
    await res.json(allcourses)
}
var add_new_course = async (req, res) => {

    var newcoursefrombody = req.body;//{name, age, dept}//==>ajv.validate(newUserFromBody)
    console.log(newcoursefrombody)
    var validst = validatecourses(newcoursefrombody)

    if (validst) {
        var newcoursemodel = new coursesmodel(newcoursefrombody);
        console.log(newcoursefrombody)
        await newcoursemodel.save();
        await res.json(newcoursemodel)

    }
}
var update_course = async (req, res) => {

    var update = req.body;
    var filter = req.params.id;

    //     const filter = { name: 'Jean-Luc Picard' };
    // const update = { age: 59 };


    let doc = await coursesmodel.findOneAndUpdate(filter, update, {
        new: true
    })
    await res.json(doc)

}


var get_courses_byid = async (req, res) => {

    var id = req.params.id
    try {
        var foundco = await coursesmodel.findById(id)
    } catch { console.log("error in clientside") }

    res.json(foundco || "error404")

}




var delete_course_byid = async (req, res) => {

    var deleted = await coursesmodel.findOneAndDelete({ _id: req.params.id })
    await res.json(deleted)

}


module.exports = {
    add_new_course,
    get_all_course,
    get_courses_byid,
    delete_course_byid,
    update_course
};