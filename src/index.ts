import express from 'express'
import routes from './routes'

const app = express()
const PORT = 3030

app.get('/', (req: express.Request, res: express.Response): void => {
  res.send('hello access /api/resize to resize an image')
})

app.use('/api', routes)

app.listen(PORT, (): void => {
  console.log(`Server start at http://localhost:${PORT}`)
})

export default app
