// No estoy seguro de si esto debería ser un modelo para ser honesto. Pero bueno
// de última me lo comentas profe!

export default class Response {
  static error(msg = 'Error desconocido', data = null) {
    return {
      type: 'error',
      msg,
      data
    }
  }

  static success(data, msg = 'Todo salió bien 🤓') {
    return {
      type: 'success',
      msg,
      data
    }
  }
}