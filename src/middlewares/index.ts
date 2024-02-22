import { Response, Request, NextFunction } from 'express'
import type { queryParam } from '../types'

const handleErrors = (req: Request, res: Response, next: NextFunction) => {
  const { file_name, height, width } = req.query as unknown as queryParam

  if (!file_name) return res.send('Filename is required')
  if (!height) return res.send('Height is required')
  if (!width) return res.send('Width is required')
  console.log(file_name, height, width)
  next()
}

export default handleErrors
