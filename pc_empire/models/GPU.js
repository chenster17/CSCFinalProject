const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for pc_empire
const GPUSchema = new Schema({
    ChipsetManufacturer: String,
    Manufacturer: String,
    Name: String,
    Clock: Number,
    Vram: Number,
    Interface: String,
    Power, Number,
    Price: Number
});

//create model for pc_empire

const GPU = mongoose.model('GPU', GPUSchema,'GPU');

module.exports = GPU;