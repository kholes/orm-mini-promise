var express = require('express');
var app = express();
var route = express.Router();
let modelProfile=require('../models/model_profile');
route.get('/', (req,res)=>{
  modelProfile.getAll()
  .then(data=>{
    res.render('profile', {profile:data});
  })
  .catch(err=>{
    console.log(err);
  })
})
route.post('/', (req,res)=>{
  res.redirect('/profile');
})
module.exports=route
