require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const {connectDB} = require('./DataBase/quoteDB') 

const app = express()
const port = process.env.PORT;

app.use(express.json())

const quoteRouter = require('./routes/Quote')
app.use('/api/quote',quoteRouter)

connectDB()
app.listen(port,()=>{
    console.log('server started')
})