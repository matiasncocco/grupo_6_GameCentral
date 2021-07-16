let { readJson, writeJson, lastId, storeBool } = require('./helper');
let bcrypt = require('bcrypt');
let { validationResult } = require('express-validator');

let db = require('../database/models');

let usersController = {
    // GET: show register view // <form>
    register : (req,res) => {
        res.render('./users/register', {
            title: 'Crea tu cuenta' 
        });
    },

    // POST: process register // store user in DB
    processRegister: (req,res) => {
        let users = readJson('users.json');
        let validations = validationResult(req);
        if (validations.errors.length > 0) {
            let oldData = req.body;
            let emails = [];
            users.forEach(user => {
                emails.push(user.email);
            });
            if (emails.includes(req.body.email)) {
                return res.render('./users/register', {
                    title: 'Crea tu cuenta',
                    oldData,
                    errors: {
                        email: {
                            msg: 'El e-mail ya está en uso'
                        }
                    }
                });
            };
            return res.render('./users/register', {
                title: 'Crea tu cuenta',
                oldData,
                errors: validations.mapped()
            })
        } else {
            let user = {
                id: lastId(users) + 1,
                name: req.body.name,
                surname: req.body.surname,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),
                // avatar: req.file.filename,
                newsletter: storeBool(req.body.newsletter),
                admin: false,
            };
            users.push(user);
            writeJson(users, 'users');
            return res.redirect('/users/login');
        };
    },

    // GET: show login view
    login : (req,res) => {
        res.render('./users/login', {
            title: 'Ingresá' 
        });
    },

    // POST: process login
    processLogin: (req,res) => {
        // si se envía con campos vacíos
        if (!req.body.email && !req.body.password) {
            return res.render('./users/login', {
                title: 'Ingresá',
                errors: {
                    email: {
                        msg: 'Debes ingresar tu e-mail'
                    },
                    password: {
                        msg: 'Debes ingresar tu contraseña'
                    }
                }
            });
        };
        // si se envía con campo e-mail vacío 
        if (!req.body.email) {
            return res.render('./users/login', {
                title: 'Ingresá',
                errors: {
                    email: {
                        msg: 'Debes ingresar tu e-mail'
                    }
                }
            });
        };
        // leo la DB de usuarios
        let users = readJson('users.json');
        // busco coincidencia
        let userToLog;
        users.forEach(user => {
            if (user.email == req.body.email) {
            userToLog = user;
            return userToLog;
            };
        });
        // si encontré coincidencia
        if (userToLog) {
            // si no completan el campo password
            if (!req.body.password) {
                return res.render('./users/login', {
                    title: 'Ingresá',
                    oldEmail: req.body.email,
                    errors: {
                        password: {
                            msg: 'Debes ingresar tu contraseña'
                        }
                    }
                });
            };
            // si coinciden las passwords
            let passwordsMatch = bcrypt.compareSync(req.body.password, userToLog.password);
            if (passwordsMatch) {
                delete userToLog.password;
                req.session.loggedUser = userToLog;
                // si eligen "recordarme"
                if (req.body.remember) {
                    res.cookie('userEmail', req.body.email, {
                        maxAge: (1000 * 60) * 30 
                    });
                    return res.redirect('/users/profile');
                };
                // si no eligen recordarme
                return res.redirect('/users/profile');
            } else {
                // si no hubo coincidencia de passwords
                return res.render('./users/login', {
                    title: 'Ingresá',
                    oldEmail: req.body.email,
                    errors: {
                        password: {
                            msg: 'Las credenciales no coinciden'
                        }
                    }
                });
            };
        } else {
            // si no hubo coincidencia de emails
            return res.render('./users/login', {
                title: 'Ingresá',
                oldEmail: req.body.email,
                errors: {
                    email: {
                        msg: 'Revisá tu e-mail'
                    }
                }
            });
        };        
    },
    
    // GET: show users/:id view
    show: (req,res) => {
        let user = req.session.loggedUser;
        res.render('./users/profile', {
            title: user.name + ' ' + user.surname,
            user
        });
    },

    // GET: destroy session & cookie
    delog: (req,res) => {
        req.session.destroy();
        res.clearCookie('userEmail');
        res.redirect('/');
    },
 
    // GET: show user list
    index: (req,res) => {
        db.User.findAll()
            .then(users => {
                res.render('./users/index', {
                    title: 'Usuarios',
                    users
                });
            })
            .catch(err => {
                res.send(err);
            });
    },

    // GET: show <form> to change or not admin
    admin: (req,res) => {
        let users = readJson('users.json');
        let param = req.params.id;
        users.forEach(user => {
            if (param == user.id) {
                res.render('./users/give-admin', {
                    title: 'Privilegios',
                    user
                });
            };
        });
    },

    // PUT: changes user admin status (true || false)
    giveAdmin: (req,res) => {
        let users = readJson('users.json');
        let param = req.params.id;
        users.forEach(user => {
            if (param == user.id) {
                user.admin = storeBool(req.body.admin);
                writeJson(users, 'users');
                return res.redirect('/users');
            };
        });
    },

    // GET: show <form> w/ current user data
    // POST: submit changes to user
    // DELETE: remove entry.
};

module.exports = usersController;