let productController = {
    renderProduct: (req, res) => {
        let title = 'Hades';
        res.render('./products/Hades', {'title': title})
    },
    renderCart: (req, res) => {
        let title = 'Carrito de compras';
        res.render('./products/shopping-cart', {'title': title})
    },
    renderNewProduct: (req, res) => {
        let title = 'Nuevo producto';
        res.render('./products/new-product', {'title': title})
    }
}

module.exports = productController