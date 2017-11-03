import Express from 'express'
import Parser from 'body-parser'

const app = new Express()
var cors = require('cors')
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


app.post('/contact', (req, resp) => {
  const contactData = req.body
  console.log(contactData)
  return resp.json(contactData)
})


app.listen(4000)
