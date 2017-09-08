let sqlite3=require('sqlite3').verbose();
let db=new sqlite3.Database('./db/database.db');
db.serialize(function(){
  db.run(`create table tb_profile (id INTEGER PRIMARY KEY AUTOINCREMENT,
          name VARCHAR(100), company VARCHAR(100), address VARCHAR(100))`);
  db.run(`create table tb_address (id INTEGER PRIMARY KEY AUTOINCREMENT,
          street VARCHAR(100), city VARCHAR(100), id_profile INTEGER,
          FOREIGN KEY (id_profile) REFERENCES tb_profile(id))`);
});
