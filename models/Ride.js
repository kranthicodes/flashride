var mongoose = require("mongoose");
const moment = require('moment');
// Get the Schema constructor
var Schema = mongoose.Schema;

// Using Schema constructor, create a ProductSchema
var RideSchema = new Schema({
    time: {
        type: String,
        // required: true,
        default: moment().format('LLLL')
    },
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    fare: {
        type: Number,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    }
}, { collection: "ride" });

// Create model from the schema
module.exports = mongoose.model("ride", RideSchema);
