module.exports = (app) => {
    const activites = require('../controllers/activite.controllers.js');
    app.post('/activites',activites.creer);
    app.get('/activites',activites.afficherTout);
    app.get('/activites/:activiteId',activites.afficherUn);
    app.put('/activites/:activiteId',activites.modifier);
    app.delete('/activites/:activiteId',activites.supprimer)
}