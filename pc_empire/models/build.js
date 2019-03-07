const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for pc_empire
const BuildSchema = new Schema({
    Owner_id: String,
    Build_Name: String,
    CPU_id: String,
    Case_id: String,
    GPU_id: String,
    Motherboard_id: String,
    Power_Supply_id: String,
    RAM_id: String,
    Storage_id: Array,
    Reviews: Array,
    Comments: Array
});

//create model for pc_empire

const Build = mongoose.model('Builds', BuildSchema,'Builds');

module.exports = Build;