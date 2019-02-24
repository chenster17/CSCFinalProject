

const express = require ('express');
const router = express.Router();
const CPU = require('../models/CPU');



router.get("/getAllCPUs", (req, res, next) => {
    //this will return all CPUs from the database
    CPU.find({})
        .then(data => res.json(data))
        .catch(next)
});
router.get("/getCPUBrand", (req, res, next) => {
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
    CPU.find({},"Clock")
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
router.get("/getCPUStock_Cooler", (req, res, next) => {
    //this will return all CPUs from the database
    CPU.find({},"Power")
        .then(data => {
            const result =[];
          for (var i in data) {
              var obj = JSON.parse(JSON.stringify(data[i]));
              if(!result.includes(obj.Stock_Cooler))
                  result.push(obj.Stock_Cooler);
          }
          res.json(result);
        })
        .catch(next)
});
router.get("/getCPUPrice", (req, res, next) => {
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


router.get("/todos", (req, res, next) => {
    //this will return all the data, exposing only the id and action field to the client
    const itemName = req.body.Name;
    PCE.find({Name:itemName})
        .then(data => res.json(data))
        .catch(next)
});

router.post('/todos', (req, res, next) => {
  if(req.body.action){
    PCE.create(req.body)
      .then(data => res.json(data))
      .catch(next)
  }else {
    res.json({
      error: "The input field is empty"
    })
  }
});

router.delete('/todos/:id', (req, res, next) => {
  PCE.findOneAndDelete({"_id": req.params.id})
    .then(data => res.json(data))
    .catch(next)
})

module.exports = router;
