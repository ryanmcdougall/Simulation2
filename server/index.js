require('dotenv').config();
const ctrl = require('./controller')
const express = require('express')
    , bodyParser =  require('body-parser')
    , massive = require('massive')

const { CONNECTION_STRING } = process.env
const port = 3005
const app = express();

app.use(bodyParser.json())

app.get('/api/houses', ctrl.getAll)
app.post('/api/houses', ctrl.postHouse)

massive(CONNECTION_STRING).then( db => {
    app.set('db', db )
    app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
    })
})