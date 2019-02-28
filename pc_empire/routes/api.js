const express = require ('express');
const router = express.Router();
const CPU = require('../models/CPU');
const Mobo = require('../models/Mobo');

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

router.get("/getAllMobos", (req, res, next) => {
    //this will return all the Mobos stored in the database
    Mobo.find({})
        .then(data => res.json(data))
        .catch(next)
});

router.get("/getMotherboardBrands", (req, res, next) => {
    //this will return all CPUs from the database
    Mobo.find({},"Manufacturer")
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
router.get("/getMotherboardPrices", (req, res, next) => {
    //this will return all CPUs from the database
    Mobo.find({},"Price")
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
