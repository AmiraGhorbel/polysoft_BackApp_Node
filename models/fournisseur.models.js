const mongoose=require("mongoose") ;
const fournisseurSchema=mongoose.Schema({
    fourId : String,
    fourNom : String,
    fourDesc : String,
    fourTel : String,
    fourEmail : String,
    fourAdresse : String
},{ timestamps: true
    /* Définir timestamps. Lorsqu’on l’active, Mongoose ajoute les propriétés
    createdAt et updatedAt au schéma. */
    })
module.exports=mongoose.model('fournisseur',fournisseurSchema);