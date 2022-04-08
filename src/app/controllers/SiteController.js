const Course = require("./../models/Course");
const { multipleMongooseToObject } = require("../../util/mongoose");

class SiteController {
  // [GET] /
  home(req, res, next) {
    // Course.find({}, function (err, course) {
    //   if (!err) {
    //     res.json(course);
    //   } else {
    //     next(err);
    //     // res.status(400).json({ error: "ERROR!!!!!!" });
    //   }
    // });

    Course.find({})
      // .lean() //xài /lean() hoặc .toObject()
      .then((courses) => {
        // res.json(courses);
        // courses = courses.map(course => course.toObject())
        courses = multipleMongooseToObject(courses);
        res.render("home", {
          // courses= multipleMongooseToObject(courses),
          courses,
        });
        // res.render("home", { courses: courses });
      })
      .catch((err) => next(err));

    // res.render("home");
  }

  // [GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
