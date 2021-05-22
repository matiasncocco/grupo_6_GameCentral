let title = '';

// lógica para parse mi json

let productController = {
    // 1 index (show all)

    // 2
    create: (req,res) => {
        title = 'Nuevo producto';
        res.render('./products/create',{title});
    },

    // 3
    show: (req,res) => {
        let gameId = req.params.id;
        for (i = 0 ; i < products.length ; i++) {
            if (gameId == products[i].id) {
                return products[i];
            };
        };
        res.render('./products/detail',{'product':products[i]});
    },
    
    // 4
    // store (post = add entry, send complete form)

    // 5
    // edit (get = view current)

    // 6
    // update (post put = submit changes)

    // 7
    // destroy (post delete = remove item)
};

module.exports = productController;