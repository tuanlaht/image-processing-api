import express from 'express'
import path from 'path'
import validateParamsMiddleware from '../middlewares'
import type { QueryParam } from '../types'
import { resizeImage, doesFileExist } from '../utils'

const routes = express.Router()

routes.get('/', (req: express.Request, res: express.Response): void => {
  res.send(`this's api route`)
})

routes.get('/resize', validateParamsMiddleware, async (req: express.Request, res: express.Response): Promise<void> => {
  const { file_name, height, width } = req.query as unknown as QueryParam
  const thumbPath = path.resolve(`./thumbs/resized-${file_name}-${width}x${height}.jpg`)

  if (doesFileExist(`resized-${file_name}-${width}x${height}`, 'thumbs')) {
    res.sendFile(thumbPath)
    return
  }

  const result = await resizeImage(file_name, Number(width), Number(height))
  await result.toFile(thumbPath)

  res.sendFile(thumbPath)
})

export default routes
