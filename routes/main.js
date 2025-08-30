import mnemonicsRouter from './mnemonics.route.js'
import viewsRouter from './views.route.js'

const routerAPI = (app) => {
  // Endpoints
  app.use('/', viewsRouter)
  app.use('/api/v1/mnemonics', mnemonicsRouter)
}

export default routerAPI