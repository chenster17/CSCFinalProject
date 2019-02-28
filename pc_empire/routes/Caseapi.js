const express = require ('express');
const router = express.Router();
const Case = require('../models/Case');

router.get("/getAll", (req, res, next) => {
    //this will return all the Mobos stored in the database
    Case.find({})
        .then(data => res.json(data))
        .catch(next)
});

router.get("/getBrands", (req, res, next) => {
    //this will return all Mobos from the database
    Case.find({},"Manufacturer")
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

router.get("/getName", (req, res, next) => {
    //this will return all CPUs from the database
    Case.find({},"Name")
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

router.get("/getColor", (req, res, next) => {
    //this will return all CPUs from the database
    Case.find({},"Color")
        .then(data => {
            const result =[];
            for (var i in data) {
                var obj = JSON.parse(JSON.stringify(data[i]));
                if(!result.includes(obj.FormFactor))
                    result.push(obj.FormFactor);
            }
            res.json(result);
        })
        .catch(next)
});

router.get("/getFormFactor", (req, res, next) => {
    //this will return all CPUs from the database
    Case.find({},"Form Factor")
        .then(data => {
            const result =[];
            for (var i in data) {
                var obj = JSON.parse(JSON.stringify(data[i]));
                if(!result.includes(obj.FormFactor))
                    result.push(obj.FormFactor);
            }
            res.json(result);
        })
        .catch(next)
});


module.exports = router;