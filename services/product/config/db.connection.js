const mongoose = require('mongoose')

const uri = 'mongodb://localhost:27017/grpc-nodejs'

// const connectDB = async () => {
//   try {
//     const conn = mongoose.connect(uri)
//     console.log(`Database Connected to ${conn.connection.host}`)
//   } catch (error) {
//     console.log(error.message)
//     process.exit(0)
//   }
// }

//module.exports = connectDB

//*
module.exports = mongoose
  .connect('mongodb://localhost:27017/grpc-nodejs')
  .then(() => console.log('Connected to db!'))
  .catch(err => console.log(err.message))
