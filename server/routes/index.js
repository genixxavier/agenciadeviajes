const express = require('express')
const router = express.Router()

/**Controllers */
const nosotrosController = require('../controllers/nosotrosController')
const homeController = require('../controllers/homeController')
const viajesController = require('../controllers/viajesController')
const textimonialesController = require('../controllers/testimonialesController')

module.exports = ()=>{
    router.get('/', homeController.homeControllerPage)

    router.get('/nosotros',nosotrosController.infoNosotros)

    router.get('/viajes', viajesController.viajesControllerPage)

    router.get('/viajes/:id', viajesController.viajeControllerDetalle)

    router.get('/testimoniales', textimonialesController.testimonalesControllerPage)

    router.post('/testimoniales', textimonialesController.saveControllerTestimonial)

    return router
}