const express = require('express')
const router = require('./routes/index.js');
const swaggerDocs = require('./swagger.js')

const app = express()
const port = 4000

app.use(express.json())
app.use(router)

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
  swaggerDocs(app, port)
})
