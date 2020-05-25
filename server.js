const express = require('express')
const{db , Tasks} = require('./db')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const PORT= process.env.PORT || 4444  
app.get('/',(req,res)=>{
    res.send("hello world")
})
app.get('/tasks',async (req,res)=>{
    res.send(await Tasks.findAll())
})
app.post('/tasks',async (req,res)=>{
    res.send(await Tasks.create(req.body))
})
db.sync({alter:true}).then(() => {
    app.listen(POST,(req,res)=>{
        console.log('server started on http://localhost:${PORT}')
    })
})