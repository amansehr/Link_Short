const express = require('express')
const app = express()
const st  = require('./short.js')
const fl = require('./full.js')

app.use(express.json()) 
app.use(express.urlencoded({ extended: true }))
app.use('/st',st) // short route
app.use('/',fl) //retreive url

app.listen(4444,()=>{
    console.log('Server started on http://localhost:4444')
})