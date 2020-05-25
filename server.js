const express = require('express')
const app = express()
app.get('/',(req,res)=>{
    res.send("hello world")
})
app.listen(4444,(req,res)=>{
    console.log('server started on http://localhost:4444')
})