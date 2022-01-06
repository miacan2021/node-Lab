const path = require('path')
const express = require('express')
const router = express.Router()

const rootDirectory = require('../path/path')

router.get('/', (req,res,next) => {
  res.sendFile(path.join(rootDirectory, 'views', 'home.html'))
})

module.exports = router