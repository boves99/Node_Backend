const db = require('../config/config');
const bcrypt = require('bcryptjs');

const User={};
User.findById= (iduser,result)=>{

    const sql ='SELECT iduser,nombre,telefono,direccion,idsector FROM users WHERE iduser = ?';
    db.query(sql,[iduser],(err,user)=>{
        if(err){
            console.log('Error: ',err);
            result(err,null);
        }
        else{
            console.log('Usuario encontrado: ',user);
            result(null,user);
        }
    });
}

User.findByTelefono= (telefono,result)=>{

    const sql ='SELECT iduser,nombre,telefono,direccion,pin,idsector FROM users WHERE telefono = ?';
    db.query(sql,[telefono],(err,user)=>{
        if(err){
            console.log('Error: ',err);
            result(err,null);
        }
        else{
            console.log('Usuario encontrado: ',user[0]);
            result(null,user[0]);
        }
    });
}

User.create= async(user,result)=>{
    const hash= await bcrypt.hash(user.pin,10);

    const sql='INSERT INTO users(nombre,telefono,direccion,pin,idsector,created_at,updated_at) VALUES (?,?,?,?,?,?,?)';
    
    db.query(sql,
        [
            user.nombre,
            user.telefono,
            user.direccion,
            hash,
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
    );

    
};

module.exports=User;