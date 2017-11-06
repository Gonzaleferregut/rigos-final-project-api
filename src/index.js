import Express from 'express'
import Parser from 'body-parser'
import cors from 'cors'

const app = new Express()

app.use(Parser.json())
app.use(cors())

app.get('/', (req, resp) => {
  return resp.send('Hey, Tyler')
})

app.get('/people', (req, resp) => {
  return resp.json({
    name: 'Tyler',
    age: 35
  })
})

app.post('/logIn', (req, resp) => {
  const logInData = req.body
  console.log(logInData)
  return resp.json(logInData)
})

app.post('/contact', (req, resp) => {
  const contactData = req.body
  console.log(contactData)
  return resp.json(contactData)
})

app.post('/personalInfo', (req, resp) => {
  const personalData = req.body
  console.log(personalData)
  return resp.json(personalData)
})

app.listen(4000)
