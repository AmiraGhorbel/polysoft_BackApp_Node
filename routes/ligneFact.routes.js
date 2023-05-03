module.exports = (app) => {
    const ligneFacts=require('../controllers/ligneFact.controllers.js')
    app.post('/ligneFacts',ligneFacts.creer); 
    app.get('/ligneFacts',ligneFacts.afficherTout);
    app.get('/ligneFacts/:ligneFactId',ligneFacts.afficherUn);
    app.put('/ligneFacts/:ligneFactId',ligneFacts.modifier);
    app.delete('/ligneFacts/:ligneFactId',ligneFacts.supprimer)
}