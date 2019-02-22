const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for pc_empire
const CPUSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  Manufacturer: String,
  Name: String,
  Cores: Number,
  Clock: String,
  Socket: String,
  Power: Number,
  Stock_Cooler: Boolean,
  Price: Number
});

//create model for pc_empire
const Pc_empire = mongoose.model('CPU', CPUSchema);

module.exports = Pc_empire;
