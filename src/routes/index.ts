import express from 'express'

const routes = express.Router()

routes.get('/resize', (req: express.Request, res: express.Response) => {
  res.send('/resize')
})

export default routes
