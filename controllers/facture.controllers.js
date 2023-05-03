const Facture = require('../models/facture.models.js')
const router=require("express").Router() 
const body=require("body-parser") 
router.use(body.json()); 
// Créer et sauvegarder une nouvelle Article 
exports.creer= async (req, res) => { 
    try { 
         var facture= Facture(req.body);
            var result=await facture.save(); 
            res.send(result);
        } catch (error) {
            res.status(500).send(error);
            }
};


exports.afficherTout = (req, res) => {
    Facture.find().then(factures => {
        res.send(factures);
    })
    //envoyer le résultat
    .catch(err => {
    res.status(500).send({
    message: err.message || "Some error occurred while retrieving Factures."
    });
    });
};
exports.afficherUn= async (req, res) => {
    try {
        var n=await Facture.findById(req.params.factureId).exec();
        var result = await n.save();
        res.send(result);
    } catch (error) {
    res.status(500).send(error);
    }
};
exports.modifier = async(req, res) => {
        try 
        {
        var n =  await Facture.findById({ _id: req.params.factureId}).exec();
            n.factCod = req.body.factCod  ||"Updated factCod",
            n.factRemise = req.body.factRemise ||"Updated factRemise",
            n.factPrixUnit = req.body.factPrixUnit ||"Updated factPrixUnit",
            n.factPrixHT = req.body.factPrixHT ||"Updated factPrixHT",
            n.factPrixTotal = req.body.factPrixTotal ||"Updated factPrixTotal",
            n.factTva = req.body.factTva ||"Updated factTva"     
             var result = await n.save();
            res.send(result);
             }
        catch (error){
                res.status(400).send("unable to update the database");
          }
};
exports.supprimer= async (req, res) => {
    try {
        var result=await Facture.deleteOne({_id: req.params.factureId}).exec();
        res.send(result);
    } catch (error) {
    res.status(500).send(error);
    }
    };