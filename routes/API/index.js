const router = require("express").Router();

const settlementsRoutes = require("./settlement");

const randomiser = require ("../../scripts/randomSelector")

//call forth prelisted backend data
const survey = require("../../scripts/townRandomiser")

// Post routes
router.use("/settlements", settlementsRoutes);

//getting randomise filepath

    
router.get("/random-town", (req, res) => {
    //Randomise inside backend listArrays and objectArrays
    
    //place randomised data inside an object and then send the object
    let settlement = {
        name: `${randomiser(survey.namePrefix)}${randomiser(survey.nameSuffix)}`,

        government: `${randomiser(survey.government)}`,

        population: randomiser(survey.population),

        description: `${randomiser(survey.description)}`,

        whatIsGoingOn: `${randomiser(survey.whatIsGoingOn)}`
    }
    
    res.send(settlement);

});

module.exports = router;

