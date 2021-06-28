let { readJson, writeJson, lastId, storeBool } = require('./helper');
let bcrypt = require('bcrypt');
// no implementado
// let { validationResult } = require('express-validator');

let usersController = {
    // GET: show login view
    login : (req,res) => {
        res.render('./users/login', { title: 'Ingresá' } );
    },

    // POST: process login
    processLogin: (req,res) => {
        // leo la DB de usuarios
        let users = readJson('users.json');
        // busco coincidencia 
        let userToLog;
        users.forEach(user => {
            if (user.email == req.body.email) {
                userToLog = user;
            };
        });
        // si encontré coincidencia
        if (userToLog) {
            // si coinciden las passwords
            if (bcrypt.compareSync(req.body.password, userToLog.password)) {
                delete userToLog.password;
                req.session.loggedUser = userToLog;
                res.redirect('/');
            };
            // si no hubo coincidencia de passwords
            res.render('./users/login', {
                title: 'Ingresá',
                oldEmail: req.body.email,
                errors: {
                    password: {
                        msg: 'Las credenciales no coinciden'
                    }
                }
            });
        };
        // si no hubo coincidencia de emails
        res.render('./users/login', {
            title: 'Ingresá', 
            oldEmail: req.body.email,
            errors: {
                email: {
                    msg: 'Revisá tu e-mail'
                }
            }
        });
    },
   
    // GET: show register view // <form>
    register : (req,res) => {
        res.render('./users/register', { title:'Crea tu cuenta' } );
    },

    // POST: process register // store user in DB
    processRegister: (req,res) => {
        let users = readJson('users.json');
        let user = {
            id: lastId(users) + 1,
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            avatar: req.file.filename,
            newsletter: storeBool(req.body.newsletter)
        };
        users.push(user);
        writeJson(users, 'users');
        res.redirect('/');
    },
    
    // GET: show users/:id view
    show: (req,res) => {
        let users = readJson('users.json');
        let param = req.params.id
        users.forEach(user => {
            if (user.id == param) {
                res.send(user);
            };
        });
    },
 
    // GET: show user list
    index: (req,res) => {
        let users = readJson('users.json');
        res.send(users);
    },

    // GET: show <form> w/ current user data
    // POST: submit changes to user
    // DELETE: remove entry
};

module.exports = usersController;