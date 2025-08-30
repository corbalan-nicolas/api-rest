import express from 'express'
import MnemonicController from '../controllers/MnemonicController.js'



const mnemonicsRouter = express.Router()



// Get
mnemonicsRouter.get('/', MnemonicController.getAll)
mnemonicsRouter.get('/:chara', MnemonicController.getByCharacter)
mnemonicsRouter.get('/tag/:tag', MnemonicController.getByTag)

// Post
mnemonicsRouter.post('/:chara', MnemonicController.insert)

// Put
mnemonicsRouter.put('/:chara/:id', MnemonicController.update)

// Delete
mnemonicsRouter.delete('/:chara/:id', MnemonicController.delete)



export default mnemonicsRouter