const express = require ('express');
const router = express.Router();
const CPU = require('../models/CPU');

router.get("/getAllCPUs", (req, res, next) => {
    //this will return all CPUs from the database
    CPU.find({})
        .then(data => res.json(data))
        .catch(next)
});

router.get("/getCPUBrands", (req, res, next) => {
    //this will return all CPUs from the database
    CPU.find({},"Manufacturer")
        .then(data => {
            const result =[];
          for (var i in data) {
              var obj = JSON.parse(JSON.stringify(data[i]));
              if(!result.includes(obj.Manufacturer))
                  result.push(obj.Manufacturer);
          }
          res.json(result);
        })
        .catch(next)
});

router.get("/getCPUName", (req, res, next) => {
    //this will return all CPUs from the database
    CPU.find({},"Name")
        .then(data => {
            const result =[];
          for (var i in data) {
              var obj = JSON.parse(JSON.stringify(data[i]));
              if(!result.includes(obj.Name))
                  result.push(obj.Name);
          }
          res.json(result);
        })
        .catch(next)
});

router.get("/getCPUSocket", (req, res, next) => {
    //this will return all CPUs from the database
    CPU.find({},"Socket")
        .then(data => {
            const result =[];
          for (var i in data) {
              var obj = JSON.parse(JSON.stringify(data[i]));
              if(!result.includes(obj.Socket))
                  result.push(obj.Socket);
          }
          res.json(result);
        })
        .catch(next)
});

router.get("/getCPUClock", (req, res, next) => {
    //this will return all CPUs from the database
    CPU.find({},"Clock")
        .then(data => {
            const result =[];
          for (var i in data) {
              var obj = JSON.parse(JSON.stringify(data[i]));
              if(!result.includes(obj.Clock))
                  result.push(obj.Clock);
          }
          res.json(result);
        })
        .catch(next)
});
router.get("/getCPUCores", (req, res, next) => {
    //this will return all CPUs from the database
    CPU.find({},"Cores")
        .then(data => {
            const result =[];
          for (var i in data) {
              var obj = JSON.parse(JSON.stringify(data[i]));
              if(!result.includes(obj.Cores))
                  result.push(obj.Cores);
          }
          res.json(result.sort(function(a, b){return a-b}));
        })
        .catch(next)
});
router.get("/getCPUPower", (req, res, next) => {
    //this will return all CPUs from the database
    CPU.find({},"Power")
        .then(data => {
            const result =[];
          for (var i in data) {
              var obj = JSON.parse(JSON.stringify(data[i]));
              if(!result.includes(obj.Power))
                  result.push(obj.Power);
          }
          res.json(result.sort(function(a, b){return a-b}));
        })
        .catch(next)
});

router.get("/getCPUPrices", (req, res, next) => {
    //this will return all CPUs from the database
    CPU.find({},"Price")
        .then(data => {
            const result =[];
            for (var i in data) {
                var obj = JSON.parse(JSON.stringify(data[i]));
                if(!result.includes(obj.Price))
                    result.push(obj.Price);
            }

            res.json(result.sort(function(a, b){return a-b}));
        })
        .catch(next)
});


module.exports = router;
