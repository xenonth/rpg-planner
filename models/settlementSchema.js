const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const settlementSchema = new Schema ({
    name: {type: String, required: true},
    type: {type: String, required: true},
    government: {type: String, required: true},
    description: {type: String, required: true}, 
    population: {
        number: {type: String, required: true},
        races: [{
            raceName: {type: Array, required: true},
            percentage: {type: Number, required: true}
        }],
    }, 
})

const Settlement = mongoose.model("Settlement", settlementSchema);

module.exports = Settlement;