const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for pc_empire
const MoboSchema = new Schema({
    Manufacturer: String,
    Name: String,
    CPUSocket: String,
    CPUChipset: String,
    RAM: String,
    RAMSlot: String,
    FormFactor:String,
    PCIE:String,
    SATA3:Number,
    Mdot2:Number,
    Wifi: Boolean,
    Price: Number
});

//create model for pc_empire

const Mobo = mongoose.model('Motherboard', MoboSchema,'Motherboard');


module.exports = Mobo;
