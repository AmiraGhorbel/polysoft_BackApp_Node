const Livraison = require('../models/livraison.models.js')
const router=require("express").Router() 
const body=require("body-parser") 
router.use(body.json()); 
// Créer et sauvegarder une nouvelle Article 
exports.creer= async (req, res) => { 
    try { 
         var livraison= Livraison(req.body);
            var result=await livraison.save(); 
            res.send(result);
        } catch (error) {
            res.status(500).send(error);
            }
};


exports.afficherTout = (req, res) => {
    Livraison.find().then(livraisons => {
        res.send(livraisons);
    })
    //envoyer le résultat
    .catch(err => {
    res.status(500).send({
    message: err.message || "Some error occurred while retrieving livraison."
    });
    });
};
exports.afficherUn= async (req, res) => {
    try {
        var n=await Livraison.findById(req.params.livraisonId).exec();
        var result = await n.save();
        res.send(result);
    } catch (error) {
    res.status(500).send(error);
    }
};
exports.modifier = async(req, res) => {
        try 
        {
        var n =  await Livraison.findById({ _id: req.params.livraisonId}).exec();
            n.livDesig = req.body.livDesig  ||"Updated livDesig",
            n.livDesc = req.body.factRemise ||"Updated livDesc"     
             var result = await n.save();
            res.send(result);
             }
        catch (error){
                res.status(400).send("unable to update the database");
          }
};
exports.supprimer= async (req, res) => {
    try {
        var result=await Livraison.deleteOne({_id: req.params.livraisonId}).exec();
        res.send(result);
    } catch (error) {
    res.status(500).send(error);
    }
    };