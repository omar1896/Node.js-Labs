
const validatestudent = require("../utils/studentsschema")
const studentmodel = require("../Models/StudentsModal")


// id = 0;

var get_all_student = async (req, res) => {

    var allstudents = await studentmodel.find();
    await res.json(allstudents)


}
var add_new_student = async (req, res) => {

    var newstudentfrombody = req.body;//{name, age, dept}//==>ajv.validate(newUserFromBody)
    console.log(newstudentfrombody)
    var validst = validatestudent(newstudentfrombody)

    if (validst) {
        var newstudentmodel = new studentmodel(newstudentfrombody);
        console.log(newstudentfrombody)
        await newstudentmodel.save();
        await res.json(newstudentmodel)

    }
}
var update_student = async (req, res) => {

    var update = req.body;
    var filter = req.params.id;

    //     const filter = { name: 'Jean-Luc Picard' };
    // const update = { age: 59 };


    let doc = await studentmodel.findOneAndUpdate(filter, update, {
        new: true
    })
    await res.json(doc)
}


var get_students_byid = async (req, res) => {

    var id = req.params.id
    try {
        var foundst = await studentmodel.findById(id)
    } catch { console.log("error in clientside") }

    res.json(foundst || "error404")

}


var delet_student_byid = async (req, res) => {

    var deleted = await studentmodel.findOneAndDelete({ _id: req.params.id })
    await res.json(deleted)
}

module.exports = {
    get_all_student,
    get_students_byid,
    add_new_student,
    delet_student_byid,
    update_student
}