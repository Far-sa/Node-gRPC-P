const ProductModel = require('../model/product.model')

async function listProduct (call, callback) {
  try {
    const products = await ProductModel.find({})
    callback(null, { products })
  } catch (err) {
    callback(err, null)
  }
}
async function getProduct (call, callback) {
  try {
    const { id } = call.request
    const product = await ProductModel.findOne({ id })
    callback(null, product)
  } catch (err) {
    callback(err, null)
  }
}
async function createProduct (call, callback) {
  try {
    const { title, price } = call.request
    await ProductModel.create({ title, price })
    callback(null, { status: 'Product has been created  successfully' })
  } catch (err) {
    callback(err, null)
  }
}
async function updateProduct (call, callback) {
  try {
    const { id } = call.request
    const data = call.request
    delete data.id
    const result = await ProductModel.updateOne({ id }, { $set: data })
    if (result.modifiedCount > 0)
      return callback(null, { status: 'Process updated' })
    return callback({ message: 'failed to update' }, null)
  } catch (error) {
    callback(error, null)
  }
}

async function deleteProduct (call, callback) {
  try {
    const { id } = call.request
    const result = await ProductModel.deleteOne({ id })
    if (result.deletedCount > 0)
      return callback(null, { status: 'Product has been deleted' })
    return callback({ message: 'Process failed' }, null)
  } catch (err) {
    callback(err, null)
  }
}

module.exports = {
  listProduct,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
}
