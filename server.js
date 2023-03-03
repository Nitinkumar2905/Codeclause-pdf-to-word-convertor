const express = require('express')
const app = express()
const path = require('path')
const port = 3000

app.use('/static',express.static('public'))
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, 'template/index.html'))
})

app.listen(port, ()=> {
    console.log(`listening app on port https://localhost:${port}`)
})