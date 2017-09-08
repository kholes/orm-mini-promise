var express = require('express');
var app = express();
var route = express.Router();
let model
route.get('/', (req,res)=>{

  res.render('profile');
})
route.post('/', (req,res)=>{
  res.redirect('/profile');
})
module.exports=route
