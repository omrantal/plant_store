const express = require('express')

const {
  getFromStore,
  getSinglePlant,
  addToStore,
  deleteFromStore,
  updateInStore
} = require('../controllers/storeController')

const { requireAuth, roleAuth } = require('../middleware/requireAuth')

const router = express.Router()

// GET all plants from store
router.get('/', getFromStore)

// GET single plant from store
router.get('/:id', getSinglePlant)

// POST a new plant to store
router.post('/', requireAuth, roleAuth('ADMIN'), addToStore)

// DELETE a plant from store
router.delete('/:id', requireAuth, roleAuth('ADMIN'), deleteFromStore)

// UPDATE a plant in store
router.put('/:id', requireAuth, roleAuth('ADMIN'), updateInStore)

module.exports = router