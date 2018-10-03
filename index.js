const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const query = require('./queries')
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', query.displayHome)
app.get('/users', query.getUsers)
app.get('/users/:id', query.getUserById)
app.post('/users', query.createUser)
app.put('/users/:id', query.updateUser)
app.delete('/users/:id', query.deleteUser)

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
