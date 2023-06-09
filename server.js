var createError = require("http-errors");
var express = require("express");
const cors = require("cors")

var cookieParser = require("cookie-parser");
var logger = require("morgan");
const registerRoute = require("./routes/regRouter")
const loginRoute = require("./routes/loginRouter")

// var indexRouter = require("./routes/index");

var app = express();


app.use(cors())
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/", registerRoute)
app.use("/", loginRoute)
// app.use("/", indexRouter);


app.listen(7000, () => {
  console.log("Server is listening on port 7000");
});