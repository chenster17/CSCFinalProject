const express = require ('express');
const router = express.Router();
const PCE = require('../models/PC_empire');




router.get("/:productN", (req, res, next) => {
  //this will return all the data, exposing only the id and action field to the client
  const id = req.params.productN;

  PCE.find({"Name":"I5-8400"})
      .exec()
      .then(data => console.log(data))
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
