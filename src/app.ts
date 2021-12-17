import * as express from 'express'
import { Cat, CatType } from './app.model'

const app = express()

const data = [1, 2, 3, 4]

app.use((req, res, next) => {
  console.log(req.rawHeaders[1])
  next()
})

app.get('/', (req: express.Request, res: express.Response) => {
  res.send({ cats: Cat })
})

app.get('/cats/blue', (req: express.Request, res: express.Response) => {
  res.send({ blue: Cat[0] })
})

app.get('/cats/som', (req: express.Request, res: express.Response) => {
  res.send({ som: Cat[1] })
})

app.use((req, res, next) => {
  console.log('this is not found ')
  res.send({ error: '404' })
})

app.listen(8000, () => {
  console.log('server is on...')
})
