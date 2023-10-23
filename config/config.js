
const PORT = process.env.PORT || 3000;
const DB_HOST= process.env.DB_HOST || 'localhost';
const DB_USER= process.env.DB_USER || 'root';
const DB_PASSWORD= process.env.DB_PASSWORD || 'Motorola9*';
const DB_NAME= process.env.DB_NAME || 'gas';
const DB_PORT= process.env.DB_PORT || 3306;


const mysql = require('mysql');
const db= mysql.createConnection({
host: 'bjwfwnnn7gbknhx8zgdq-mysql.services.clever-cloud.com',
user: 'ufnkmhd8ygoqpfvs',
password : '7ve8M2Wsyau73C0ul9oV',
database: 'bjwfwnnn7gbknhx8zgdq',

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

    
