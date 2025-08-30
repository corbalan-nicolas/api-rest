import Hiragana from "../models/Hiragana.js";
import Alert from '../models/Alert.js'

const hiragana = new Hiragana()

export default class HiraganaController {
  /**
   * Si todo sale bien, retorna un objeto con todos los hiraganas, si algo sale
   * mal retorna un objeto Alert de tipo "error"
   */
  static async getAll(req, res) {
    try {
      const result = await hiragana.getAll()

      res.json(result)
    }catch(e) {
      res.json(new Alert('error', 'Error desconocido: ' + e.message))
    }
  }

  /**
   * Recibe un hiragana o un romaji por parámetro y lo busca en la base de datos.
   * Si lo encuentra retorna un objeto con los datos, sino un Alert de tipo error
   */
  static async search(req, res) {
    try {
      const { search } = req.params

      const result = await hiragana.search(search)

      if(result == null) {
        res.json(new Alert('error', 'No encontramos nada :('))
      } else {
        res.json(result)
      }
    } catch (e) {
      res.json(new Alert('error', 'Error desconocido'))
    }
  }
}