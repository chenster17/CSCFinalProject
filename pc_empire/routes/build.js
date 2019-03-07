const express = require ('express');
const router = express.Router();
const Build = require('../models/build');

router.get("/getAll", (req, res, next) => {
    //this will return all Builds from the database
    Build.find({})
        .then(data => res.json(data))
        .catch(next)
});
router.get("getBuild",(req, res, next) =>{
    Build.find({"_id":req.params.id})
        .then(data => res.json(data))
        .catch(next)
});

router.post("/makeBuild", (req,res,next) =>{
    Build.create(req.body)
        .then(data => res.json(data))
        .catch(next)
});

router.post("/updateBuild", (req,res,next) =>{
    Build.findByIdAndUpdate({"_id":req.params.id},req.body,options,callback)
        .then(data => res.json(data))
        .catch(next)
});