const User=require('../models/user');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const keys=require('../config/keys');

module.exports={

    login(req,res){
        const pin=req.body.pin;
        const telefono=req.body.telefono;

        User.findByTelefono(telefono,async(err,myUser)=>{
            if(err){
                return res.status(501).json({
                    success: false,
                    message: 'Error al crear el usuario',
                    error: err
                });
            }
            if(!myUser){
                return res.status(401).json({
                    success: false,
                    message: 'Telefono no encontrado',
                    error: err
                });
            }

            const isPasswordValid= await bcrypt.compare(pin, myUser.pin);

            if(isPasswordValid){
               const token= jwt.sign({iduser: myUser.iduser, telefono: myUser.telefono}, keys.secretOrKey, {});

               const data={
                     iduser:myUser.iduser,
                     nombre:myUser.nombre,
                     telefono:myUser.telefono,
                     direccion:myUser.direccion,
                     idsector:myUser.idsector,
                     session_token:`JWT ${token}`
               }
               return res.status(201).json({
                success: true,
                message: 'Usuario autenticado exitosamente',
                data: data 
            });

            }
            else{
                return res.status(401).json({
                    success: false,
                    message: 'Pin incorrecto'
                });
            }
            

            
        })    


    },

    register (req,res){
        const user=req.body;
        User.create(user,(err,data)=>{
            if(err){
                return res.status(501).json({
                    success: false,
                    message: 'Error al crear el usuario',
                    error: err
                });
            }
            
                return res.status(201).json({
                    success: true,
                    message: 'Usuario creado exitosamente',
                    data: data 
                });
            
        });


}
}
