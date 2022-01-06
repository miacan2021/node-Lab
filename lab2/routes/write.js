const path = require('path')
const express = require('express')
const router = express.Router()
const fs = require('fs');

const rootDirectory = require('../path/path')

router.get('/', (req,res,next) => {
  res.sendFile(path.join(rootDirectory, 'views', 'write-message.html'))
})

router.post('/', (req,res,next) => {
  let message = req.body
  message = Object.values(message).toString()
  fs.appendFileSync('public/message.txt', message);
  res.redirect('/read-message')
})


module.exports = router