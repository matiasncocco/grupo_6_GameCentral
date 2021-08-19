let db = require('../database/models');

let mainController = {
    index: (req, res) => {
        db.Game.findAll({
            include: [
                'status'
            ]
        })
            .then(games => {
                res.render('index', {
                    title: 'Game Central',
                    games
                });
            })
            .catch(err => {
                res.send(err);
            });
    },
    
    termsConditions: (req, res) => {
        res.render('terms-conditions', {
            title: 'Términos y condiciones' 
        });
    },

    contact: (req, res) => {
        res.render('contact', {
            title: 'Contacto'
        });
    },

    processContact: (req, res) => {
        res.send({
            body: req.body
        })
    }
};

module.exports = mainController;