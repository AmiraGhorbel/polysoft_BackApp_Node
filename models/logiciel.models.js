const mongoose=require("mongoose") ;
const logicielSchema=mongoose.Schema({
    logCode : String,
    logDesig : String,
    logDesc : String,
    logPrix : Number
},{ timestamps: true
    /* Définir timestamps. Lorsqu’on l’active, Mongoose ajoute les propriétés
    createdAt et updatedAt au schéma. */
    })
module.exports=mongoose.model('logiciel',logicielSchema);