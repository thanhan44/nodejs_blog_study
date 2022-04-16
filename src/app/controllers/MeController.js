const Course = require("../models/Course");
const { multipleMongooseToObject } = require("../../util/mongoose");

class CourseController {
  // [GET] /me/stored/courses
  storedCourses(req, res, next) {
    Course.find({})
      .then((courses) => {
        courses = multipleMongooseToObject(courses);
        res.render("me/stored-courses", { courses });
      })
      .catch(next);
  }
}

module.exports = new CourseController();
