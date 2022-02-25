const express = require('express')
const router = express.Router()

const clientController = require('../controllers/client')

router.get('/news', clientController.create)

router.get('/list',  clientController.list )

module.exports = router