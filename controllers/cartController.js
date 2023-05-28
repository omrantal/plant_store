const Cart = require('../models/cartModel')
const Store = require('../models/storeModel')
const mongoose = require('mongoose')

// get all plants from cart
const getFromCart = async (req, res) => {
  const userId = req.user._id
  const cart = await Cart.find({ userId })

  res.status(200).json(cart)
}

// add plant to cart
const addToCart = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such plant' })
  }

  const plant = await Store.findById(id)

  if (!plant) {
    return res.status(404).json({ error: 'No such plant' })
  }

  const { name, image, type, price } = plant
  const userId = (req.user._id).toString()

  let mid = Math.floor(userId.length / 2)
  let firstHalf = userId.slice(0, mid)
  let secondHalf = id.slice(mid)
  let newId = firstHalf + secondHalf

  try {
    const newPlant = await Cart.create({ _id: newId, name, image, type, price, numOfPieces: 1, priceForPiece: price, userId })
    res.status(200).json(newPlant)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// update plant in cart
const updateInCart = async (req, res) => {
  const { id } = req.params
  const { change } = req.body
  const userId = (req.user._id).toString()

  let mid = Math.floor(userId.length / 2)
  let firstHalf = userId.slice(0, mid)
  let secondHalf = id.slice(mid)
  let newId = firstHalf + secondHalf

  if (!mongoose.Types.ObjectId.isValid(newId)) {
    return res.status(404).json({ error: 'No such plant' })
  }

  const { numOfPieces, price, priceForPiece } = await Cart.findById(newId)

  let newNumOfPieces
  let newPrice
  if (change === 'add') {
    newNumOfPieces = numOfPieces + 1
    newPrice = price + priceForPiece
  } else {
    if (numOfPieces === 1) return null
    newNumOfPieces = numOfPieces - 1
    newPrice = price - priceForPiece
  }

  const plant = await Cart.findOneAndUpdate({ _id: newId }, { numOfPieces: newNumOfPieces, price: newPrice }, { new: true })

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

// delete all cart
const deleteCart = async (req, res) => {
  const userId = req.user._id
  try {
    const cart = await Cart.deleteMany({ userId })
    res.status(200).json({ message: 'cart is deleted' })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = {
  getFromCart,
  addToCart,
  deleteFromCart,
  updateInCart,
  deleteCart
}