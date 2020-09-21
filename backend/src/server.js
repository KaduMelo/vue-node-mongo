const express = require('express')
const bodyParser = require('body-parser')

const database = require('./config/database.js')
const clientRoute = require('./routes/clientRoute.js')

const app = express()
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

const ACESS_CONTROL_ALLOW_ORIGIN = process.env.ACESS_CONTROL_ALLOW_ORIGIN || 'http://localhost:8080'

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

clientRoute(app)

database.connect().then(() => {
    app.listen(port, () => console.log('Api rodando na porta ' + port))
})
