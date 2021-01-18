//population number and race %
const fantasyRaces = require("./fantasyRaces")

const randomiser = require("../randomSelector")




//need to generate rest based on size!

const farmingCommunity = {
    type: 'farming community',
        size: 10 + Math.floor(Math.random() * 250),
        raceOne:  randomiser(fantasyRaces),
}

const village = {
    type: 'village',
    size: 251 + Math.floor(Math.random() * 749),
    raceOne:  randomiser(fantasyRaces),
    raceTwo: randomiser(fantasyRaces),

}

const town = {
    type: 'town',
        size: 1000 + Math.floor(Math.random() * 5000),
        raceOne:  randomiser(fantasyRaces),
        raceTwo: randomiser(fantasyRaces),
        raceThree: randomiser(fantasyRaces),
    }

const city = {
        type: 'city',
        size: 5000 + Math.floor(Math.random() * 25000),
        raceOne:  randomiser(fantasyRaces),
        raceTwo: randomiser(fantasyRaces),
        raceThree: randomiser(fantasyRaces),
        raceFour: randomiser(fantasyRaces)
    }

const types = [farmingCommunity, village, town, city ]

module.exports = types;