//import from settlementLists file randomiser module

const randomiser = require("./randomSelector");

const governStyle = require("./settlementLists/government");

const placeName = require("./settlementLists/townName");

const types = require("./settlementLists/population")

//randomise importedLists as a key-value pair inside settlement object

//break down settlement to its most basic components
const settlement = {
    //randomise placeName and concatanate
    name: `${randomiser(placeName.namePrefix)}${randomiser(placeName.nameSuffix)}`,

    government: randomiser(governStyle),

    population: randomiser(types),


    //size: 
    //60% or greater

    //majorityRace:

    //minorityRace:



}

//percentage calculator function

console.log(settlement);