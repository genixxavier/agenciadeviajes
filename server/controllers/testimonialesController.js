const Testimonial = require('../models/Testimoniales')

exports.testimonalesControllerPage = async (req,res)=>{
    const testimoniales = await Testimonial.findAll()
    res.render('testimoniales',{
        pagina:'Testimoniales',
        testimoniales
    })
}

exports.saveControllerTestimonial  = async (req,res)=>{
    let {nombre,correo,mensaje} = req.body
    let errores = []
    if(!nombre){
        errores.push({'mensaje':'Agrega tu nombre'})
    }
    if(!correo){
        errores.push({'mensaje':'Agrega tu correo'})
    }
    if(!mensaje){
        errores.push({'mensaje':'Agrega tu mensaje'})
    }

    if(errores.length > 0){
        //vista errores
        const testimoniales = await Testimonial.findAll()
        res.render('testimoniales',{
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        })
    } else{
        //almacenar
        const testimoniales = await Testimonial.create({nombre,correo,mensaje})
                    .then(testimoniales=> res.redirect('/testimoniales'))
                    .catch(err=>console.log(err));
    }
}