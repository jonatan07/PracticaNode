import express from 'express'
import { swaggerUi, specs } from './swagger'
import customerController from './controllers/CustomerControllers'

const app = express()
const PORT = 3000

app.use(express.json())
app.use('/api/customer', customerController)
app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs))

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
