// Plugins / Packages / Whatever
import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'

// Database


// Router
import routerAPI from './routes/main.js'

dotenv.config()
const PORT = process.env.PORT
const URI_DB = process.env.URI_DB

mongoose.connect(URI_DB)
const db = mongoose.connection

db.on('error', () => console.error('No se pudo conectar a la base de datos'))
db.once('open', () => console.info('Conexión establecida'))

// App config
const app = express()
app.use(express.json())
app.use('/', express.static('public'))
routerAPI(app)

// Middleware
app.use((req, res, next) => {
  // console.log('Estoy interceptando todo')
  next();
})

// Listen
app.listen(PORT, () => {
  console.log(`
  🟢 Japanese Hiragana & Katakana API REST
  ➜  Local: http://localhost:${PORT}/
  ➜  Port:  ${PORT}
  `)
})

/* 
# Parcial 1: TO DO
Items para cumplir con la pauta de la consigna 1

## Página principal
  [ ] HTML que informe sobre la api y permita acceder a los endpoints mediante URL
  [x] Pie de página con Nombre + apellido, materia, docente y comisión

## Rutas
  [ ] Mínimo 2 rutas
  Funcionalidades requeridas en al menos una de las rutas (en mi caso mnemonics):
    [x] Ver todos los documentos de una colección
    [ ] Obtener un documento específico por su ID
    [x] Actualizar la información de un documento
    [x] Eliminar un documento
    [x] Incluir al menos dos métodos de filtrado
    [ ] Búsqueda por nombre

## Autenticación
  [ ] JSON Web Tokens

## Validaciones
  [ ] Incluír las validaciones necesarias




  nicolaslcorbalan_db_user
  GE2ZX58OV3QJ8nvk

  mongodb+srv://nicolaslcorbalan_db_user:GE2ZX58OV3QJ8nvk@davinci.8hl9vww.mongodb.net/japanese_api?retryWrites=true&w=majority&appName=DaVinci
*/