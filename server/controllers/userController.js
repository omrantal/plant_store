const User = require('../models/userModel')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' })
}

// login user
const loginUser = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.login(email, password)

    const username = user.username
    
    // create a token
    const token = createToken(user._id)
    
    res.status(200).json({ username, email, role: user.role, token })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// signup user
const signupUser = async (req, res) => {
  const { username, email, password } = req.body
  
  try {
    const user = await User.signup(username, email, password)

    // create a token
    const token = createToken(user._id)
    
    res.status(200).json({ username, email, role: user.role, token })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// get all users
const getUsers = async (req, res) => {
  const users = await User.find({})
  
  res.status(200).json(users)
}

// delete a user
const deleteUser = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such user' })
  }

  const user = await User.findOneAndDelete({ _id: id })

  if (!user) {
    return res.status(400).json({ error: 'No such user' })
  }

  res.status(200).json(user)
}

module.exports = { loginUser, signupUser, getUsers, deleteUser }