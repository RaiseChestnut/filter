const express = require("express")

const app = express()
const port = 3000
app.use(express.json())
app.use(require("cors")())
require('./routers/classify/index')(app)
require('./db/index')(app)

app.listen(port, () => {
  console.log(`Serve is listening on port ${port}!`)
})