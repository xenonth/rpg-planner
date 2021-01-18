const router = require("express").Router();

const settlementsRoutes = require("./settlement");

const settlement = require("../../scripts/townRandomiser")

// Post routes
router.use("/settlements", settlementsRoutes);

//getting randomise filepath
router.get("/random-town", (req, res) => {
    res.send(settlement);
});

module.exports = router;