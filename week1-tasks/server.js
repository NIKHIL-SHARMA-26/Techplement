require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const {connectDB} = require('./DataBase/quoteDB') 
const cors = require('cors');


const app = express()
const port = process.env.PORT;

app.use(express.json())
app.use(cors());

const quoteRouter = require('./routes/quote')
app.use('/api/quote',quoteRouter)

connectDB()
app.listen(port,()=>{
    console.log('server started')
})