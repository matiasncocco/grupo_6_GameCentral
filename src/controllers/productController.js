let productController = {
    renderProduct: (req, res) => {
        res.render(req.params.idProduct)
    }
}

module.exports = productController