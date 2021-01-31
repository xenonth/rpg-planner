const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const settlementSchema = new Schema ({
    name:  String, 
    type:  String,
    size: Number, 
    government: String,
    description: String, 
    
    population: {
        numberOfRaces: Number,  
        
        races: [
            {
                raceOne: String, 
                percentage:  Number, 
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
    author: String,
    date: { type: Date, default: Date.now },
})

const Settlement = mongoose.model("Settlement", settlementSchema);

module.exports = Settlement;