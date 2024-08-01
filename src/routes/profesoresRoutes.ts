/**Aqui definiremos las rutas de profesores */
import express from 'express'
const router = express.Router()
import profesoresController from '../controllers/profesoresController'

router.get('/', profesoresController.consultar)

router.post('/', profesoresController.ingresar)

router
  .route('/:id')
  .get(profesoresController.consultarDetalle)
  .put(profesoresController.actualizar)
  .delete(profesoresController.borrar)

export default router
