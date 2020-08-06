const express = require('express')
const router = express.Router()
const { list, create, show } = require("../controllers/contacts")

router.get('/contacts', list)
router.get('/contacts/:id', show)
router.post('/contacts', create)

module.exports = router;