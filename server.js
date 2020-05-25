const express = require('express')
const{db , Tasks} = require('./db')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const PORT= process.env.PORT || 4444  
app.get('/',(req,res)=>{
    res.send("hello world")
})
app.post('/tasks',async (req,res)=>{
    res.send(await Tasks.create(req.body))
})
app.get('/tasks',async (req,res)=>{
    res.send(await Tasks.findAll())
})
app.listen(PORT,(req,res)=>{
    console.log('server started on http://localhost:${PORT}')
})