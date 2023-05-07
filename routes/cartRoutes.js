const express = require('express')

const {
  getFromCart,
  getSinglePlant,
  addToCart,
  deleteFromCart,
  updateInCart
} = require('../controllers/cartController')

const { requireAuth } = require('../middleware/requireAuth')
  
const router = express.Router()

// require auth for all cart routes
router.use(requireAuth)

// GET all plants from cart
router.get('/', getFromCart)

// GET a single plant from cart
router.get('/:name', getSinglePlant)

// POST a new plant to cart
router.post('/', addToCart)

// DELETE a plant from cart
router.delete('/:id', deleteFromCart)

// UPDATE a plant in cart
router.put('/:id', updateInCart)

module.exports = router