var express = require('express');
var app = express();
var route = express.Router();

route.get('/', (req,res)=>{
  res.render('index');
})
module.exports=route
