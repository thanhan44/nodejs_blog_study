const express = require("express");
const morgan = require("morgan");

const app = express();
const port = 3000;
//-----------------------------------------------------
const { engine } = require("express-handlebars");
const path = require("path");

// __dirname là đường dẫn tới thư mục src

//Static file
app.use(express.static(path.join(__dirname, "./public")));

//Teamplate engine
app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "./resources/views"));
// console.log(__dirname);

//HTTP logger
app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
