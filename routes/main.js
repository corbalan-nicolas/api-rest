import MnemonicRouter from './mnemonic.route.js'
import KanaRouter from './kana.route.js'
import UserRouter from './user.route.js'

const routerAPI = (app) => {
  // Endpoints
  app.use('/api/v1/users', UserRouter)
  app.use('/api/v1/kanas', KanaRouter)
  app.use('/api/v1/mnemonics', MnemonicRouter)
}

export default routerAPI