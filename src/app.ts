import * as express from 'express'
import catsRouter from './cats/cats.route'

const app = express()

//* logging middleware
app.use((req, res, next) => {
  console.log(req.rawHeaders[1])
  next()
})
//* json middleware
app.use(express.json())

//* Router
app.use(catsRouter)

//* 404 middleware
app.use((req, res, next) => {
  console.log('this is not found ')
  res.send({ error: '404' })
})

app.listen(8000, () => {
  console.log('server is on...')
})
