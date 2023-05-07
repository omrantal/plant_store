const Cart = require('../models/cartModel')
const mongoose = require('mongoose')

// get all plants from cart
const getFromCart = async (req, res) => {
  const userId = req.user._id
  const cart = await Cart.find({ userId })
  
  res.status(200).json(cart)
}

const getSinglePlant = async (req, res) => {
  const userId = req.user._id
  const { name } = req.params

  const plant = await Cart.findOne({ userId, name })

  if (!plant) {
    return res.status(404).json({ error: 'No such plant' })
  }
  
  res.status(200).json(plant)
}

// add plant to cart
const addToCart = async (req, res) => {
  const plant = req.body
  
  // add doc to db
  try {
    const userId = req.user._id
    const newPlant = await Cart.create({ ...plant, userId })
    res.status(200).json(newPlant)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// update plant in cart
const updateInCart = async (req, res) => {
  const { id } = req.params
  const { numOfPieces, price } = req.body

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such plant' })
  }

  const plant = await Cart.findOneAndUpdate({ _id: id }, { numOfPieces, price })

  if (!plant) {
    return res.status(400).json({ error: 'No such plant' })
  }

  res.status(200).json(plant)
}

// delete plant from cart
const deleteFromCart = async (req, res) => {
  const { id } = req.params
  
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such plant' })
  }

  const plant = await Cart.findOneAndDelete({ _id: id })

  if (!plant) {
    return res.status(400).json({ error: 'No such plant' })
  }

  res.status(200).json(plant)
}

module.exports = {
  getFromCart,
  getSinglePlant,
  addToCart,
  deleteFromCart,
  updateInCart
}