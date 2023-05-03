module.exports = (app) => {
    const livraisons=require('../controllers/livraison.controllers.js')
    app.post('/livraisons',livraisons.creer); 
    app.get('/livraisons',livraisons.afficherTout);
    app.get('/livraisons/:livraisonId',livraisons.afficherUn);
    app.put('/livraisons/:livraisonId',livraisons.modifier);
    app.delete('/livraisons/:livraisonId',livraisons.supprimer)
}