var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('tgbot.ejs', { state: 'off' });
});

module.exports = router;
