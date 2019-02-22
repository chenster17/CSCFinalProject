const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for pc_empire
const EmpireSchema = new Schema({
  action: {
    type: String,
    required: [true, 'The todo text field is required']
  }
})

//create model for pc_empire
const Pc_empire = mongoose.model('pc_empire', EmpireSchema);

module.exports = Pc_empire;
