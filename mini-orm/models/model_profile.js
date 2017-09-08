let sqlite3=require('sqlite3').verbose();
let db=new sqlite3.Database('./db/database.db');

class Profile{
  static getAll(){
    let prom=new Promise((resolve,reject)=>{
      db.all(`select * from tb_profile`,(err,data)=>{
        if(!err){
          resolve(data);
        }else{
          reject(err);
        }
      })
    })
    return prom
  }
  static getById(id){
    let prom=new Promise((resolve,reject)=>{
      db.each(`select * from tb_profile where id=${id}`,(err,data)=>{
        if(!err){
          resolve(data);
        }else{
          reject(err);
        }
      })
    })
    return prom
  }
  static insert(req){
    let prom=new Promise((resolve,reject)=>{
      db.run(`insert into tb_profile (name,company,address)
      values ('${req.body.name}','${req.body.company}','${req.body.address}')`,(err,data)=>{
        if(!err){
          resolve("Data saved!");
        }else{
          reject(err);
        }
      })
    })
    return prom
  }
  static update(id,req){
    let prom=new Promise((resolve,reject)=>{
      db.run(`update tb_profile set name='${req.body.name}',company='${req.body.company}',
      address='${req.body.address}' where id=${id}`,(err,data)=>{
        if(!err){
          resolve("Data update!");
        }else{
          reject(err);
        }
      })
    })
    return prom
  }
  static del(id){
    let prom=new Promise((resolve,reject)=>{
      db.run(`delete from tb_profile where id=${id}`,(err,data)=>{
        if(!err){
          resolve("Data deleted");
        }else{
          reject(err);
        }
      })
    })
    return prom
  }
}
module.exports=Profile
