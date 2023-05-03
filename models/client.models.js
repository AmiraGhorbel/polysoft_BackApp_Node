const mongoose = require('mongoose');
const clientSchema = mongoose.Schema({
//Définir les champs
    clMat : String,
    clNom :String,
    clPrenom:String,
    clCin:String,
    clMail:String,
    clTel:String,
    clAdresse:String,
    clPass:String,
    clCodePostal:String
}, { timestamps: true
/* Définir timestamps. Lorsqu’on l’active, Mongoose ajoute les propriétés
createdAt et updatedAt au schéma. */
});
module.exports = mongoose.model('client', clientSchema);