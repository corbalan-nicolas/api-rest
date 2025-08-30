import MnemonicManager from "../models/MnemonicManager.js";
import Alert from "../models/Alert.js";
const mnemonic = new MnemonicManager()

export default class MnemonicController {
  /**
   * Si todo sale bien, retorna un objeto con todas las mnemotecnias, siendo las
   * claves (keys) los kanas (あ、べ、せ), y los valores un array con las
   * diferentes mnemotecnias asociadas a ese valor
   */
  static async getAll(req, res) {
    try {
      const result = await mnemonic.getAll()
    
      res.json(result)
    }catch(e) {
      res.json(new Alert('error', 'Error desconocido', 0))
    }
  }

  /**
   * Si todo sale bien, retorna un array con todas mnemotecnias asociadas al
   * caracter pasado por parámetro, si algo sale mal retorna un objeto Alert
   */
  static async getByCharacter(req, res) {
    try {
      // Variables
      const { chara } = req.params
      const result = await mnemonic.getByCharacter(chara)

      // Model errors
      if(result === null) {
        res.json(new Alert('error', 'Not found', 1))
        return
      }

      // Everything's OK ✅
      res.json(result)
    } catch(e) {
      res.json(new Alert('error', 'Error desconocido', 0))
    }
  }

  /**
   * Si todo sale bien, retorna un array con todas las mnemotecnias que incluyan
   * la etiqueta pasada por parámetro. Si algo sale mal retorna un objeto Alert
   */
  static async getByTag(req, res) {
    try {
      const { tag } = req.params
      const result = await mnemonic.getByTag(tag)

      res.json(result)
    } catch (e) {
      res.json(new Alert('error', 'Error desconocido', 0))
    }
  }

  /**
   * Si todo sale bien, inserta una nueva mnemotecnia al caracter pasado por
   * parámetro y retorna su ID. Si algo sale mal retorna un objeto Alert
   */
  static async insert(req, res) {
    try {
      const { chara } = req.params
      const data = req.body

      const id = await mnemonic.insert(chara, data)
      
      if(id) {
        res.json(id)
      }
    }catch(e) {
      res.json(new Alert('error', e.message, 0))
      // res.json(new Alert('error', e))
    }
  }

  /**
   * Recibe por parámetro el hiragana y el id de la mnemotecnia, si todo sale
   * bien lo actualiza en la base de datos con los datos recibidos en el body y
   * retorna un objeto Alert de tipo success. Si algo sale mal retorna un objeto
   * Alert de tipo error
   */
  static async update(req, res) {
    try {
      const { chara, id } = req.params
      const data = req.body

      const result = await mnemonic.update(chara, id, data)

      if(result) {
        res.json(new Alert('success', 'Mnemonic updated!'))
      }
    }catch(e) {
      res.json(new Alert('error', e.message, 0))
    }
  }

  /**
   * Recibe un hiragana y el id de la mnemotecnia mediante la url, y si lo
   * encuentra lo elimina y retorna un objeto Alert de tipo "success". En caso de
   * que algo salga mal, retorna un objeto Alert de tipo "error"
   */
  static async delete(req, res) {
    try {
      const { chara, id } = req.params

      const result = await mnemonic.delete(chara, id)

      if(result) {
        res.json(new Alert('success', 'Deleted!!'))
      }
    }catch(e) {
      res.json(new Alert('error', e.message))
    }
  }
}