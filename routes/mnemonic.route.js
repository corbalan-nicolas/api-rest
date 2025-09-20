import express from 'express'
import MnemonicController from '../controllers/mnemonic.controller.js'


// Variables
const router = express.Router()


// Routes
router.get('/', MnemonicController.all)
router.get('/:id', MnemonicController.findById)
router.get('/kana/:kana', MnemonicController.findByKana)

router.post('/', MnemonicController.post)

router.put('/:id', MnemonicController.put)

router.delete('/:id', MnemonicController.delete)


// Export
export default router