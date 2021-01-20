//import from settlementLists file randomiser module

// variables to be placed in the class constructor
const governStyle = require("./settlementLists/government");

const placeName = require("./settlementLists/townName");

const types = require("./settlementLists/population");

const happening = require("./settlementLists/happening");

const description = require("./settlementLists/description")


const survey = {
    //randomise placeName and concatanate
    namePrefix: placeName.namePrefix,

    nameSuffix: placeName.nameSuffix,

    government: governStyle,

    population: types,

    description: description,

    whatIsGoingOn: happening,
}

module.exports = survey;