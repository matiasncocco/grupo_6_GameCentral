let userController = {
    renderLogin : (req, res) => {
        let title = 'Ingresar';
        res.render('./users/login', {'title': title})
    },
    renderRegister : (req, res) => {
        let title = 'Registrarse';
        res.render('./users/register', {'title': title})
    }
}

module.exports = userController