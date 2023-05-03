const mongoose=require("mongoose") ;
const activiteSchema=mongoose.Schema({
    actCode : String,
    actDesig : String,
    actDesc : String
},{ timestamps: true,
    /* Définir timestamps. Lorsqu’on l’active, Mongoose ajoute les propriétés
    createdAt et updatedAt au schéma. */
    })
module.exports=mongoose.model('activite',activiteSchema);