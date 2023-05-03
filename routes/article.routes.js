module.exports = (app) => {
    const articles = require('../controllers/article.controllers.js');
    app.post('/articles',articles.creer); 
    app.get('/articles',articles.afficherTout);
    app.get('/articles/:articleId',articles.afficherUn);
    app.put('/articles/:articleId',articles.modifier);
    app.delete('/articles/:articleId',articles.supprimer)
}