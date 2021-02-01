//setup for routes to send will get to at some point.
const path = require("path");

const router = require("express").Router();

//connection to API files
const apiRoutes = require("./API");

// final path for input for /settlements
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../rpg-generator/public/index.html"));
});

module.exports = router;