//importar express
const express = require('express')

var path = require('path');
const bodyParser = require('body-parser')
const routes = require('./routes')
const configs = require('./config')
require('dotenv').config({path:'variables.env'})

/*db.authenticate()
    .then(()=>console.log('Exitooo'))
    .catch(e => console.log(e))*/

//configurar express
const app = express()
//habilitar pug
app.set('view engine', 'pug')
//añadir las vistas
app.set('views', path.join(__dirname, 'views'));
//archivos staticos
app.use(express.static(path.join(__dirname, '../public')));
//validar si estamos en desarrollo o produccion
const config = configs[app.get('env')]
//creamos la variable para el sitio web
app.locals.titulo = config.nombresitio
//muestra el año actual y genera urta path
app.use((req,res,next)=>{
    //crear año
    const fecha = new Date()
    res.locals.fechaActual = fecha.getFullYear()
    res.locals.ruta = req.path
    console.log(res.locals)
    return next()
})
//Ejecutamos el body parser
app.use(bodyParser.urlencoded({extended:true}))
//use responde a varios metodos(get,post,put,delete)
app.use('/',routes())

/**Puerto y host para la app */
const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 3000
app.listen(port,host, ()=>{
    console.log('El servidor esta funcionando')
})