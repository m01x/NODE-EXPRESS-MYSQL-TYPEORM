# API Rest base para proyectos en Node JS!

Hola!, **Don m01x** por acá. Esta API Rest en Node, utilizando Express y preparado para MySQL está orientada a programadores novatos o en realidad, para quien necesite desplegar una api de forma expedita y sencilla... La pensé para el resto de mis trabajos, pero luego se me ocurrió dejarla algo mas 'neutral' para que pueda ser de utilidad para todos 🌐

# Setup

Todos los archivos necesarios se encuentran en las dependencias, debí dejar algunas como "locked" para asegurar su correcto funcionamiento en el tiempo, pero también planeo darle mantenimiento a esta app a fin de que no quede obsoleta 🙃
Para instalar las dependencias, no olvidar navegar en tu terminal favorita hacia la ruta base del proyecto, a la altura del index.js y ejecutar:

    cd .\node-express-mysql-typeorm\
    npm install
    node .\index.js //para ejecutar.

_Estoy trabajando en dejar el puerto disponible en las variables de entorno, para el proximo update._

# Log

#### What is new

- (24-07-2024) Carga inicial de archivos base.

#### Known issues - _not very interesting_

-none-

#### En desarrollo

- implementar variables de entorno (dotenv)
- Validación de errores
- Seguridad (o eso quiero intentar) mediante tokens JWT.

## Tecnologías/Dependencias

- _CORS: ^2.8.5_
- _Express: ^4.18.3_
- _Mysql2: ^3.9.4_
- _nodemon: ^3.1.0_
- _dotenv: ^16.4.5_

.md hecho con 💖por [stackedit.io/app](https://stackedit.io/app#)
