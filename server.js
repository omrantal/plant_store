require('dotenv').config()
const colors = require('colors')
const express = require('express')
const cors = require('cors')
const port = process.env.PORT || 5000
const connectDB = require('./config/db')

const storeRoutes = require('./routes/storeRoutes')
const cartRoutes = require('./routes/cartRoutes')
const userRoutes = require('./routes/userRoutes')

// express app
const app = express()

// middleware
app.use(cors())
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/cart', cartRoutes)
app.use('/api/store', storeRoutes)
app.use('/api/user', userRoutes)

// connect to db
connectDB().then(() => {
  app.listen(port, () => console.log(`Server started on port ${port}`))
}).catch((error) => {
  console.log(error)
})
