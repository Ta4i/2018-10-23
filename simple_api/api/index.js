var router = require('express').Router()
var mocks = require('./mock')
var assign = require('object-assign')

const reply = (res, body, timeout = 1000, status = 200) =>
  setTimeout(() => {
    res.status(status).json(body)
  }, timeout)

router.get('/article', function(req, res, next) {
  var articles = mocks.articles.map(function(article) {
      return assign({}, article, {
        text: undefined
      })
    }),
    limit = Number(req.query.limit) || articles.length,
    offset = Number(req.query.offset) || 0

  reply(res, articles.slice(offset, limit + offset))
})

router.get('/article/:id', function(req, res, next) {
  var article = mocks.articles.filter(function(article) {
    return article.id == req.params.id
  })[0]
  if (article) return reply(res, article, 950)

  reply(res, { error: 'not found' }, 100, 404)
})

router.post('/article', function(req, res, next) {
  var body = req.body
  var article = {
    text: body.text,
    id: Date.now().toString(),
    user: body.user,
    date: new Date()
  }
  mocks.articles.push(article)
  reply(res, article)
})

router.get('/comment', function(req, res, next) {
  var aid = req.query.article
  if (aid) {
    var article = mocks.articles.find(function(article) {
      return article.id == aid
    })
    return reply(
      res,
      (article.comments || []).map(function(id) {
        return mocks.comments.find(function(comment) {
          return comment.id == id
        })
      })
    )
  }

  var limit = Number(req.query.limit) || mocks.comments.length,
    offset = Number(req.query.offset) || 0
  reply(res, {
    total: mocks.comments.length,
    records: mocks.comments.slice(offset, limit + offset)
  })
})

router.post('/comment', function(req, res, next) {
  var comment = {
    id: Date.now().toString(),
    text: req.body.text,
    date: new Date(),
    user: req.body.user,
    article: req.body.article
  }
  mocks.comments.push(comment)
  reply(res, comment)
})

router.post('/report', function(req, res) {
  reply(res, {})
})

module.exports = router
