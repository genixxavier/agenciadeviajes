const Sequalize = require('sequelize')

const db = require('../config/database')

const Testimonial = db.define('testimoniales',{
    nombre:{
        type: Sequalize.STRING
    },
    correo: {
        type: Sequalize.STRING
    },
    mensaje: {
        type: Sequalize.STRING
    },
})

module.exports = Testimonial