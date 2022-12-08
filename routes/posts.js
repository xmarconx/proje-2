
const express = require('express')
const router = express.Router()
const Post = require('../model/post')


router.get('/posts/new', (req, res) => {
   res.render('/site/addpost')
})

router.post('/posts/test', (req, res) => {
   Post.create(req.body)
   res.redirect('/')
})


module.exports = router