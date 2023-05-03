const Commande = require('../models/commande.models.js'); 
const router=require("express").Router() 
const body=require("body-parser") 
const Article= require('../models/article.models.js');
exports.creer= async (req, res) => { 
    try {
         var commande= Commande(req.body);
         
            var result=await commande.save(); 
            res.send(result);
        } catch (error) {
            res.status(500).send(error);
            }
};


exports.afficherTout = async(req, res) => {
    try{
        var result = await Commande.find().populate('article');
        res.send(result);
    }
    catch(error) {
        res.status(500).send(error);
    }
};
exports.afficherUn= async (req, res) => {
    try {
        var n=await Commande.findById(req.params.commandeId).populate('article').exec();
        var result = await n.save();
        res.send(result);
    } catch (error) {
    res.status(500).send(error);
    }
};
exports.modifier = async(req, res) => {
        try 
        {
        var n =  await Commande.findById({ _id: req.params.commandeId});
            n.comDate = req.body.comDate || "Updated comDate"   
            n.comQte = req.body.comQte || "Updated comTotPrix" ;
            n.comDesc = req.body.comDesc  || "Updated comDesc" ;
            n.article=req.body.article|| "Updated article";
             var result = await n.save();
            res.send(result);
             }
        catch (error){
                res.status(400).send("unable to update the database");
          }
};
exports.supprimer= async (req, res) => {
    try {
        var result=await Commande.deleteOne({_id: req.params.commandeId}).exec();
        res.send(result);
    } catch (error) {
    res.status(500).send(error);
    }
};