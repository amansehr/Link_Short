const express = require('express')
const app = express()
const st  = require('./short.js')
const fl = require('./full.js')

app.use(express.json()) 
app.use(express.urlencoded({ extended: true }))
app.use('/st',st) // short route
app.use('/',fl) //retreive url

let port = process.env.port || 4444;
app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
})