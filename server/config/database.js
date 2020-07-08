const Sequalize = require('sequelize')
require('dotenv').config({path:'variables.env'})

module.exports = new Sequalize(process.env.BD_NOMBRE,process.env.BD_USER,process.env.BD_PASS,{
    host: process.env.BD_HOST,
    port: process.env.BD_PORT,
    dialect: 'mysql',
    define:{
       timestamps: false 
    }

})