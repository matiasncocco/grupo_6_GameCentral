let mainController = {
    renderHome: (req, res) => {
        let title = 'Game Central'
        res.render('index', {'title': title});
    } 
}

module.exports = mainController;

