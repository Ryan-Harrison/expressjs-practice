var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.sendFile(__dirname + '\\views\\index.html');
});

router.get('/views/:file', function (req, res) {
  res.sendFile(__dirname + '\\views\\' + req.params.file + '.html');
});

module.exports = router;
