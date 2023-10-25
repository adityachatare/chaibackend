const express = require('express')
const app = express()
const port = 3000
require('dotenv').config()
app.get('/',(req,res)=>{
    res.send('Hello World!')
})

app.get('/twitter',function(req,res){
    res.send('https://www.twitter.com/adityachatare')
})

app.get('/login',(req,res)=>{

    res.send('<h1>Please login chai aur coode</h1>')
})

app.get(
    '/youtube',(req,res)=>{
    res.send('<h2>Chai aur code</h2>')
    }
)

app.listen(process.env.PORT,()=>{
    console.log(`Example app listening on port ${process.env.PORT}`)
})

