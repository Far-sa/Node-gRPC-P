const grpc = require('@grpc/grpc-js')
const protoLoader = require('@grpc/proto-loader')
const path = require('path')

const productProtoPath = path.join(
  __dirname,
  '..',
  '..',
  'protos',
  'product.proto'
)
const productProto = protoLoader.loadSync(productProtoPath)
const { productPackage } = grpc.loadPackageDefinition(productProto)
const productServiceURL = 'localhost:4001'

//* Create Client
const productClient = new productPackage.ProductService(
  productServiceURL,
  grpc.credentials.createInsecure()
)

function listProduct (req, res, next) {
  productClient.listProduct(null, (err, data) => {
    if (err) return res.json(err)
    return res.json(data)
  })
}
function getProduct (req, res, next) {}
function createProduct (req, res, next) {}
function updateProduct (req, res, next) {}
function deleteProduct (req, res, next) {}

module.exports = {
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  listProduct
}
