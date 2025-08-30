export default class MyError {
  code = 0
  type = ''
  msg = ''

  constructor(type, msg, code = undefined) {
    this.type = type
    this.msg = msg
    this.code = code
  }
}