const mongoose = require('mongoose');
const articleSchema = mongoose.Schema({
//Définir les champs
    id:Number,
    artDesig : String,
    price : Number,
    artQte : String,
    artDesc : String,
    artMarque: String,
    img: String,
    fournisseur:{type:mongoose.Schema.Types.ObjectId,
        ref:'fournisseur'

    },
}, { timestamps: true
/* Définir timestamps. Lorsqu’on l’active, Mongoose ajoute les propriétés
createdAt et updatedAt au schéma. */
});
module.exports = mongoose.model('article', articleSchema);