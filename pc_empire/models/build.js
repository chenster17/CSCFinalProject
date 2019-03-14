const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for pc_empire
const BuildSchema = new Schema({
    Owner: String,
    Build_Name: String,
    CPU: String,
    Case: String,
    GPU: String,
    Motherboard: String,
    PS: String,
    RAM: String,
    Storage: Array,
    Reviews: Array,
    Comments: Array
});

//create model for pc_empire

const Build = mongoose.model('Builds', BuildSchema,'Builds');

module.exports = Build;
