import mongoose from "mongoose"
const Schema = mongoose.Schema

const mySchema = new Schema({
  hiragana: String,
  katakana: String,
  romaji: String,
  type: String,
  consonant: String,
  vowel: String,
})

const model = mongoose.model('kanas', mySchema)

export default model

// /*
// Para mi una estructura ideal por caracter sería algo como
// {
//   "kana": "きゃ",
//   "romaji": "kya",
//   "type": "combination",
//   "consonant": "ky",
//   "vowel": "a",
//   "mnemonic": { o tal vez mnemonics?
//     "id": 1,
//     "text": "Un gato que dice *kya*!",
//     "main_img": "fileurl.webp",
//     "kana_img": "optional.webp",
//     "tag": "Ejemplo cualquiera"
//   },
//   "examples": [
//     { "word": "きゃく", "meaning": "invitado" }
//   ],
//   "related_katakana": "キャ",
//   "stroke_order_svg": "url/to/kya.svg",
//   "pronunciation_audio": "url/to/kya.mp3",
//   "confusable_with": ["しゃ", "ちゃ"]
// }

// import fs from 'fs/promises'
// import dotenv from 'dotenv'

// dotenv.config()

// export default class Hiragana {
//   #DB_PATH = './database/hiragana.json'

//   /**
//    * Obtiene todos los hiraganas de la base de datos
//    * @returns Objeto con todos los hiraganas básicos, variantes y combinaciones
//    */
//   async getAll() {
//     // Get all the 
//     const JSONData = await fs.readFile(this.#DB_PATH) || {}
//     const result = JSON.parse(JSONData.toString())

//     for(let item of (result.basic || [])) {
//       const url = `http://localhost:${process.env.PORT}/api/v1/mnemonics/${item.character}`
//       const request = await fetch(url)
//       const mnemonics = await request.json()

//       item.mnemonics = mnemonics
//     }

//     return result
//   }

//   /**
//    * Busca un caracter en la base de datos en base a su hiragana o a su romaji
//    * @param {String} argument Hiragana or Romaji
//    * @returns Objeto con los datos del caracter, null si no es encontrado
//    */
//   async search(argument) {
//     argument = argument.toLowerCase().trim()
//     const allHiraganas = await this.getAll()
//     const parsedObject = Object.values(allHiraganas).flat()
    
//     for(let item of parsedObject) {
//       if(item.character == argument || item.romaji == argument) {
//         return item
//       }
//     }

//     return null
//   }

//   /**
//    * Retorna un array de arrays que representan una tabla con todos los
//    * hiraganas básicos para facilitar su impresión
//    * @returns {Array[]} Array que representa los Rows & Cols
//    */
//   chartBasic() {
//     return [
//       [' ',　'W',　'R',　'Y',　'M',　'H',　'N',　'T',　'S',　'K',　'·',　' '],
//       ['　', 'わ', 'ら', 'や', 'ま', 'は', 'な', 'た', 'さ', 'か', 'あ', 'A'],
//       ['　', '　', 'り', '　', 'み', 'ひ', 'に', 'ち', 'し', 'き', 'い', 'I'],
//       ['ん', '　', 'る', 'ゆ', 'む', 'ふ', 'ぬ', 'つ', 'す', 'く', 'う', 'U'],
//       ['　', '　', 'れ', '　', 'め', 'へ', 'ね', 'て', 'せ', 'け', 'え', 'E'],
//       ['　', 'を', 'ろ', 'よ', 'も', 'ほ', 'の', 'と', 'そ', 'こ', 'お', 'O']
//     ]
//   }

//   /**
//    * Retorna un array de arrays que representan las variantes de los
//    * hiraganas para facilitar su impresión
//    * @returns {Array[]}
//    */
//   chartVariants() {
//     return [
//       ['P',　'B',　'D',　'Z',　'G',　' '],
//       ['ぱ', 'ば', 'だ', 'ざ', 'が', 'A'],
//       ['ぴ', 'び', 'ぢ', 'じ', 'ぎ', 'I'],
//       ['ぷ', 'ぶ', 'づ', 'ず', 'ぐ', 'U'],
//       ['ぺ', 'べ', 'で', 'ぜ', 'げ', 'E'],
//       ['ぽ', 'ぼ', 'ど', 'ぞ', 'ご', 'O']
//     ]
//   }

//   /**
//    * Retorna un array de arrays que representan las combinaciones de los
//    * hiraganas para facilitar su impresión
//    * @returns {Array[]}
//    */
//   chartCombinations() {
//     return [
//       ['り',　 'み',　 'ぴ',　 'び',　 'ひ',　 'に',　 'ち',　 'じ',　 'し',　 'ぎ',　 'き',　 '　'],
//       ['りゃ', 'みゃ', 'ぴゃ', 'びゃ', 'ひゃ', 'にゃ', 'ちゃ', 'じゃ', 'しゃ', 'ぎゃ', 'きゃ', 'や'],
//       ['りゅ', 'みゅ', 'ぴゅ', 'びゅ', 'ひゅ', 'にゅ', 'ちゅ', 'じゅ', 'しゅ', 'ぎゅ', 'きゅ', 'ゆ'],
//       ['りょ', 'みょ', 'ぴょ', 'びょ', 'ひょ', 'にょ', 'ちょ', 'じょ', 'しょ', 'ぎょ', 'きょ', 'よ']
//     ]
//   }
// }