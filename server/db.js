const mongoose = require("mongoose");


var mongoURL = "mongodb+srv://matteo:pass@cluster0.epwrgtt.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

var connection = mongoose.connection;

connection.on("error", () => {
  console.log("Mongo DB fallito");
});

connection.on("connected", () => {
  console.log("Mongo DB successo");
});

module.exports = mongoose;
