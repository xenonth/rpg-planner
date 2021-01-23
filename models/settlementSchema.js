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
        
        races: [
            {
                raceOne: {type: String, required: true},
                percentage: {type: Number, required: true},
            },
             {
                raceTwo: String,
                percentage: Number,
            },
            {
                raceThree: String,
                percentage: Number,
            },
            {
                raceFour: String,
                percentage: Number,
            }
        ]
    }, 
    otherInformation: String,
    date: { type: Date, default: Date.now },
})

const Settlement = mongoose.model("Settlement", settlementSchema);

module.exports = Settlement;