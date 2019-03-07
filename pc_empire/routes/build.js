const express = require ('express');
const router = express.Router();
const Build = require('../models/build');

router.get("/getAll", (req, res, next) => {
    //this will return all Builds from the database
    Build.find({})
        .then(data => res.json(data))
        .catch(next)
});
router.get("/getBuild/:id",(req, res, next) =>{
    Build.findById(req.params.id)
        .then(data => res.json(data))
        .catch(next)
});

router.post("/makeBuild", (req,res,next) => {
    if (req.body.Build_Name) {
        Build.create(req.body)
            .then(data => res.json(data))
            .catch(next)
    }else{
        res.json({
            error: "an input field is empty"
        })
    }
});

router.post("/updateBuild/:id", (req,res,next) =>{
    Build.findByIdAndUpdate(req.params.id,json(req.body),{new:true})
        .then(data => res.json(data))
        .catch(next)
});

module.exports = router;