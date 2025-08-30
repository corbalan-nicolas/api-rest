import homeView from '../views/home.js'
import guideView from '../views/guide.js'

export default class ViewsController {
  /**
   * Renderiza de forma un poco rara pero funcional
   */
  static home(req, res) {
    res.send(homeView)
  }

  static guide(req, res) {
    res.send(guideView)
  }
}