import express from 'express'
import type { queryParam } from '../types'
import resizeImage from '../utils'

const routes = express.Router()

routes.get('/resize', (req: express.Request, res: express.Response) => {
  const { file_name, height, width } = req.query as unknown as queryParam

  console.log(resizeImage(file_name, width, height))

  res.send(`123 ${resizeImage(file_name, width, height)}`)
})

export default routes
