const express = require('express')
app = express()
const route = require('./Routes/routing')
const mongoose = require("mongoose")
const url = 'mongodb://localhost/scavengeHuntDB'
const bodyParser = require('body-parser')
// const { urlencoded } = require('body-parser')

require('dotenv').config()
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

mongoose.connect(url, {
    useNewUrlParser:true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
})
const con = mongoose.connection

con.on('open', ()=>{
    console.log('connected...')
})

app.get('/sush', (req, res)=>{
    res.send('hello sush')
})

app.use('/', route)


const PORT = process.env.PORT || 4001

app.listen(PORT, ()=>{
    console.log('Listening to port '+ PORT)
})