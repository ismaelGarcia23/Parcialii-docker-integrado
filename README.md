# parcial-docker-integrado

API Node.js para CRUD de usuarios (id, nombre, email, password, rol).

Archivos incluidos:
- Dockerfile
- .dockerignore
- docker-compose.yaml
- package.json
- .env (ejemplo)

Uso (no ejecutar aquí, sólo referencia):
- Build con Docker:
  docker build -t parcial-api .

- Run con Docker:
  docker run -d -p 3000:3000 --env-file .env parcial-api

- O usar docker-compose:
  docker-compose up --build

Endpoints básicos esperados (crear server.js según indicaciones):
- GET /       -> información básica del estudiante
- GET /health -> estado del servicio
- REST CRUD para usuarios: POST /users, GET /users, GET /users/:id, PUT /users/:id, DELETE /users/:id

Variables de entorno:
- PORT
- MONGO_URI

Preparación:
1. Colocar los archivos del src (controllers, routes, models, etc.) en la carpeta `src` o según tu estructura.
2. Asegurarse de que `server.js` esté en la raíz y lea PORT y MONGO_URI desde process.env.

Nota: Este repositorio incluye un servicio opcional de MongoDB en docker-compose para la siguiente parte del ejercicio.# parcial-docker-integrado
