const router = require('express').Router()

const productController = require('../controller/product.controller')

router.get('/list', productController.listProduct)
router.get('/create', productController.createProduct)
router.get('/update', productController.updateProduct)
router.get('delete/:id', productController.deleteProduct)
router.get('/:id', productController.getProduct)

module.exports = router
