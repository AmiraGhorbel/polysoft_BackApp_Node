const mongoose = require('mongoose');
const commandeSchema = mongoose.Schema({
//Définir les champs
    comDate : String,
    comQte : Number,
    comDesc : String,
    article:{type:mongoose.Schema.Types.ObjectId,
        ref:'article'
    
    },
}, { timestamps: true
/* Définir timestamps. Lorsqu’on l’active, Mongoose ajoute les propriétés
createdAt et updatedAt au schéma. */
});
module.exports = mongoose.model('commande', commandeSchema);