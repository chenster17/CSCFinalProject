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
    Mobo.find({},"Name")
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
    Mobo.find({},"CPU_Socket")
        .then(data => {
            const result =[];
            for (var i in data) {
                var obj = JSON.parse(JSON.stringify(data[i]));
                if(!result.includes(obj.CPU_Socket))
                    result.push(obj.CPU_Socket);
            }
            res.json(result);
        })
        .catch(next)
});
router.get("/getCPUChipset", (req, res, next) => {
    //this will return all CPUs from the database
    Mobo.find({},"CPU_Chipset")
        .then(data => {
            const result =[];
            for (var i in data) {
                var obj = JSON.parse(JSON.stringify(data[i]));
                if(!result.includes(obj.CPU_Chipset))
                    result.push(obj.CPU_Chipset);
            }
            res.json(result);
        })
        .catch(next)
});
router.get("/getRAM", (req, res, next) => {
    //this will return all CPUs from the database
    Mobo.find({},"RAM")
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
router.get("/getRAMSlots", (req, res, next) => {
    //this will return all CPUs from the database
    Mobo.find({},"RAM_Slots")
        .then(data => {
            const result =[];
            for (var i in data) {
                var obj = JSON.parse(JSON.stringify(data[i]));
                if(!result.includes(obj.RAM_Slots))
                    result.push(obj.RAM_Slots);
            }
            res.json(result.sort(function(a, b){return a-b}));
        })
        .catch(next)
});
router.get("/getFormFactor", (req, res, next) => {
    //this will return all CPUs from the database
    Mobo.find({},"Form_Factor")
        .then(data => {
            const result =[];
            for (var i in data) {
                var obj = JSON.parse(JSON.stringify(data[i]));
                if(!result.includes(obj.Form_Factor))
                    result.push(obj.Form_Factor);
            }
            res.json(result);
        })
        .catch(next)
});
router.get("/getPCIE", (req, res, next) => {
    //this will return all CPUs from the database
    Mobo.find({},"PCIE")
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
    Mobo.find({},"SATA3")
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
/*
router.get("/getMdot2", (req, res, next) => {
    //this will return all CPUs from the database
    Mobo.find({},"M.2")
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
*/
router.get("/getPrices", (req, res, next) => {
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