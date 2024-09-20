# API Rest para el registro de clientes

## Descripcion
Esta es una aplicacion tipo API REST con fines didacticos, que permite realizar un CRUD sobre la entidad **Customer**.
## Tecnologias
La tecnologia que usa esta app son las siguientes:
- Node.js
- Express.js
- Type Script (TS)
- Swagger (Open API)
## Rutas disponibles
Para entrar a la documentacion (swagger):
`http://localhost:3000/docs/`

Para entrar al endpoint de customer:
`http://localhost:3000/api/customer/`

## Copilacion y Despliegue
>Los siguiente codigo se debe ejecutar en la consula dentro de la carpeta raiz

- Compilamos nuestros archivos.
```
npm run tsc
```
- Ejecutar la aplicacion
```
npm start
```
- Compila y ejecuta, aparte de que se queda escuchando los cambios realizados en los archivos.
``` 
npx ts-node src/index.ts
```