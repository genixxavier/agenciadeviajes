const Viaje = require('../models/Viajes')

exports.viajesControllerPage = async (req,res)=>{
    const viajes = await Viaje.findAll()
    res.render('viajes',{
        pagina:'Proximos viajes',
        viajes
    })
    
}

exports.viajeControllerDetalle = async (req,res)=>{
    const viaje = await Viaje.findByPk(req.params.id)
    res.render('viaje',{
        pagina:'Viaje',
        viaje
    })
}