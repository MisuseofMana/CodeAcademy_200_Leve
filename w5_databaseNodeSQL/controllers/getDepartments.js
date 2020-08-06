const mysql = require('mysql')
const pool = require('../mysql/connection')
const { handleSQLError } = require('../mysql/error')

//Should join the dept_emp table and the employees table on the emp_no
//Grab the corresponding dept_no from dept_emp relating to the passed in emp_no by the user
//returns the users first name, last name, and corresponding department with the dept_no
const getDepartment = (req, res) => {
  let sql = `SELECT 
	              e.emp_no,
                e.first_name,
                e.last_name,
                de.dept_no,
                d.dept_name
            FROM employees e
            LEFT JOIN dept_emp de
              ON e.emp_no = de.emp_no
            LEFT JOIN departments d
              ON de.dept_no = d.dept_no
            WHERE e.emp_no = ?`

  const id = req.params.emp_no
  sql = mysql.format(sql, [id])

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

//Should return all users who's salaries fall in the provided range
const getSalary = (req, res) => {
  let sql = `SELECT 
                e.emp_no,
                e.first_name,
                e.last_name,
                s.salary,
                s.from_date,
                s.to_date
            FROM employees e
            LEFT JOIN salaries s
              ON e.emp_no = s.emp_no
            WHERE salary BETWEEN ? AND ?
            LIMIT 100`

  sql = mysql.format(sql, [req.params.minRange, req.params.maxRange])

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

//should look up employee id, and return their name, department name, and title
//joins employees, titles, and departments three joins
const getDeptAndTitle = (req, res) => {
  let sql = `SELECT 
              e.emp_no,
              e.first_name,
              e.last_name,
              t.title,
              t.from_date,
              t.to_date,
              de.dept_no,
              d.dept_name
            FROM titles t
            LEFT JOIN employees e
              ON t.emp_no = e.emp_no
            LEFT JOIN dept_emp de
              ON e.emp_no = de.emp_no
            LEFT JOIN departments d
              ON de.dept_no = d.dept_no
            WHERE e.emp_no = ?` 

  const id = req.params.emp_no            
  sql = mysql.format(sql, [id])

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

module.exports = {getDepartment, getSalary, getDeptAndTitle}