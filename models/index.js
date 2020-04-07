const User = require("./User.js");

const mongoose = require("mongoose");

function connect() {
  return mongoose.connect(
    "mongodb+srv://admin:admin@cluster0-cppyl.mongodb.net/flashride?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    }
  );
}

module.exports = {
  models: {
    User: User
  },
  connect: connect
};
