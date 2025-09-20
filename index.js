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