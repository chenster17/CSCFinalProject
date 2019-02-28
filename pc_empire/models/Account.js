const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for pc_empire
const AccountSchema = new Schema({
    First_Name: String,
    Last_Name: String,
    User_Name: String,
    Password: String,
    Comments: Array,
    Builds: Array,
    Reviews: Array,
});

//create model for pc_empire

const Account = mongoose.model('Account', AccountSchema,'Account');

module.exports = Account;