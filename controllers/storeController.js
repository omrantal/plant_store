const Store = require('../models/storeModel')
const mongoose = require('mongoose')

// get all plants from store
const getFromStore = async (req, res) => {
  const plants = await Store.find({})
  
  res.status(200).json(plants)
}
  
// get a single plant
const getSinglePlant = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such plant' })
  }

  const plant = await Store.findById(id)

  if (!plant) {
    return res.status(404).json({ error: 'No such plant' })
  }
  
  res.status(200).json(plant)
}
  
  
// add plant to store
const addToStore = async (req, res) => {
  //const plant = req.body
  const { image, name, price, type, title, watering, light } = req.body
  
  // validation
  if (!image || !name || !price || !type || !title || !watering || !light) {
    //throw Error('All fields must be filled')
    return res.status(404).json({ error: 'All fields must be filled' })
  }

  try {
    const plant = await Store.create(req.body)

    if (!plant) {
      throw Error('Failed to add plant')
    }
    
    res.status(200).json(plant)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// update plant in store
const updateInStore = async (req, res) => {
  const { id } = req.params
  const { image, name, price, type, title, watering, light } = req.body

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such plant' })
  }

  // validation
  if (!image || !name || !price || !type || !title || !watering || !light) {
    //throw Error('All fields must be filled')
    return res.status(404).json({ error: 'All fields must be filled' })
  }

  const plant = await Store.findOneAndUpdate({ _id: id }, { ...req.body })

  if (!plant) {
    return res.status(400).json({ error: 'No such plant' })
  }

  res.status(200).json(plant)
}
  
// delete plant from store
const deleteFromStore = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such palnt' })
  }

  const plant = await Store.findOneAndDelete({ _id: id })

  if (!plant) {
    return res.status(400).json({ error: 'No such plant' })
  }

  res.status(200).json(plant)
} 
  
module.exports = {
  getFromStore,
  getSinglePlant,
  addToStore,
  updateInStore,
  deleteFromStore
}