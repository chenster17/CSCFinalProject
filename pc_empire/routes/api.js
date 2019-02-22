const express = require ('express');
const router = express.Router();
const CPU = require('../models/CPU');




router.get("/getAllCPUs", (req, res, next) => {
  //this will return all the CPUs stored in the database
        CPU.find({})
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
