const {productService} = require("../services");
const CustomError = require("../errors/CustomError");
module.exports = {
    isProductPresent: async (req, res, next) => {
        try {
            const {id} = req.params;

            const product = await productService.getProductById({_id: id});
            if (!product) {
                return next(new CustomError('Product not found', 400))
            }

            req.product = product;

            next();
        } catch (e) {
            next(e);
        }
    }
}
