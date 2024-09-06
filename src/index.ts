import express from 'express'
import { swaggerUi, specs } from './swagger'

import customerController from './controllers/CustomerControllers'

const app = express()
app.use(express.json())
const PORT = 3000
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))
app.use('/api/customer', customerController)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
