var express = require('express');
var app = express();
var route = express.Router();
let modelProfile=require('../models/model_profile');
route.post('/', (req,res)=>{
  res.redirect('/profile');
})
route.get('/', (req,res)=>{
  modelProfile.getAll()
  .then(data=>{
    console.log(data);
    res.render('profile', {profile:data});
  })
  .catch(err=>{
    console.log(err);
  })
})
route.post('/', (req,res)=>{
  modelProfile.insert(req)
  .then(data=>{
    console.log(data);
    res.redirect('/profile');
  })
  .catch(err=>{
    console.log(err);
  })
})
module.exports=route
