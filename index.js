/**
 * Template de API RESTful
 * Autor: Don Moix
 * Agradecimientos:https://github.com/ljcl79/
 *
 * Las rutas, controladores, etc de "Estudiantes" son el patron a seguir,
 * estas rutas se encuentran ya pobladas y funcionando (para MySQL).
 * Ya están preparadas con CORS, dotenv, entre otros... a medida que lo continue depurando,
 * se verá mas bonito todo.
 *
 * Adaptar a voluntad, happy hacking🌈.
 */
const express = require('express')
const cors = require('cors')
const app = express()
const estudiantesRoutes = require('./routes/estudiantesRoutes.js')

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hola mundo!')
})

app.use('/estudiantes', estudiantesRoutes)

app.listen(6500, () => {
  console.log('Servidor activo......... Escuchando el puerto 6500')
})
