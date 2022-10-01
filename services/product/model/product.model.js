const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  id: { type: Number },
  title: { type: String },
  price: { type: String }
})

//* Generate ID
ProductSchema.pre('save', function (next) {
  const self = this
  self.constructor.count(async function (err, data) {
    if (err) return next(err)
    mongoose.model.set({ id: data + 1 })
    next()
  })
})

module.exports = mongoose.model('Product', ProductSchema)
