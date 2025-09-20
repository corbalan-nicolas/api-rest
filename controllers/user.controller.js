import Response from '../models/response.model.js'
import UserModel from '../models/user.model.js'
import Validator from '../classes/Validator.js'
import bcrypt from 'bcrypt'

const salt = 10

export default class UserController {
  

  static async all(req, res) {
    try {
      // Variables
      const data = await UserModel.find()

      // Retorno
      res.status(200).json(Response.success(data))
    } catch (e) {
      res.status(500).json(Response.error())
    }
  }

  static async findById(req, res) {
    try {
      // Variables
      const id = (req.params.id || '').trim()

      // Validacion
      if(!Validator.isId(id)) {
        res.status(422).json(Response.error('El ID recibido no es un ID válido'))
        return
      }

      // Acciones
      const user = await UserModel.findById(id)

      // Retorno
      if(user == null) {
        res.status(404).json(Response.error('Usuario no encontrado'))
      } else {
        res.status(200).json(Response.success(user))
      }
    } catch (e) {
      console.error(e)
      res.status(500).json(Response.error())
    }
  }

  static async post(req, res) {
    try {
      // Variables
      const { name, email, password } = req.body

      // Validaciones
      if(Validator.isEmpty(name, email, password)) {
        res.status(422).json(Response.error('Faltan parámetros'))
        return
      }else if (!Validator.isEmail(email)) {
        res.status(422).json(Response.error('El email recibido no es un email válido'))
        return
      }

      // Hasheo de la contraseña
      const hash = await bcrypt.hash(password, salt)

      // Acciones
      const user = new UserModel({ name, email, password: hash })
      const result = await user.save()

      // Retorno
      res.status(200).json(Response.success(result._id))
    } catch (e) {
      switch(e.code) {
        case 11000:
          res.status(422).json(Response.error(`El mail ya existe`))
          break;
        default:
          res.status(500).json(Response.error())
          break;
      }
    }
  }

  static async put(req, res) {
    try {
      // Variables
      const id = req.params.id
      const { name, email, password } = req.body

      // Validaciones
      if(!Validator.isId(id)) {
        res.status(422).json(Response.error('El ID recibido no es un ID válido'))
        return
      }else if(Validator.isEmpty(name, email, password)) {
        res.status(422).json(Response.error('Faltan parámetros'))
        return
      }else if (!Validator.isEmail(email)) {
        res.status(422).json(Response.error('El email recibido no es un email válido'))
        return
      }

      // Acciones & Hasheo
      const hash = password == undefined ? undefined : await bcrypt.hash(password, salt)
      const result = await UserModel.findByIdAndUpdate(id, { name, email, password: hash })

      // Retorno
      if(result == null) {
        res.status(404).json(Response.error('Usuario no encontrado'))
      } else {
        res.status(204).send()
      }
    } catch (e) {
      console.error(e)
      res.status(500).json(Response.error())
    }
  }

  static async delete(req, res) {
    try {
      // Variables
      const id = req.params.id
      console.log({id})
      // Validaciones
      if(!Validator.isId(id)) {
        res.status(422).json(Response.error('El ID recibido no es un ID válido'))
        return
      }

      // Acciones
      const result = await UserModel.findByIdAndDelete(id)
      // console.log({result})
      // Respuesta
      if(!result) {
        res.status(404).json(Response.error('Usuario no encontrado'))
      } else {
        res.status(204).send()
      }
    } catch (e) {
      console.error(e)
      res.status(500).json(Response.error())
    }
  }
}