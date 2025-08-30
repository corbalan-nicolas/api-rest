export default class Hiragana {
  /**
   * Retorna un array con arrays que representan una tabla con todos los
   * hiraganas básicos para facilitar su impresión en el front-end
   * @returns {Array[]} Array que representa los Rows & Cols
   */
  static chartBasic() {
    return [
      [' ',　'W',　'R',　'Y',　'M',　'H',　'N',　'T',　'S',　'K',　'·',　' '],
      ['　', 'わ', 'ら', 'や', 'ま', 'は', 'な', 'た', 'さ', 'か', 'あ', 'A'],
      ['　', '　', 'り', '　', 'み', 'ひ', 'に', 'ち', 'し', 'き', 'い', 'I'],
      ['ん', '　', 'る', 'ゆ', 'む', 'ふ', 'ぬ', 'つ', 'す', 'く', 'う', 'U'],
      ['　', '　', 'れ', '　', 'め', 'へ', 'ね', 'て', 'せ', 'け', 'え', 'E'],
      ['　', 'を', 'ろ', 'よ', 'も', 'ほ', 'の', 'と', 'そ', 'こ', 'お', 'O']
    ]
  }

  /**
   * Retorna un array con arrays que representan las variantes de los
   * hiragana para facilitar su impresión en pantalla
   * @returns {Array[]}
   */
  static chartVariants() {
    return [
      ['P',　'B',　'D',　'Z',　'G',　' '],
      ['ぱ', 'ば', 'だ', 'ざ', 'が', 'A'],
      ['ぴ', 'び', 'ぢ', 'じ', 'ぎ', 'I'],
      ['ぷ', 'ぶ', 'づ', 'ず', 'ぐ', 'U'],
      ['ぺ', 'べ', 'で', 'ぜ', 'げ', 'E'],
      ['ぽ', 'ぼ', 'ど', 'ぞ', 'ご', 'O']
    ]
  }

  /**
   * 
   * @returns {Array[]}
   */
  static chartCombinations() {
    return [
      ['り',　 'み',　 'ぴ',　 'び',　 'ひ',　 'に',　 'ち',　 'じ',　 'し',　 'ぎ',　 'き',　 '　'],
      ['りゃ', 'みゃ', 'ぴゃ', 'びゃ', 'ひゃ', 'にゃ', 'ちゃ', 'じゃ', 'しゃ', 'ぎゃ', 'きゃ', 'や'],
      ['りゅ', 'みゅ', 'ぴゅ', 'びゅ', 'ひゅ', 'にゅ', 'ちゅ', 'じゅ', 'しゅ', 'ぎゅ', 'きゅ', 'ゆ'],
      ['りょ', 'みょ', 'ぴょ', 'びょ', 'ひょ', 'にょ', 'ちょ', 'じょ', 'しょ', 'ぎょ', 'きょ', 'よ']
    ]
  }
}