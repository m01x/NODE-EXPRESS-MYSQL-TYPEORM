const express = require('express')
const router = express.Router()
const estudiantesController = require('../controllers/estudiantesController.js')

router.get('/', estudiantesController.consultar.bind(estudiantesController))

router.post('/', estudiantesController.ingresar.bind(estudiantesController))

router
  .route('/:id')
  .get(estudiantesController.consultarDetalle.bind(estudiantesController))
  .put(estudiantesController.actualizar.bind(estudiantesController))
  .delete(estudiantesController.borrar.bind(estudiantesController))

module.exports = router
