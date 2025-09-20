// Resources
import express from 'express'
import KanaController from '../controllers/kana.controller.js'


// Variables
const router = express.Router()


// Get
router.get('/', KanaController.all)
router.get('/parse/:value/to/:parseTo', KanaController.parse)


// Export
export default router