import express from 'express'
import 'dotenv/config'

const app = express()
const PORT = process.env.SERVER_PORT || 8081

app.get('/', (req, res) => {
  res.send('<h1>Hi there!</h1>')
})

app.listen(PORT, () => {
  console.log(`⚡️ Server listening on port ${PORT}`)
})
