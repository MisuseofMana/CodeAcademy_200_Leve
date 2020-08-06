const express = require('express')
const router = express.Router()
const { list, create, show } = require("../controllers/vehicles")

router.get('/vehicles', list)
router.get('/vehicles/:id', show)
router.post('/vehicles', create)

module.exports = router;