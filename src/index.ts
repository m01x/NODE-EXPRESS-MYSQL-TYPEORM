import app from './app'
import { AppDataSource } from './db/data-source' //TypeORM
import 'reflect-metadata'

async function main() {
  const port = 6505
  try {
    await AppDataSource.initialize()
    console.log('Base de datos conectada 💾☑️')
    app.listen(port, () => {
      console.log(`Servidor Activo 🆙👍|| Port📡:${port}`)
    })
  } catch (err) {
    if (err instanceof Error) console.log(err.message)
  }
}

main()
