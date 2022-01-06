const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')


const readRootes = require('./routes/read')
const writeRootes = require('./routes/write')
const homeRootes = require('./routes/home')


const app = express()
const PORT  = 8000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/read-message', readRootes)
app.use('/write-message', writeRootes)
app.use('/', homeRootes)


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))