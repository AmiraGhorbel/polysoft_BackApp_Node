const mongoose=require("mongoose") ;
const livraisonSchema=mongoose.Schema({
    livDesig : String,
    livDesc : String
},{ timestamps: true
    /* Définir timestamps. Lorsqu’on l’active, Mongoose ajoute les propriétés
    createdAt et updatedAt au schéma. */
    })
module.exports=mongoose.model('livraison',livraisonSchema);