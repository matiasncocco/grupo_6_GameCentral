let title = '';

let userController = {
    login : (req, res) => {
        title = 'Ingresá';
        res.render('./users/login', { title } )
    },

    register : (req, res) => {
        title = 'Crea tu cuenta';
        res.render('./users/register', { title } )
    },
    
    // store (post = add entry)
    // index (show all users)
    // edit (get = view current user detail)
    // update (post put = submit changes)
    // destroy (post delete = remove user)
};

module.exports = userController