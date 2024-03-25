import express from 'express'
import type { QueryParam } from '../types'
import { doesFileExist } from '../utils'

const validateParamsMiddleware: express.RequestHandler = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  const { file_name, width, height } = req.query as unknown as QueryParam

  if (!file_name || typeof file_name !== 'string') {
    return res.status(400).send('File name is missing.')
  }

  if (!doesFileExist(file_name, 'images')) {
    return res.status(400).send('File does not exist.')
  }

  const numWidth = Number(width)
  const numHeight = Number(height)

  if (!Number.isInteger(numWidth) || numWidth <= 0 || !Number.isInteger(numHeight) || numHeight <= 0) {
    return res.status(400).send('Width and height must be valid integers greater than 0.')
  }

  next()
}

export default validateParamsMiddleware
