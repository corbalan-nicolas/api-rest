import mongoose from "mongoose"
const Schema = mongoose.Schema

const mySchema = new Schema({
  kana: { // El hiragana / katakana
    type: String,
    required: true,
    trim: true
  },
  descr: { // Ejemplo: "*Fo*o", "Con *negritas*", "Sin negritas"
    type: String,
    required: true,
    trim: true
  },
  main_img: {
    type: String,
    trim: true
  }, // Imagen principal
  kana_img: {
    type: String,
    trim: true
  }, // Imagen con el kana que encastre con la principal
  tags: { // Lista de etiquetas
    type: Array,
    default: []
  },
  lang: { // Idioma en el que mejor funciona (en, es, etc)
    type: String,
    lowercase: true,
    trim: true
  }
})

const model = mongoose.model('mnemonics', mySchema)

export default model