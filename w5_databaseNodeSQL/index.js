const express = require('express');
const bodyParser = require("body-parser")
const usersRouter = require('./routes/employees')
const deptRouter = require('./routes/departments')

const app = express();
const port = process.env.PORT || 4001

app.use(bodyParser.json())
app.use('/employees', usersRouter)
app.use('/department', deptRouter)

app.get('/', (req, res) => res.send(`
WELCOME TO OUR EMPLOYEE API
- - -
To get started, use the url
extention /employees followed
by your request.
- - - 
/employees : returns the first 50 employees
- - - 
/employees/1001 : returns employee #1001
- - -
/employees/first_name/saniya : returns employees with saniya as a first name
`))

app.listen(port, () => {
    console.log('app is listening on:', port)
})