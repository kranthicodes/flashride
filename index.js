const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const router = require("./router.js");

const db = require("./models/index.js");

// support parsing of application/json type post data
app.use(express.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

const hbs = exphbs.create({
  extname: ".hbs",
  helpers: {
    ifCond: function(v1, v2, options) {
      if (v1 === v2) {
        return options.fn(this);
      }
      return options.inverse(this);
    }
  }
});

app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");

mongoose.Promise = global.Promise;
const mdb = mongoose.connection;

app.use(
  session({
    name: "CabBookingApp-User-Session",
    secret: "asdfgthyjuik679843465",
    store: new MongoStore({
      mongooseConnection: mdb,
      autoRemove: "native" // Default
    }),
    resave: false,
    saveUninitialized: true,

    cookie: {
      httpOnly: true,
      maxAge: 12000000,
      path: "/",
      samesite: true,
      secure: false
    }
  })
);

app.use("/", router);

app.get("/sessionTest", function(req, res) {
  if (req.session.user) {
    return res.send({
      status: true,
      data: req.session.user
    });
  }
  return res.send({
    status: false
  });
});

db.connect()
  .then(function() {
    app.listen(PORT, function(req, res) {
      console.log("Application is running on PORT: ", PORT);
    });
  })
  .catch(function(error) {
    console.log("Failed to connect to database ", error);
  });
