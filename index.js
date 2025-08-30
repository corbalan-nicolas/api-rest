// Plugins / Packages / Whatever
import dotenv from 'dotenv'
import express from 'express'

// Router
import routerAPI from './routes/main.js'

dotenv.config()

// App config
const app = express()
app.use(express.json())
routerAPI(app)

// Listen
app.listen(process.env.PORT, () => {
  console.log(`
  API REST Japanese Hiragana & Katakana
  ➜  Local: http://localhost:${process.env.PORT}/
  ➜  Port:  ${process.env.PORT}
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


*/