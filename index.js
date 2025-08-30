// Plugins / Packages / Whatever
import dotenv from 'dotenv'
import express from 'express'

// Router
import routerAPI from './routes/main.js'

dotenv.config()




// VARIABLES
const app = express()
app.use(express.json())
routerAPI(app)





// LISTEN
app.listen(process.env.PORT, () => {
  console.log(`
  API REST Japanese Hiragana & Katakana
  ➜  Local: http://localhost:${process.env.PORT}/
  ➜  Port:  ${process.env.PORT}
  `)
})

/*
Qué api usar para eso
una api que pueda capturar cómo usar el dedo o lo que sea
*/