//import from settlementLists file randomiser module

const randomiser = require("./randomSelector");

const governStyle = require("./settlementLists/government");

const placeName = require("./settlementLists/townName");

const types = require("./settlementLists/population");

const happening = require("./settlementLists/happening");

const description = require("./settlementLists/description")

//randomise importedLists as a key-value pair inside settlement object

//break down settlement to its most basic components
const settlement = {
    //randomise placeName and concatanate
    name: `${randomiser(placeName.namePrefix)}${randomiser(placeName.nameSuffix)}`,

    government: randomiser(governStyle),

    population: randomiser(types),

    description: randomiser(description),
    
    whatIsGoingOn: randomiser(happening)
}
console.log(settlement)

module.exports = settlement;