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
route.post('/',(req,res)=>{
  modelProfile.insert(req)
  .then(data=>{
    res.redirect('/profile');
  })
  .catch(err=>{
    console.log(err);
  })
});
route.get('/update/:id',(req,res)=>{
  let id=req.params.id;
  modelProfile.getById(id)
  .then(data=>{
    console.log(data);
    res.render('edit_profile',{profile:data});
  })
  .catch(err=>{
    console.log(err);
  })
});
route.post('/update/:id',(req,res)=>{
  let id=req.params.id;
  modelProfile.update(id,req)
  .then(data=>{
    res.redirect('/profile');
  })
  .catch(err=>{
    console.log(err);
  })
});
route.post('/delete/:id',(req,res)=>{
  let id=req.params.id;
  modelProfile.del(id)
  .then(data=>{
    res.redirect('/profile');
  })
  .catch(err=>{
    console.log(err);
  })
});
module.exports=route
