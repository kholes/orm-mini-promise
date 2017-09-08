var express = require('express');
var app = express();
var bodyParser = require('body-parser')
let sqlite3=require('sqlite3').verbose();
let db=new sqlite3.Database('./db/database.db');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'ejs');
let modelProfile=require('./models/model_profile');


// app.post('/', (req,res)=>{
//   console.log(req.body);
// })



let index=require('./route/route_index');
let profile=require('./route/route_profile');
let address=require('./route/route_address');
app.use('/',index);
app.use('/profile',profile);
app.use('/address',address);

app.listen(4000, function () {
  console.log('Example app listening on port 4000');
});
