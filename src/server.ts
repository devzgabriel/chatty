import express, { request } from 'express'

const app = express()

app.get('/', (request, response) => {
  return response.send('Blaaaa')
})

app.listen(3333, () => console.log('Server running: 3333'))
