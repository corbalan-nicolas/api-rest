import fs from 'fs/promises'

export default class MnemonicManager {
  #DB_PATH = './database/mnemonics.json'

  /**
   * Guarda el objeto recibido por parámetro en la base de datos (un json)
   * @param {Object} mnemonics Objeto con todas las mnemotecnias
   * @returns 
   */
  async saveJSON(mnemonics = null) {
    // Por si a alguien se le olvida
    if(mnemonics === null || Array.isArray(mnemonics)) {
      throw new Error('El método saveJSON debe recibir un objeto con todas las mnemotecnias')
    }

    await fs.writeFile(this.#DB_PATH, JSON.stringify(mnemonics))
    return true
  }
  
  /**
   * Retorna toda la base de datos de mnemotecnias
   * @returns {Object} Obj con todos los caracteres y su array de mnemotecnias
   */
  async getAll() {
    const req = await fs.readFile(this.#DB_PATH)

    return JSON.parse(req.toString()) || {}
  }

  /**
   * Retorna todas las mnemotecnias asociadas al carácter recibido por parámetro
   * @param {String} chara Hiragana (ej: あ、べ、せ)
   * @returns {Object[]} Array de mnemotecnias
   */
  async getByCharacter(chara) {
    const mnemonics = await this.getAll()
    return mnemonics[chara] || null
  }

  /**
   * Retorna todas las mnemotecnias que matcheen con la etiqueta recibida
   * @param {String} tag Etiqueta
   * @returns Array con los matchs
   */
  async getByTag(tag) {
    const mnemonics = await this.getAll()
    const result = []
    tag = tag.trim().toLowerCase()

    for(let chara in mnemonics) {
      for(let mnemo of mnemonics[chara]) {
        const mnemoTag = mnemo.tag.trim().toLowerCase()
        
        if(mnemoTag.includes(tag)) {
          mnemo.character = chara
          result.push(mnemo)
        }
      }
    }

    return result
  }

  /**
   * Valida e inserta una nueva mnemotecnia a la base de datos
   * @param {String} chara 
   * @param {Object} object 
   */
  async insert(chara, object) {
    // Variables
    const mnemonic = this.createMnemonicObject(object)
    const mnemonics = await this.getAll()


    // Validaciones
    if(mnemonics[chara] === undefined) {
      throw new Error(`The hiragana character "${chara}" doesn't exist`)
    }
    this.isValidMnemonic(mnemonic)


    // Todo está OK ✅
    mnemonics[chara].push(mnemonic)
    await this.saveJSON(mnemonics)
    
    return mnemonic.id
  }

  async update(chara, id, object) {
    // Variables
    object.id = id
    const mnemonic = this.createMnemonicObject(object)
    const allMnemonics = await this.getAll()
    const index = (allMnemonics[chara] || []).findIndex(m => m.id === id)

    // Validations
    if(allMnemonics[chara] === undefined) {
      throw new Error(`The hiragana character "${chara}" doesn't exist`)
    }else if(index === -1) {
      throw new Error(`Mnemonic not found`)
    }
    this.isValidMnemonic(mnemonic)

    // Todo está OK ✅
    allMnemonics[chara][index] = mnemonic
    await this.saveJSON(allMnemonics)

    return mnemonic
  }

  async delete(chara, id) {
    // Variables
    const allMnemonics = await this.getAll()
    const index = (allMnemonics[chara] || []).findIndex(m => m.id === id)

    // Validations
    if(allMnemonics[chara] === undefined) {
      throw new Error(`The hiragana character "${chara}" doesn't exist`)
    }else if(index === -1) {
      throw new Error(`Mnemonic not found`)
    }

    // Todo está OK ✅
    allMnemonics[chara].splice(index, 1)
    await this.saveJSON(allMnemonics)

    return true
  }

  /**
   * Valida que el valor recibido cumpla con lo mínimo e indispensable para ser
   * una mnemotecnia válida
   * @param {Object} values Objeto con todos los valores
   * @throws Error :d!
   * @returns true si el objeto es válido
   */
  isValidMnemonic(values) {
    // Validaciones esenciales
    if(typeof values !== 'object') {
      throw new Error(`Se esperaba un objeto, pero se recibió un valor de tipo ${typeof values}`)
    }


    // Variables y Sanitización
    const text = (values.text || '').trim()
    const img = (values.img || '').trim()


    // Otras validaciones
    if(!text) {
      throw new Error('Missing "text" property')
    }else if(!img) {
      throw new Error('Missing \"img\" property')
    }


    // Todo está OK ✅
    return true
  }

  /**
   * Crea un objeto mnemonic con los valores recibidos por parámetros. En caso 
   * de no recibir nada se establecen valores por defecto
   * @param {Object} values (opcional) Objeto con los valores
   * @returns Un objeto mnemonic (no es una clase)
   */
  createMnemonicObject(values = {}) {
    const text = (values.text || '').trim()
    const img = (values.img || '').trim()
    const tag = (values.tag || '').trim()
    const id = values.id || crypto.randomUUID()

    return {id, text, img, tag}
  }
}