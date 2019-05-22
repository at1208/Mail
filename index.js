const express = require('express');
const mysql = require('mysql');
const config = require('./config/db');
const db = require('./config/db');


const app = express();


const connection = mysql.createConnection({
  host :db.database.host,
  user: db.database.user,
  password:  db.database.password,
  database: db.database.database
});
connection.connect((err,result) =>{
  if(err)console.log(err);
  console.log(`Connected to mysql`);
});


query = 'SELECT COUNT(*) as count FROM user';
connection.query(query,(result,err) => {
if(err)console.log(err)
console.log(result);
});

app.get('/', (req,res) => {

})



const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`server is listening to ${port}`);
})
