const express = require('express')

// controller functions
const { loginUser, signupUser, getUsers, deleteUser } = require('../controllers/userController')

const { requireAuth, roleAuth } = require('../middleware/requireAuth')

const router = express.Router()

// login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)

// get all users
router.get('/', requireAuth, roleAuth('ADMIN'), getUsers)

// delete a user
router.delete('/:id', requireAuth, roleAuth('ADMIN'), deleteUser)

module.exports = router