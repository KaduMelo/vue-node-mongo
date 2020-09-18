import express from 'express'
import bodyParser from 'body-parser'

import database from './config/database.js'
import clientRoute from './routes/clientRoute.js'

const app = express()
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

clientRoute(app)

database.connect().then(() => {
    app.listen(port, () => console.log('Api rodando na porta 3000'))
})