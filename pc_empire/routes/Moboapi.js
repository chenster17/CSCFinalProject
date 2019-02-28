const express = require ('express');
const router = express.Router();
const Mobo = require('../models/Mobo');



router.get("/getAll", (req, res, next) => {
    //this will return all the Mobos stored in the database
    Mobo.find({})
        .then(data => res.json(data))
        .catch(next)
});

router.get("/getBrands", (req, res, next) => {
    //this will return all Mobos from the database
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

router.get("/getPrices", (req, res, next) => {
    //this will return all Mobos from the database
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

router.get("/getName", (req, res, next) => {
    //this will return all CPUs from the database
    mobo.find({},"Name")
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
    mobo.find({},"CPU Socket")
        .then(data => {
            const result =[];
            for (var i in data) {
                var obj = JSON.parse(JSON.stringify(data[i]));
                if(!result.includes(obj.CPUSocket))
                    result.push(obj.CPUSocket);
            }
            res.json(result);
        })
        .catch(next)
});
router.get("/getCPUChipset", (req, res, next) => {
    //this will return all CPUs from the database
    mobo.find({},"CPU Chipset")
        .then(data => {
            const result =[];
            for (var i in data) {
                var obj = JSON.parse(JSON.stringify(data[i]));
                if(!result.includes(obj.CPUChipset))
                    result.push(obj.CPUChipset);
            }
            res.json(result);
        })
        .catch(next)
});
router.get("/getRAM", (req, res, next) => {
    //this will return all CPUs from the database
    mobo.find({},"RAM")
        .then(data => {
            const result =[];
            for (var i in data) {
                var obj = JSON.parse(JSON.stringify(data[i]));
                if(!result.includes(obj.RAM))
                    result.push(obj.RAM);
            }
            res.json(result);
        })
        .catch(next)
});
router.get("/getRAMSlot", (req, res, next) => {
    //this will return all CPUs from the database
    mobo.find({},"RAM Slots")
        .then(data => {
            const result =[];
            for (var i in data) {
                var obj = JSON.parse(JSON.stringify(data[i]));
                if(!result.includes(obj.RAMSlot))
                    result.push(obj.RAMSlot);
            }
            res.json(result.sort(function(a, b){return a-b}));
        })
        .catch(next)
});
router.get("/getFormFactor", (req, res, next) => {
    //this will return all CPUs from the database
    mobo.find({},"Form Factor")
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
router.get("/getPCIE", (req, res, next) => {
    //this will return all CPUs from the database
    mobo.find({},"PCIE")
        .then(data => {
            const result =[];
            for (var i in data) {
                var obj = JSON.parse(JSON.stringify(data[i]));
                if(!result.includes(obj.PCIE))
                    result.push(obj.PCIE);
            }
            res.json(result);
        })
        .catch(next)
});
router.get("/getSATA3", (req, res, next) => {
    //this will return all CPUs from the database
    mobo.find({},"SATA3")
        .then(data => {
            const result =[];
            for (var i in data) {
                var obj = JSON.parse(JSON.stringify(data[i]));
                if(!result.includes(obj.SATA3))
                    result.push(obj.SATA3);
            }
            res.json(result.sort(function(a, b){return a-b}));
        })
        .catch(next)
});
router.get("/getMotherboardMdot2", (req, res, next) => {
    //this will return all CPUs from the database
    mobo.find({},"M.2")
        .then(data => {
            const result =[];
            for (var i in data) {
                var obj = JSON.parse(JSON.stringify(data[i]));
                if(!result.includes(obj.Mdot2))
                    result.push(obj.Mdot2);
            }
            res.json(result.sort(function(a, b){return a-b}));
        })
        .catch(next)
});
router.get("/getPrices", (req, res, next) => {
    //this will return all CPUs from the database
    mobo.find({},"Price")
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