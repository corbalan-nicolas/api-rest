import Validator from "../classes/Validator.js"
import KanaModel from "../models/kana.model.js"
import Response from '../models/response.model.js'

export default class KanaController {
  /**
   * Si todo sale bien, retorna un objeto con todos los hiraganas, si algo sale
   * mal retorna un objeto Alert de tipo "error"
   */
  static async all(req, res) {
    try {
      const result = await KanaModel.find()

      res.status(200).json(Response.success(result))
    } catch(e) {
      console.error(e)
      res.status(500).json(Response.error())
    }
  }

  static async parse(req, res) {
    try {
      // Variables
      let { value, parseTo } = req.params
      const parsableValues = ['hiragana', 'katakana', 'romaji']

      value = (value || '').trim().toLowerCase()
      parseTo = (parseTo || '').trim().toLowerCase()

      // Validaciones
      if(!Validator.isKana(value) && !Validator.isRomaji(value)) {
        res.status(422).json(Response.error('El valor a parsear sólo puede ser hiragana, katakana, o romaji'))
        return
      } else if(!parsableValues.includes(parseTo)) {
        res.status(422).json(Response.error(`No se puede parsear un valor a "${parseTo}", use alguno de los siguientes valores en su lugar: "Hiragana", "Katakana", "Romaji"`))
        return
      }

      // Búsqueda
      const search = await KanaModel.findOne({
        $or: [
          { hiragana: value },
          { katakana: value },
          { romaji: value }
        ]
      })

      // Retorno
      if(search === null) {
        res.status(404).json(Response.error(`No se pudo encontrar el siguiente kana: ${value}`))
      } else {
        res.status(200).json(Response.success(search[parseTo]))
      }
    } catch(e) {
      console.error(e)
      res.status(500).json(Response.error())
    }
  }
}