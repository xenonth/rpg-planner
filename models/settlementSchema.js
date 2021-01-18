const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const settlementSchema = new Schema ({
    name: {type: String, required: true},
    type: {type: String, required: true},
    size: {type: Number, required: true},
    government: {type: String, required: true},
    description: {type: String, required: true},
    
    population: {
        numberOfRaces: {type: Number, required: true}, 
        raceOne: {
            raceName: {type: String, required: true},
            percentage: {type: Number, required: true},
        },
        raceTwo: {
            raceName: String,
            percentage: Number,
        },
        raceThree: {
            raceName: String,
            percentage: Number,
        },
        raceFour: {
            raceName: String,
            percentage: Number,
        }
    }, 
    otherInformation: String,
    date: { type: Date, default: Date.now },
})

const Settlement = mongoose.model("Settlement", settlementSchema);

module.exports = Settlement;