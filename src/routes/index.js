const newsRouter = require("./news");
const coursesRouter = require("./courses");
const siteRouter = require("./site");

function route(app) {
  // app.get("/news", (req, res) => {
  //   res.render("news");
  // });
  app.use("/news", newsRouter);
  app.use("/courses", coursesRouter);

  // app.get("/", (req, res) => {
  //   res.render("home");
  // });

  // app.get("/search", (req, res) => {
  //   res.render("search");
  // });

  // HOME, SEARCH, ...
  app.use("/", siteRouter);

  // app.post("/search", (req, res) => {
  //   console.log(req.body);
  //   res.send("");
  // });
}

module.exports = route;
