const path = require('path')
const express = require('express')
const router = express.Router()

const rootDirectory = require('../path/path')

router.get('/', (req,res,next) => {
  res.sendFile(path.join(rootDirectory, 'views', 'read-message.html'))
})

module.exports = router