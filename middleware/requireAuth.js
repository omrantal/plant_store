const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const requireAuth = async (req, res, next) => {
  // verify authentication
  const { authorization } = req.headers

  if (!authorization) {
    return res.status(401).json({ error: 'Authorization token required' })
  }

  const token = authorization.split(' ')[1]

  try {
    const { _id } = jwt.verify(token, process.env.SECRET)

    req.user = await User.findOne({ _id }).select('_id role')
    next()
  } catch (error) {
    console.log(error)
    res.status(401).json({ error: 'Request is not authorized' })
  }
}

const roleAuth = (role) => {
  return (req, res, next) => {
    if (req.user.role !== role) {
      console.log(req.user)
      console.log(role)
      res.status(401)
      return res.json({ error: 'Not allowed' })
    }

    next()
  }
}

module.exports = { requireAuth, roleAuth }

/* ADMIN user: "email": "admin10@gmail.com",
    "password": "Admin..123456",

    USER: "email": "omran10@gmail.com",
    "password": "abc..AB123456"
    */