const Article = require('../models/article.models.js'); 
const router=require("express").Router() 
const body=require("body-parser") 
const Fournisseur=require('../models/fournisseur.models.js');
exports.creer= async (req, res) => { 
    try {
         var article=new Article(req.body);
         
            var result=await article.save(); 
            res.send(result);
        } catch (error) {
            res.status(500).send(error);
            }
};
exports.afficherTout = async(req, res) => {
    try{
        var result = await Article.find().populate('fournisseur');
        res.send(result);
    }
    catch(error) {
        res.status(500).send(error);
    }
};
exports.afficherUn= async (req, res) => {
    try {
        var n=await Article.findById(req.params.articleId).populate('fournisseur').exec();
        var result = await n.save();
        res.send(result);
    } catch (error) {
    res.status(500).send(error);
    }
};
exports.modifier = async(req, res) => {
        try 
        {
        var n =  await Article.findById({ _id: req.params.articleId});
            n.id=req.body.id || "Updated id"
            n.artDesig = req.body.artDesig || "Updated designation"   
            n.price = req.body.price || "Updated prixArt" ;
            n.artQte = req.body.artQte  || "Updated qteArt" ;
            n.artDesc = req.body.artDesc || "Updated descArt" ;
            n.artMarque = req.body.artMarque || "Updated marque";
            n.img=req.body.img || "Updated image";
            n.fournisseur=req.body.fournisseur|| "Updated fournisseur";
             var result = await n.save();
            res.send(result);
             }
        catch (error){
                res.status(400).send("unable to update the database");
          }
};
exports.supprimer= async (req, res) => {
    try {
        var result=await Article.deleteOne({_id: req.params.articleId}).exec();
        res.send(result);
    } catch (error) {
    res.status(500).send(error);
    }
};