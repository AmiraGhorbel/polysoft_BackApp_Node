const Fournisseur = require('../models/fournisseur.models.js'); 
const router=require("express").Router() 
const body=require("body-parser") 
router.use(body.json()); 
// Créer et sauvegarder une nouvelle Article 
exports.creer= async (req, res) => { 
    try { 
         var fournisseur= Fournisseur({
            fourNom : req.body.fourNom ||"Untitled",
            fourEmail : req.body.fourEmail ||"Empty fourEmail",
            fourTel : req.body.fourTel ||"Empty fourTel",
            fourAdresse : req.body.fourAdresse ||"Empty fourAdresse",
            fourDesc : req.body.fourDesc ||"Empty fourDesc"
             }); 
            var result=await fournisseur.save(); 
            res.send(result);
        } catch (error) {
            res.status(500).send(error);
            }
};


exports.afficherTout = (req, res) => {
    Fournisseur.find().then(fournisseurs => {
        res.send(fournisseurs);
    })
    //envoyer le résultat
    .catch(err => {
    res.status(500).send({
    message: err.message || "Some error occurred while retrieving Fournisseurs."
    });
    });
};
exports.afficherUn= async (req, res) => {
    try {
        var n=await Fournisseur.findById(req.params.fournisseurId).exec();
        var result = await n.save();
        res.send(result);
    } catch (error) {
    res.status(500).send(error);
    }
};
exports.modifier = async(req, res) => {
        try 
        {
        var n =  await Fournisseur.findById({ _id: req.params.fournisseurId}).exec();
            n.fourNom = req.body.fourNom  ||"Updated fourNom",
            n.fourEmail = req.body.fourEmail ||"Updated fourEmail",
            n.fourTel = req.body.fourTel ||"Updated fourTel",
            n.fourAdresse = req.body.fourAdresse ||"Updated fourAdresse",
            n.fourDesc = req.body.fourDesc ||"Updated fourDesc"     
             var result = await n.save();
            res.send(result);
             }
        catch (error){
                res.status(400).send("unable to update the database");
          }
};
exports.supprimer= async (req, res) => {
    try {
        var result=await Fournisseur.deleteOne({_id: req.params.fournisseurId}).exec();
        res.send(result);
    } catch (error) {
    res.status(500).send(error);
    }
    };