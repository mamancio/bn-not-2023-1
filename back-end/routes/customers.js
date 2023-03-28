const express = require('express')
const router = express.Router()
const controller = require('../Controllers/customer')

router.post('/', controller.create)

module.exports = router