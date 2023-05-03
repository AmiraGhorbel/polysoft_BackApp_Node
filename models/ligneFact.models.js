const mongoose = require('mongoose');
const ligneFactSchema = mongoose.Schema({
//Définir les champs
    qteStock:Number,
    commande:{type:mongoose.Schema.Types.ObjectId,
        ref:'commande'
    },
    facture:{type:mongoose.Schema.Types.ObjectId,
        ref:'facture'
    },
    livraison:{type:mongoose.Schema.Types.ObjectId,
        ref:'livraison'
    },
    client:{type:mongoose.Schema.Types.ObjectId,
        ref:'client'
    },
}, { timestamps: true
/* Définir timestamps. Lorsqu’on l’active, Mongoose ajoute les propriétés
createdAt et updatedAt au schéma. */
});
module.exports = mongoose.model('ligneFact', ligneFactSchema);