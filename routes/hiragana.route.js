// Resources
import express from 'express'
import HiraganaController from '../controllers/HiraganaController.js'


// variables
const hiraganaRouter = express.Router()


// Get
hiraganaRouter.get('/', HiraganaController.getAll)
hiraganaRouter.get('/:search', HiraganaController.search)
// hiraganaRouter.get('/vowel/:vowel', HiraganaController.getAll)
// hiraganaRouter.get('/consonant/:vowel', HiraganaController.getAll)


// Export
export default hiraganaRouter