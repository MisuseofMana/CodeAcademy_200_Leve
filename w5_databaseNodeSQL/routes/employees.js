const express = require('express')
const controller = require('../controllers/getEmployees.js')
const router = express.Router()

router.get('/', controller.getEmployees)
router.get('/:emp_no', controller.getEmployeesById)
router.get('/firstname/:first_name', controller.getEmployeesByFirstName)

module.exports = router;