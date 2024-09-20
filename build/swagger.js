"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.specs = exports.swaggerUi = void 0;
// swagger.js
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
exports.swaggerUi = swagger_ui_express_1.default;
// Definición de opciones de Swagger
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Customer API',
            version: '1.0.0',
            description: 'API de prueba para la generacion de clientes'
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
};
// Generar el documento Swagger
const specs = (0, swagger_jsdoc_1.default)(options);
exports.specs = specs;
