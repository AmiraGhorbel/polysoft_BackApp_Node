module.exports = (app) => {
    const logins = require('../controllers/admin.controllers.js');
    app.post('/logins',logins.creer);
}