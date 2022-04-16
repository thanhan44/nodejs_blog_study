const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");

const app = express();
const port = 3000;
//-----------------------------------------------------
const { engine } = require("express-handlebars");
const path = require("path");

const route = require("./routes");
const db = require("./config/db");

// Connect DB
db.connect();

app.use(methodOverride("_method"));

// __dirname là đường dẫn tới thư mục src

//Static file
app.use(express.static(path.join(__dirname, "public")));

// Use middleware
app.use(express.urlencoded({ extended: true }));
//XMLHttpRequest, fetch, axios
app.use(express.json());

//Teamplate engine (handlebar : hbs)
app.engine(
  ".hbs",
  engine({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);

app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "resources", "views"));
// console.log(__dirname);

//HTTP logger
// app.use(morgan("combined"));

//Routes init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
