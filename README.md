# API Rest base para proyectos en Node JS!

Hola!, **Don m01x** por acá. Esta API Rest en Node, utilizando Express y preparado para MySQL está orientada a programadores novatos o en realidad, para quien necesite desplegar una api de forma expedita y sencilla... La pensé para el resto de mis trabajos, pero luego se me ocurrió dejarla algo mas 'neutral' para que pueda ser de utilidad para todos 🌐

# Setup

Todos los archivos necesarios se encuentran en las dependencias, debí dejar algunas como "locked" para asegurar su correcto funcionamiento en el tiempo, pero también planeo darle mantenimiento a esta app a fin de que no quede obsoleta 🙃

Para instalar las dependencias, no olvidar navegar en tu terminal favorita hacia la ruta base del proyecto, a la altura del index.js y ejecutar:

    cd .\node-express-mysql-typeorm\

    npm install

    npm run dev para ejecutar *(utilizamos nodemon)*

_Estoy trabajando en dejar el puerto disponible en las variables de entorno, para el próximo update._

# Log

#### What is new

- (30-07-2024) Se implementa Typescript
  - Se configura el proyecto para manejar Typescript
  - Se instala TypeORM
  - Se configuran las entidades 'Estudiante', 'Profesor' y 'Curso' para trabajar este proyecto base.
  - Se agrega morgan y reflect metadata.
  - Se mejora la estructura del proyecto, se mueven los archivos base a la carpeta src.
- (24-07-2024) Carga inicial de archivos base.

#### Known issues - _not very interesting_

- Al crear las tablas por primera vez, aparece data invalida en una de ellas.

#### En desarrollo

- implementar variables de entorno (dotenv)
- Validación de errores
- Seguridad (o eso quiero intentar) mediante tokens JWT.

## Tecnologías/Dependencias

"cors": "^2.8.5",
"express": "^4.19.2",
"morgan": "^1.10.0",
"mysql2": "^3.11.0",
"reflect-metadata": "^0.2.2",
"typeorm": "^0.3.20"

.md hecho con 💖por [stackedit.io/app](https://stackedit.io/app#)
