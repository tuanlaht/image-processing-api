import express from 'express'
import type { queryParam } from '../types'
import resizeImage from '../utils'

const routes = express.Router()

routes.get('/resize', (req: express.Request, res: express.Response) => {
  const { file_name, height, width } = req.query as unknown as queryParam

  console.log(resizeImage(file_name, Number(width), Number(height)))

  res.send(`123 ${resizeImage(file_name, Number(width), Number(height))}`)
})

export default routes
