class EstudiantesController {
  fecha = ''

  constructor() {
    this.calculoHorario()
  }

  calculoHorario() {
    const today = new Date()
    const yyyy = today.getFullYear()
    const mm = String(today.getMonth() + 1).padStart(2, '0') // Months start at 0!
    const dd = String(today.getDate()).padStart(2, '0')
    this.fecha = `${dd}/${mm}/${yyyy}`
  }

  consultar(req, res) {
    res.status(200).json({ response: 'METHOD: CONSULTAR - controller exitoso' })
  }

  consultarDetalle(req, res) {
    res.status(200).json({
      response: `METHOD: CONSULTARDETALLE - controller exitoso`,
      date: this.fecha
    })
  }

  ingresar(req, res) {
    res.status(200).json({ response: 'METHOD: INGRESAR - controller exitoso' })
  }

  actualizar(req, res) {
    res
      .status(200)
      .json({ response: 'METHOD: ACTUALIZAR - controller exitoso' })
  }

  borrar(req, res) {
    res.status(200).json({ response: 'METHOD: BORRAR - controller exitoso' })
  }
}

module.exports = new EstudiantesController()
