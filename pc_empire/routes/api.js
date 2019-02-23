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
