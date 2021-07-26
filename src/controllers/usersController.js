let { readJson, writeJson, storeBool, numberOrNull } = require('./helper');
let bcrypt = require('bcrypt');
let { validationResult } = require('express-validator');

let db = require('../database/models');

let usersController = {
    // GET: show register view // <form>
    // sequelize: en progreso
    register : (req,res) => {
        res.render('./users/register', {
            title: 'Crea tu cuenta'
        });
    },

    // POST: process register // store user in DB
    // ¡LISTO POR SEQUELIZE!
    processRegister: async (req,res) => {
        let oldData = req.body;
        let user = await db.User.findOne({
            where: {
                email: req.body.email
            }
        });
        try {
            if (user === null) {
                return db.User.create({
                    name: req.body.name,
                    surname: req.body.surname,
                    email: req.body.email,
                    password: bcrypt.hashSync(req.body.password, 10),
                    avatar: req.file.filename,
                    newsletter: numberOrNull(req.body.newsletter)
                })
                .then(() => {
                    res.redirect('/users/profile');
                })
                .catch(err => {
                    res.status(500).render('error', {
                        status: 500,
                        title: 'ERROR',
                        errorDetail: err
                    });
                });
            } else {
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
        }
        catch(err) {
            res.status(500).render('error', {
                status: 500,
                title: 'ERROR',
                errorDetail: err
            });
        };
    },

    // GET: show login view
    // ¡LISTO POR SEQUELIZE!
    login : (req,res) => {
        res.render('./users/login', {
            title: 'Ingresá' 
        });
    },

    // POST: process login
    // ¡LISTO POR SEQUELIZE!
    processLogin: async (req,res) => {
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
        // de acá para arriba lo puedo hacer en validaciones en la ruta

        // LÓGICA PARA LOGEAR EL USUARIO:
        // leo la tabla de usuarios
        // busco coincidencia
        // y obtengo usuario a logearse
        let userToLog = await db.User.findOne({
            where: {
                email: req.body.email
            }
        })        
        try {
            if (userToLog != null) {
                // si encontré coincidencia
                if (!req.body.password) {
                    // no completan el campo password
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
                // variable de coincidencia de passwords
                let passwordsMatch = bcrypt.compareSync(req.body.password, userToLog.password);
                if (passwordsMatch) {
                    // si hay match de passwords
                    delete userToLog.password;
                    req.session.loggedUser = userToLog;
                    if (req.body.remember) {
                        // si eligen "recordarme"
                        res.cookie('userEmail', req.body.email, {
                            maxAge: (1000 * 60) * 30 
                        });
                        return res.redirect('/users/profile');
                    };
                    // si no eligen recordarme
                    return res.redirect('/users/profile');
                } else {
                    // si no hay match en las passwords
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
        }
        catch(err) {
            res.status(500).render('error', {
                status: 500,
                title: 'ERROR',
                errorDetail: err
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