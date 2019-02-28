var express = require('express');
var app = express();
var router = require('./router.js');

app.use('/', router);
//app.use(express.static(__dirname + '\\views'));
app.use(express.static(__dirname + '\\controllers'));
app.use(express.static(__dirname + '\\style'));
app.use(express.static(__dirname + '\\node_modules'));

app.listen(3000);
