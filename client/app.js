const express = require('express')

const app = express()

//* Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//* Routes
app.use('/', require('./routes/index.routes'))

app.listen(4000, () => {
  console.log('Client is running on Port 4000')
})
