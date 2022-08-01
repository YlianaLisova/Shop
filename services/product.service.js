const Product = require('../models/Product')

module.exports = {
    getAllProducts: (params = {}) => {
        return Product.find(params)
    },
    getProductById: (params = {}) => {
        return Product.findOne(params)
    },
    createProduct: (product) => {
        return Product.create(product);
    },
    deleteProductById: (params = {}) => {
        return Product.deleteOne(params);
    },
    updateProductById: (params, productData, options = {new: true}) => {
        return Product.findOneAndUpdate(params, productData, options)
    }
}
