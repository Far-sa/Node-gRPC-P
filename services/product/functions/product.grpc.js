const ProductModel = require('../model/product.model')

async function listProduct (call, callback) {
  try {
    const products = await ProductModel.find({})
    callback(null, { products })
  } catch (err) {
    callback(err, null)
  }
}
async function getProduct (call, callback) {}
async function createProduct (call, callback) {
  try {
    const { title, price } = call.request
    await ProductModel.create({ title, price })
    callback(null, { status: 'Product has been created  successfully' })
  } catch (err) {
    callback(err, null)
  }
}
async function updateProduct (call, callback) {}
async function deleteProduct (call, callback) {}

module.exports = {
  listProduct,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
}
