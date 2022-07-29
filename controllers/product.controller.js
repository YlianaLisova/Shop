const {productService} = require("../services");
module.exports = {
    getAllProducts: async (req, res, next) => {
        try {
            const products = await productService.getAllProducts(req.query).exec();

            res.json(products);
        } catch (e) {
            next(e);
        }
    },

    getProductById: async (req, res, next) => {
        try {
            const {product} = req;


            res.json(product);
        } catch (e) {
            next(e);
        }
    },
    createProduct: async (req, res, next) => {
        try{
            const product = await productService.createProduct({...req.body});

            res.status(201).json(product)
        }catch (e) {
            next(e);
        }
    },

    deleteProductById: async (req, res, next) => {
        try{
            const {id} = req.params;
            await productService.deleteProductById({_id: id});

            res.status(204).json('User was deleted');
        }catch (e) {
            next(e);
        }
    }
}
