let { readJson, writeJson, lastId, storeBool } = require('./helper');

let title = '';

let usersController = {
    login : (req,res) => {
        title = 'Ingresá';
        res.render('./users/login', { title } );
    },

    // 1 GET: show user list
    index: (req,res) => {
        let users = readJson('users.json');
        res.send(users);
    },

    // 2 GET: show user <form>
    register : (req,res) => {
        title = 'Crea tu cuenta';
        res.render('./users/register', { title } );
    },
    
    // 3 GET: show user detail
    show: (req,res) => {
        let users = readJson('users.json');
        let param = req.params.id
        users.forEach(user => {
            if (user.id == param) {
                res.send(user);
            };
        });
    },

    // 4 POST: store user & process register
    processRegister: (req,res) => {
        let users = readJson('users.json');
        let user = {
            id: lastId(users) + 1,
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            password: req.body.password,
            avatar: req.file.filename,
            newsletter: storeBool(req.body.newsletter),
        };
        users.push(user);
        writeJson(users, 'users');
        res.redirect('/');
    },

    // 5 GET: show <form> w/ current user data

    // 6 POST: submit changes to user

    // 7 DELETE: remove entry
};

module.exports = usersController;