const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cartSchema = new Schema(
  {
    _id: {
      type: String,
      required: true,
      unique: true
    },
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
    price: {
      type: Number,
      required: true
    },
    numOfPieces: {
      type: Number,
      required: true
    },
    priceForPiece: {
      type: Number,
      required: true
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  { timestamps: true }
)


module.exports = mongoose.model('Cart', cartSchema, "cart")