var YouTube = require('youtube-node')

var youTube = new YouTube()

exports.search = function (req, res, next) {
  var keyword = req.query.keyword
  youTube.setKey('AIzaSyB1OOSpTREs85WUMvIgJvLTZKye4BVsoFU')

  youTube.search(keyword, 20, function (error, result) {
    if (error) {
      console.log(error)
      res.send(error)
    } else {
      console.log(JSON.stringify(result, null, 20))
      res.send(JSON.stringify(result, null, 20))
    }
  })
}
