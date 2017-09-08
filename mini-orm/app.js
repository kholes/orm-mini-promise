var express = require('express');
var app = express();
var bodyParser = require('body-parser')
let sqlite3=require('sqlite3').verbose();
let db=new sqlite3.Database('./db/database.db');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
let index=require('./route/index');
app.use('/',index);
app.listen(4000, function () {
  console.log('Example app listening on port 4000');
});
