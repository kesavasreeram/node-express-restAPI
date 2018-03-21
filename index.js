const express = require('express')
const app = express()
// pick from the environment variables, else assign default values
const port = process.env.PORT || 3000
const host = process.env.host || 'localhost'

app.get('/', (request, response) => {
  response.send({
    message: 'Welcome to my API!'
  })
})

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`)
})
