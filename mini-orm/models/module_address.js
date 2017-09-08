let sqlite3=require('sqlite3').verbose();
let db=new sqlite3.Database('./db/database.db');

class Address{
  static getAll(){
    let prom=new Promise((resolve,reject)=>{
      db.all(`select * from tb_address`,(err,data)=>{
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
      db.all(`select * from tb_address where id=${id}`,(err,data)=>{
        if(!err){
          resolve(data);
        }else{
          reject(err);
        }
      })
    })
    return prom
  }
  static insert(id,req){
    let prom=new Promise((resolve,reject)=>{
      db.run(`insert into tb_address (street,city,id_profile)
      values ('${req.body.street}','${req.body.city}','${req.body.id_profile}')`,(err,data)=>{
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
      db.run(`update tb_address set street='${req.body.street}', city='${req.body.city}',
      id_profile='${req.body.id_profile}')`,(err,data)=>{
        if(!err){
          resolve("Data saved!");
        }else{
          reject(err);
        }
      })
    })
    return prom
  }
  static del(id){
    let prom=new Promise((resolve,reject)=>{
      db.run(`delete from tb_address where id=${id}`,(err,data)=>{
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
module.exports=Address
