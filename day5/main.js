/**download >>  moongosev + express + ajv
 * import>>  path + bodyparser
 */


//#region config

const bodyparser = require("body-parser");
const express = require("express");
const app = express();
const port = process.env.port || 7006;
const Loggings = require("./MiddleWares/loggings");
const studentRoutes=require("./Routers/StudentsRouters")
const coursesRoutes=require("./Routers/CoursesRouters")
//#endregion config


//#region MW
app.use(Loggings)
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
//#end region MW


//#region students 
app.use("/api/students",studentRoutes);
//#endregionstudents

//#region endpoints courses
app.use("/api/courses",coursesRoutes);
//#endregion endpoints courses

app.listen(port, () => { console.log("http://localhost:" + port) });