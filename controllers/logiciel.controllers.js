const Logiciel = require('../models/logiciel.models.js'); 
const router=require("express").Router() 
const body=require("body-parser") 
router.use(body.json()); 
// Créer et sauvegarder une nouvelle Article 
exports.creer= async (req, res) => { 
    try { 
         var logiciel=new Logiciel(req.body); 
            var result=await logiciel.save(); 
            res.send(result);
        } catch (error) {
            res.status(500).send(error);
            }
};


exports.afficherTout = (req, res) => {
    Logiciel.find().then(logiciels => {
        res.send(logiciels);
    })
    //envoyer le résultat
    .catch(err => {
    res.status(500).send({
    message: err.message || "Some error occurred while retrieving logiciels."
    });
    });
};
exports.afficherUn= async (req, res) => {
    try {
        var n=await Logiciel.findById(req.params.logicielId).exec();
        var result = await n.save();
        res.send(result);
    } catch (error) {
    res.status(500).send(error);
    }
};
exports.modifier = async(req, res) => {
        try 
        {
        var n =  await Logiciel.findById({ _id: req.params.logicielId}).exec();
            n.logCode = req.body.logCode  ||"Updated logCode",
            n.logDesig = req.body.logDesig ||"Updated logDesig",
            n.logDesc = req.body.logDesc ||"Updated logDesc",
            n.logPrix = req.body.logPrix ||"Updated logPrix"     
             var result = await n.save();
            res.send(result);
             }
        catch (error){
                res.status(400).send("unable to update the database");
          }
};
exports.supprimer= async (req, res) => {
    try {
        var result=await Logiciel.deleteOne({_id: req.params.logicielId}).exec();
        res.send(result);
    } catch (error) {
    res.status(500).send(error);
    }
};