const mongoose = require('mongoose');
const factureSchema = mongoose.Schema({
//Définir les champs
    factCod:String,
    factRemise:Number,
    factPrixHT:Number,
    factPrixUnit:Number,
    factTva:Number,
    factPrixTotal:Number
}, { timestamps: true
/* Définir timestamps. Lorsqu’on l’active, Mongoose ajoute les propriétés
createdAt et updatedAt au schéma. */
});
module.exports = mongoose.model('facture', factureSchema);