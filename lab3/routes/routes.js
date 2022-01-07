const router = require('express').Router()
const path = require('path')
const fs = require('fs')
const { Z_FIXED } = require('zlib')

const data = []

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views', 'home.html'))
  })

router.get('/leave', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views', 'leave-note.html'))
  })


router.post('/leave-note', (req, res, next) => {
    if(req.body){
        let Message = {
            name: req.body.name,
            text: req.body.text,
            published: new Date().toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })
          }
        data.push(Message)
        fs.writeFile('messages.txt', JSON.stringify(data), () => {
            res.status(302).redirect('/')
        })
    }
})


router.get('/read', (req,res,next) => {
    fs.readFile('messages.txt', 'utf-8', (err, data) => {
        let messages =[]

        if(!err){
            try{
                messages = JSON.parse(data)
            }catch(e){
                fs.writeFileSync('messages.txt', [])
                messages = []
            }
        }
        data = messages
        res.render('read-note', {messages})
    })
})


module.exports = router