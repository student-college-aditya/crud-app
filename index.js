const express=require('express')
const router = require('./routes/route')
const path=require('path')
const bodyparser=require('body-parser')
const mongoose=require('./ConnectDB/ConnectDB.js')
const ConnectDB = require('./ConnectDB/ConnectDB.js')
const app=express()
const port=8000


app.use(bodyparser.urlencoded({extended: false}))

app.use(express.static(path.join(process.cwd(), 'public')))
app.set('view engine', 'ejs')
app.set('views', './views')

app.use('/',router)

app.listen(port, console.log(`Server has started to ${port}`))