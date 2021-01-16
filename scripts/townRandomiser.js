//import from settlementLists file randomiser module

const randomiser = require("./randomSelector");

const governStyle = require("./settlementLists/government");

const placeName = require("./settlementLists/townName");

//randomise importedLists as a key-value pair inside settlement object
const settlement = {
    government: randomiser(governStyle),
    //randomise placeName and concatanate
    name: `${randomiser(placeName.namePrefix)}${randomiser(placeName.nameSuffix)}`

}

console.log(settlement);