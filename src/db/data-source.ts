import { DataSource } from 'typeorm'
import { Estudiante } from '../models/estudianteModel'
import { Profesor } from '../models/profesorModel'
import { Curso } from '../models/cursoModel'

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '<tu contraseña | your password',
  database: 'cursos',
  logging: true,
  entities: [Estudiante, Profesor, Curso],
  synchronize: false
})
