const grpc = require('@grpc/grpc-js')
const protoLoader = require('@grpc/proto-loader')
const path = require('path')

const productProtoPath = path.join(__dirname, '..', 'protos', 'product.proto')
const productProto = protoLoader.loadSync(productProtoPath)
const { productPackage } = grpc.loadPackageDefinition(productProto)
const productServiceURL = 'localhost:4001'

//* Create Client
const productClient = new productPackage.ProductService(
  productServiceURL,
  grpc.credentials.createInsecure()
)

async function listProduct (req, res, next) {}
async function getProduct (req, res, next) {}
async function createProduct (req, res, next) {}
async function updateProduct (req, res, next) {}
async function deleteProduct (req, res, next) {}
