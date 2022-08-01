const router = require('express').Router();
const {productController} = require("../controllers");
const {productMiddleware} = require("../middlewares");

router.get('/', productController.getAllProducts);
router.post('/', productController.createProduct)

router.put('/:id', productController.updateProductById);
router.get('/:id', productMiddleware.isProductPresent, productController.getProductById);
router.delete('/:id', productController.deleteProductById)

module.exports = router;
