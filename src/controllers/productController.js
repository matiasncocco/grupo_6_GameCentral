let productController = {
    renderProduct: (req, res) => {
        let idGames = req.params.id
        
        
        res.render()
    },
    renderCart: (req, res) => {
        let title = 'Carrito de compras';
        res.render('./products/shopping-cart', {'title': title})
    }
}

module.exports = productController