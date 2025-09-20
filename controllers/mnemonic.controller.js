
import Response from "../models/response.model.js"
import MnemonicModel from '../models/mnemonic.model.js'
import Validator from '../classes/Validator.js'

export default class MnemonicController {
  /**
   * Retorna un array con todas las mnemotecnias
   */
  static async all(req, res) {
    try {
      const data = await MnemonicModel.find()
    
      res.status(200).json(Response.success(data))
    }catch(e) {
      console.error(e)
      res.status(500).json(Response.error())
    }
  }

  static async post(req, res) {
    try {
      // Variables
      const { kana, descr, main_img, kana_img, tags, lang } = req.body

      // Validaciones
      if(Validator.isEmpty(kana, descr)) {
        res.status(500).json(Response.error('Faltan campos obligatorios'))
        return
      }

      // Acciones
      const mnemonic = new MnemonicModel({ kana, descr, main_img, kana_img, tags, lang })
      const result = await mnemonic.save()

      // Respuesta
      res.status(201).json(Response.success(result.id, 'Mnemotecnia creada'))
    } catch (e) {
      res.status(500)
      .json(Response.error('No se pudo crear la mnemotecnia, error no controlado :c'))
    }
  }

  static async delete(req, res) {
    try {
      // Variables
      const id = req.params.id || ''

      // Validaciones
      if(!Validator.isId(id)) {
        res.status(500).json(Response.error('El ID recibido no es válido'))
        return
      }

      // Petición a la database
      const result = await MnemonicModel.findByIdAndDelete(id)

      // Respuesta
      if(result == null) {
        res.status(404).json(Response.error('Mnemotecnia no encontrada'))
      } else {
        res.status(204).send()
      }
    } catch (e) {
      console.error(e)
      res.status(500).json(Response.error())
    }
  }

  static async put(req, res) {
    try {
      // Variables
      const id = req.params.id || ''
      const { kana, descr, main_img, kana_img, tags, lang } = req.body
      const newValues = {kana, descr, main_img, kana_img, tags, lang}

      // Validaciones
      if(!Validator.isId(id)) {
        res.status(422).json(Response.error('El ID recibido no es válido'))
        return
      }

      // Petición a la database
      const result = await MnemonicModel.findByIdAndUpdate(id, newValues)

      // Respuesta
      if(result == null) {
        res.status(404).json(Response.error('Mnemotecnia no encontrada'))
      } else {
        res.status(204).send()
      }
    } catch (e) {
      console.error(e)
      res.status(500).json(Response.error())
    }
  }

  static async findById(req, res) {
    try {
      // Variables
      const id = req.params.id || ''

      // Validaciones
      if(!Validator.isId(id)) {
        res.status(422).json(Response.error('El ID recibido no es válido'))
        return
      }

      // Petición a la database
      const mnemonic = await MnemonicModel.findById(id)

      // Respuesta
      if(mnemonic == null) {
        res.status(404).json(Response.error('Mnemotecnia no encontrada'))
      } else {
        res.status(200).json(Response.success(mnemonic))
      }
    } catch (e) {
      console.error(e)
      res.status(500).json(Response.error())
    }
  }

  static async findByKana(req, res) {
    try {
      // Variables
      const kana = req.params.kana

      // Validations
      if(!Validator.isKana(kana)) {
        res.status(422).json(Response.error('El valor recibido no es un hiragana o katakana válido'))
        return
      }

      // Búsqueda
      const result = await MnemonicModel.find({ kana })

      // Retorno
      // console.log({result})
      res.status(200).json(Response.success(result))
    } catch (e) {
      console.error(e)
      res.status(500).json(Response.error())
    }
  }
}

// 201 -> recurso creado