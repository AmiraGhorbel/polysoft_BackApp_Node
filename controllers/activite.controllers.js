const Activite = require('../models/activite.models.js'); 
const router=require("express").Router() 
const body=require("body-parser") 
router.use(body.json()); 
// Créer et sauvegarder une nouvelle Article 
exports.creer= async (req, res) => { 
    try { 
         var activite= Activite({
            actCode : req.body.actCode ||"Untitled",
            actDesig : req.body.actDesig ||"Empty actDesig",
            actDesc : req.body.actDesc ||"Empty actDesc"
             }); 
            var result=await activite.save(); 
            res.send(result);
        } catch (error) {
            res.status(500).send(error);
            }
};


exports.afficherTout = (req, res) => {
    Activite.find().then(activites => {
        res.send(activites);
    })
    //envoyer le résultat
    .catch(err => {
    res.status(500).send({
    message: err.message || "Some error occurred while retrieving Activites."
    });
    });
};
exports.afficherUn= async (req, res) => {
    try {
        var n=await Activite.findById(req.params.activiteId).exec();
        var result = await n.save();
        res.send(result);
    } catch (error) {
    res.status(500).send(error);
    }
};
exports.modifier = async(req, res) => {
        try 
        {
        var n =  await Activite.findById({ _id: req.params.activiteId}).exec();
            n.actCode = req.body.actCode  ||"Updated actCode",
            n.actDesig = req.body.actDesig ||"Updated actDesig",
            n.actDesc = req.body.actDesc ||"Updated actDesc"    
             var result = await n.save();
            res.send(result);
             }
        catch (error){
                res.status(400).send("unable to update the database");
          }
};
exports.supprimer= async (req, res) => {
    try {
        var result=await Activite.deleteOne({_id: req.params.activiteId}).exec();
        res.send(result);
    } catch (error) {
    res.status(500).send(error);
    }
    };