const LigneFact=require('../models/ligneFact.models.js')
const router=require("express").Router() 
const body=require("body-parser") 
router.use(body.json()); 
const Commande=require('../models/commande.models.js');
const Facture=require('../models/facture.models.js');
const Livraison=require('../models/livraison.models.js');
const Client=require('../models/client.models.js');
// Créer et sauvegarder une nouvelle Article 
exports.creer= async (req, res) => { 
    try { 
         var ligneFact= LigneFact(req.body);
            var result=await ligneFact.save(); 
            res.send(result);
        } catch (error) {
            res.status(500).send(error);
            }
};


exports.afficherTout = async(req, res) => {
    try{
        var result = await LigneFact.find().populate('commande').populate('facture').populate('livraison').populate('client');
        res.send(result);
    }
    catch(error) {
        res.status(500).send(error);
    }
};
exports.afficherUn= async (req, res) => {
    try {
        var n=await LigneFact.findById(req.params.ligneFactId).populate('commande').populate('facture').populate('livraison').populate('client').exec();
        var result = await n.save();
        res.send(result);
    } catch (error) {
    res.status(500).send(error);
    }
};
exports.modifier = async(req, res) => {
        try 
        {
        var n =  await LigneFact.findById({ _id: req.params.ligneFactId}).exec();
            n.qteStock = req.body.qteStock  ||"Updated qteStock",
            n.commande = req.body.commande ||"Updated commande",
            n.facture = req.body.facture ||"Updated facture",
            n.livraison = req.body.livraison ||"Updated livraison" ,
            n.client = req.body.client ||"Updated client"     
             var result = await n.save();
            res.send(result);
             }
        catch (error){
                res.status(400).send("unable to update the database");
          }
};
exports.supprimer= async (req, res) => {
    try {
        var result=await LigneFact.deleteOne({_id: req.params.ligneFactId}).exec();
        res.send(result);
    } catch (error) {
    res.status(500).send(error);
    }
    };