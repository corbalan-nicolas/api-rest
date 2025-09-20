export default class Validator {
  static isEmpty(...providedValues) {
    for(let value of providedValues) {
      const isStr = typeof value === 'string'
      const isEmpty = isStr && value.trim() === ''

      if(isEmpty || !value) return true
    }

    return false
  }

  static isId(value) {
    // Cadena hexadecimal de 24 caracteres
    return typeof value === 'string' && /^[a-f\d]{24}$/i.test(value)
  }

  static isKana(value) {
    // Hiragana: \u3040-\u309F, Katakana: \u30A0-\u30FF
    return typeof value === 'string' && /^[\u3040-\u309F\u30A0-\u30FF]+$/.test(value)
  }

  static isRomaji(value) {
    // Solo letras latinas minúsculas/mayúsculas, puede incluir n con tilde y apóstrofe
    return typeof value === 'string' && /^[a-zA-Z'’\-]+$/.test(value)
  }

  static isEmail(value) {
    // Validación simple de email
    return typeof value === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
  }
}