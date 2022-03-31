class NewsController {
  // [GET] /news
  index(req, res) {
    res.render("news");
  }

  // [GET] /news/:slug
  show(req, res) {
    res.send("New Detail!!!!!!!1");
  }
}

module.exports = new NewsController();
