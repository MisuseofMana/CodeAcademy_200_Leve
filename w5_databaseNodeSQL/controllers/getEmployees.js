const mysql = require('mysql')
const pool = require('../mysql/connection')
const { handleSQLError } = require('../mysql/error')

//all search URL require /employees path before the request.

const getEmployees = (req, res) => {
//Select all users from the database
 pool.query("SELECT * FROM employees LIMIT 50", (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

const getEmployeesById = (req, res) => {
  let sql = "SELECT * FROM employees WHERE emp_no = ?"
  const id = req.params.emp_no
  sql = mysql.format(sql, [id])
  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

const getEmployeesByFirstName = (req, res) => {
  let sql = "SELECT * FROM employees WHERE first_name = ?"

  const firstname = req.params.first_name
  sql = mysql.format(sql, [firstname])

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

module.exports = {getEmployees, getEmployeesById, getEmployeesByFirstName}