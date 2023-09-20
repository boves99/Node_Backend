const db = require('../config/config');

const User={};

User.create=(user,result)=>{

    const sql='INSERT INTO users(nombre,telefono,direccion,pin,idsector,created_at,updated_at) VALUES (?,?,?,?,?,?,?)';
    
    db.query(sql,
        [
            user.nombre,
            user.telefono,
            user.direccion,
            user.pin,
            user.idsector,
            new Date(),
            new Date()
        ],
        (err,res)=>{
            if(err){
                console.log('Error: ',err);
                result(err,null);
            }
            else{
                console.log('Id del nuevo usuario',res.insertId);
                result(null,res.insertId);
            }
        }
    )

    
}

module.exports=User;