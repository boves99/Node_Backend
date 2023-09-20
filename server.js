const express=require('express');
const app=express();
const http=require('http');
const server=http.createServer(app);
const logger= require('morgan');
const cors = require('cors');

/*
ROUTE IMPORTATION
*/
const usersRoutes=require('./routes/userRoutes');

const port=process.env.PORT || 3000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors());

app.disable('x-powered-by');


app.set('port',port);


/*
ROUTE CALLS
*/

usersRoutes(app);

server.listen(3000,'192.168.100.84' || 'localhost', function(){
  console.log('Aplicacion de NodeJS ' + process.pid +' Iniciada...')  
});

app.get('/',(req,res)=>{
    res.send('Ruta raiz del backend');
});

app.get('/test',(req,res)=>{
    res.send('Esta es la ruta test');
});

//ERROR HANDLER
app.use((err,req,res,next)=>{
    console.log('Errorrrr'+'err');
    res.status(err.status || 500).send(err.stack);
});