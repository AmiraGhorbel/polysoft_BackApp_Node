module.exports = (app) => {
    const logiciels = require('../controllers/logiciel.controllers.js');
    app.post('/logiciels',logiciels.creer);
    app.get('/logiciels',logiciels.afficherTout);
    app.get('/logiciels/:logicielId',logiciels.afficherUn);
    app.put('/logiciels/:logicielId',logiciels.modifier);
    app.delete('/logiciels/:logicielId',logiciels.supprimer)
}