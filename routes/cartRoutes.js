// const express = require('express')

// const {
//   getFromCart,
//   addToCart,
//   deleteFromCart,
//   updateInCart,
//   deleteCart
// } = require('../controllers/cartController')

// const { requireAuth } = require('../middleware/requireAuth')
  
// const router = express.Router()

// // require auth for all cart routes
// router.use(requireAuth)

// // GET all plants from cart
// router.get('/', getFromCart)

// // POST a new plant to cart
// router.post('/:id', addToCart)

// // DELETE a plant from cart
// router.delete('/:id', deleteFromCart)

// // UPDATE a plant in cart
// router.put('/:id', updateInCart)

// // DELETE cart
// router.delete('/', deleteCart)

// module.exports = router