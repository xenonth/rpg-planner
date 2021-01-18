const router = require("express").Router();
const settlementsRoutes = require("./settlement");

// Post routes
router.use("/settlements", settlementsRoutes);

module.exports = router;