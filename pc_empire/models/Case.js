const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for pc_empire
const CaseSchema = new Schema({
    Manufacturer: String,
    Name: String,
    Color: String,
    FormFactor: String,
    TemperedGlass: Boolean,
    Price: Number
});

//create model for pc_empire

const Case = mongoose.model('Case', CaseSchema,'Case');

module.exports = Case;