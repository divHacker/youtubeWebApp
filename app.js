var express = require('express')
var app = express()
var youtube = require('./lib/js/youtubeAPI.js')
app.use('/', express.static(__dirname))

app.get('/search', youtube.search)

app.listen(3000, function () {
  console.log('app started on port 3000!')
})
