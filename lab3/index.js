const path = require('path')
const express = require('express')
const parser = require('body-parser')
const routes = require('./routes/routes')
const app = express()
app.set('view engine', 'ejs')

app.use(parser.urlencoded({extended:false}))
app.use(express.static('./public'))
app.use(routes)
app.use((req,res,next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})
app.listen(8000)