const express = require('express')
const controller = require('../controllers/getDepartments.js')
const router = express.Router()

//Should join the dept_emp table and the employees table on the emp_no
//Grab the corresponding dept_no from dept_emp relating to the passed in emp_no by the user
//returns the users first name, last name, and corresponding department with the dept_no
router.get('/:emp_no', controller.getDepartment)

//Should return all users who's salaries fallin the provided range
router.get('/salaries/:minRange/:maxRange', controller.getSalary)

//should find all employees who have worked for the company for the provided years.
router.get('/:emp_no', controller.getDeptAndTitle)

module.exports = router;