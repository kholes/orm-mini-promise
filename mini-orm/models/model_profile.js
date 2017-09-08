let sqlite3=require('sqlite3').verbose();
let db=new sqlite3.Database('./db/database.db');

class profile{
  static getAll(){
    let prom=new Promise((resolve,reject)=>{
      let qry=`select * from tb_profile`;
      db.run(qry,(err,data)=>{
        if(!err){
          resolve(data);
        }else{
          reject(err);
        }
      })
    })
    return prom
  }
}
