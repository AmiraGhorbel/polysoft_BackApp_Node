const Client =require('../models/client.models.js')
const router=require("express").Router() ;
const body=require("body-parser") ;
exports.creer= async (req, res) => { 
    try {
         var client= Client(req.body);
         
            var result=await client.save(); 
            res.send(result);
        } catch (error) {
            res.status(500).send(error);
            }
};


exports.afficherTout = async(req, res) => {
    try{
        var result = await Client.find();
        res.send(result);
    }
    catch(error) {
        res.status(500).send(error);
    }
};
exports.afficherUn= async (req, res) => {
    try {
        var n=await Client.findById(req.params.clientId).exec();
        var result = await n.save();
        res.send(result);
    } catch (error) {
    res.status(500).send(error);
    }
};
exports.modifier = async(req, res) => {
        try 
        {
        var n =  await Client.findById({ _id: req.params.clientId});
            n.clNom = req.body.clNom || "Updated nom" ; 
            n.clPrenom = req.body.clPrenom || "Updated prixArt" ;
            n.clMat=req.body.clMat || "updated Matricule" ;
            n.clCin = req.body.clCin  || "Updated qteArt" ;
            n.clMail = req.body.clMail || "Updated descArt" ;
            n.clTel = req.body.clTel || "Updated marque";
            n.clAdresse=req.body.clAdresse || "Updated clAdresse";
            n.clPass=req.body.clPass || "Updated clPass";
             var result = await n.save();
            res.send(result);
             }
        catch (error){
                res.status(400).send("unable to update the database");
          }
};
exports.supprimer= async (req, res) => {
    try {
        var result=await Client.deleteOne({_id: req.params.clientId}).exec();
        res.send(result);
    } catch (error) {
    res.status(500).send(error);
    }
};