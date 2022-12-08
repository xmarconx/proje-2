const mongoose = require('mongoose')
const post = require('./model/post')

const Post = require('./model/post')


mongoose.connect('mongodb://127.0.0.1/nodeblog_test_1_db', {
  
})


post.findByIdAndDelete('638f1217d98a79ad82a27675', (error, post) => {
    console.log(error, post)
} )

/* post.find({
    title: 'İlk Postumun Başlığı',
}, (error, post) => {
    console.log(error, post)
}) */

/* 
Post.create({
    title: 'İlk Postumun Başlığı',
    content: 'post içeriği bilgisi'
}, (error, post) => {
    console.log(error, post)
}) */