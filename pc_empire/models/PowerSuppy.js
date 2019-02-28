const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for pc_empire
const PowerSupplySchema = new Schema({
    Manufacturer: String,
    Name: String,
    Power: Number,
    EfficiencyRating: Boolean,
    Price: Number
});

//create model for pc_empire

const PowerSupply = mongoose.model('PowerSupply', CaseSchema,'PowerSupply');

module.exports = PowerSupply;

