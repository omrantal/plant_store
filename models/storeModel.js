const mongoose = require('mongoose')
const Schema = mongoose.Schema

const storeSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    desc: {
      type: String,
    },
    price: {
      type: Number,
      required: true
    },
    watering: {
      type: String,
      required: true
    },
    light: {
      type: String,
      required: true
    },
    about: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
)

// static login method
storeSchema.statics.addPlant = async function(plant) {
  
  const { image, name, price, type, title, watering, light } = plant
  // validation
  if (!image || !name || !price || !type || !title || !watering || !light) {
    throw Error('All fields must be filled')
  }

  const newPlant = await this.create(plant)

  if (!newPlant) {
    throw Error('Failed to add plant')
  }
  
  return newPlant
}

module.exports = mongoose.model('Store', storeSchema, "store")