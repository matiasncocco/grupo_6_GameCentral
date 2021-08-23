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
                res.status(500).render('error', {
                    status: 500,
                    title: 'ERROR',
                    errorDetail: err
                });
            });
    },
    
    termsConditions: (req, res) => {
        res.render('terms-conditions', {
            title: 'Términos y condiciones' 
        });
    },

    // en construcción
    contact: (req, res) => {
        res.render('contact', {
            title: 'Contacto'
        });
    },

    // en construcción
    processContact: (req, res) => {
        res.send({
            body: req.body
        });
    }
};

module.exports = mainController;