import express from 'express'
import routes from './routes'
import handleErrors from './middlewares'

const app = express()
const PORT = 3030

app.get('/', (req: express.Request, res: express.Response) => {
  console.log(req.query)
  res.send('hello')
})

app.use('/api', handleErrors, routes)

app.listen(PORT, () => {
  console.log(`Server start at http://localhost:${PORT}`)
})
