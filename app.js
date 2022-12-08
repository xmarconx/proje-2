
const express = require('express')
const mongoose = require('mongoose');
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const hostname = ('127.0.0.1')

app.use(express.static('public'))

mongoose.connect('mongodb://127.0.0.1/nodeblog_db', {
    useNewUrlParser: true,
    useUnifiedTopology:true
})


app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const main = require('./routes/main')
const posts = require('./routes/posts')
app.use('/', main)
app.use('/posts', posts)

app.listen(port, hostname, () =>  console.log(`Server Çalışıyor, http://${hostname}:${port}/`))

