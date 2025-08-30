import express from 'express'
import ViewsController from '../controllers/ViewsController.js'



const viewsRouter = express.Router()


// Get
viewsRouter.get('/', ViewsController.home)
viewsRouter.get('/guide', ViewsController.guide)


export default viewsRouter