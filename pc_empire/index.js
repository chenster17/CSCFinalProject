const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const CPUroutes = require('./routes/CPUapi');
const Moboroutes = require('./routes/Moboapi');
const Caseroutes = require('./routes/Caseapi');
const PSroutes = require('./routes/PSapi');
const GPUroutes = require('./routes/GPUapi');
const RAMroutes = require('./routes/RAMapi');
const Storageroutes = require('./routes/Storageapi');
const path = require('path');
require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;

//connect to the database
mongoose.connect(process.env.DB, { useNewUrlParser: true  })
    .then(() => console.log(`Database connected successfully`))
    .catch(err => console.log(err));

//since mongoose promise is depreciated, we overide it with node's promise
mongoose.Promise = global.Promise;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());

app.use('/CPUapi', CPUroutes);
app.use('/Moboapi', Moboroutes);
app.use('/Caseapi', Caseroutes);
app.use('/PSapi', PSroutes);
app.use('/GPUapi', GPUroutes);
app.use('/RAMapi', RAMroutes);
app.use('/Storageapi', Storageroutes);

app.use((err, req, res, next) => {
  console.log(err);
  next();
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});