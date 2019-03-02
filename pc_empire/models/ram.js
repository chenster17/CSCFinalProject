const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for pc_empire
const RAMSchema = new Schema({
    Manufacturer: String,
    Name: String,
    Type: String,
    Speed: Number,
    Capacity: Number,
    Slots: Number,
    Price: Number
});

//create model for pc_empire

const Ram = mongoose.model('Ram', RAMSchema,'Ram');

module.exports = Ram;