const mysql = require('mysql');
const db= mysql.createConnection({
host: 'localhost',
user: 'root',
password : 'Motorola9*',
database: 'gas'

});

db.connect((err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('Conexion exitosa');
    }
});

module.exports = db;

    
