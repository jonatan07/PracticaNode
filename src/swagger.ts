// swagger.js
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

// Definición de opciones de Swagger
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Customer API',
      version: '1.0.0',
      description: 'API de prueba para la generacion de clientes y utilidades relacionadas'
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Servidor local'
      }
    ]
  },
  // Rutas a los archivos de definición (por ejemplo, tus archivos de rutas)
  apis: ['./controllers/CustomerControllers.ts'] // Aquí especificas las rutas donde están tus archivos de definición de API
}

// Generar el documento Swagger
const specs = swaggerJsdoc(options)

// Exportar los módulos
export { swaggerUi, specs }
