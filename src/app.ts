import * as express from 'express'
import { Cat, CatType } from './app.model'

const app = express()

const data = [1, 2, 3, 4]

//* logging middleware
app.use((req, res, next) => {
  console.log(req.rawHeaders[1])
  next()
})
//* json middleware
app.use(express.json())

//* READ 고양이 전체 데이터 조회
app.get('/cats', (req: express.Request, res: express.Response) => {
  try {
    const cats = Cat
    // throw new Error('db connection error')
    res.status(200).send({ success: true, data: { cats } })
  } catch (error: any) {
    res.status(400).send({ success: false, error: error.message })
    console.error(error)
  }
})

//* READ 특정 고양이 데이터 조회
app.get('/cats/:id', (req: express.Request, res: express.Response) => {
  try {
    const id = req.params.id
    const cat = Cat.find((cat) => cat.id === id)

    if (cat) {
      res.status(200).send({ success: true, data: { cat } })
    } else {
      res.status(404).send({ success: true, data: {} })
    }
  } catch (error: any) {
    res.status(400).send({ success: false, error: error.message })
    console.error(error)
  }
})

//* CREATE 새로운 고양이 추가 api
app.post('/cats', (req, res) => {
  try {
    const data = req.body

    Cat.push(data)

    res.status(200).send({ success: true, data })
  } catch (error: any) {
    res.status(400).send({ success: false, error: error.message })
    console.error(error)
  }
})

//* 404 middleware
app.use((req, res, next) => {
  console.log('this is not found ')
  res.send({ error: '404' })
})

app.listen(8000, () => {
  console.log('server is on...')
})
