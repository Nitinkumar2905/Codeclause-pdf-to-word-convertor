const express = require('express')
const app = express()
const path = require('path')
const multer = require('multer')
const upload = multer({dest:'uploads/'})
const {convert} = require('./convert').default
const port = 3000

app.use('/static',express.static('public'))
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'template/index.html'))
})

app.post('/convert', upload.array('word'), async (req, res,)=>{
    await convert(path.join(__dirname,req.files[0].path))
    res.redirect(`http://localhost:${port}/static/docx`)
})

app.listen(port, ()=> {
    console.log(`listening app on port https://localhost:${port}`)
})