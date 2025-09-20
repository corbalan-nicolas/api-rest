import express from 'express'
import UserController from '../controllers/user.controller.js'


// Variables
const router = express.Router()


// Routes
router.get('/', UserController.all)
router.get('/:id', UserController.findById)

router.post('/', UserController.post)

router.delete('/:id', UserController.delete)

router.put('/:id', UserController.put)


// Export
export default router