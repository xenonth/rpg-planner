const express = require("express");

const mongoose = require("mongoose");

const routes = require("./routes");

const app = express();

const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("rpg-generator/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/rpg-generator");
mongoose.connection.on('connected', () => {
  console.log('Established Mongoose Default Connection');
});

// When connection throws an error
mongoose.connection.on('error', err => {
	console.log('Mongoose Default Connection Error : ' + err);
});

// Start the API server
app.listen(PORT, function() {
  console.log(`API Server now listening on PORT ${PORT}!`);
});
