const router = require("express").Router()
const body = require("body-parser")
router.use(body.json());

var admins=[
    {
        login: 'amira',
        password: 'amiraa'
    }
]

// Créer et sauvegarder une nouvelle commande 
exports.creer = async (req, res) => {
    try {
        let result = admins.find(admin => admin.login == req.body.login);
        if (result) {
            if (result.password == req.body.password) {
                res.status(200).send({
                    message: "Successful login!!"
                })
            } else {
                res.status(200).send({
                    message: "Password incorrect!!"
                })
            }
        }
        else {
            res.status(200).send({
                message: "Admin not found!!"
            })
        }
} catch (error) {
    res.status(500).send(error);
}
};