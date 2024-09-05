import express from 'express'
import customerController from './controllers/CustomerControllers'

const app = express()
app.use(express.json())

const PORT = 3000

app.use('/api/customer', customerController)

app.get('/ping', (_req, res) => {
  console.log('Someone pinged here')
  res.send('pong')
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
