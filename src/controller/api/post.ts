import { Request, Response } from 'express';
import Mail from '../../mail/Mail';

interface Body {
    nombre: string
    correo: string
    telefono: string
    mensaje: string
    nombreEmpresa: string
}

const msjTextSkapxd = (data: Body) => {
return `
Tienes un nuevo registro del portafolio
nombre: ${data.nombre}        
correo: ${data.correo}        
telefono: ${data.telefono}        
nombre empresa: ${data.nombreEmpresa}        

mensaje: ${data.mensaje}        
`
}


const msjTextClient = (data: Body) => {
    return `
    Tienes un nuevo registro del portafolio
    nombre: ${data.nombre}        
    correo: ${data.correo}        
    telefono: ${data.telefono}        
    nombre empresa: ${data.nombreEmpresa}        
    
    mensaje: ${data.mensaje}        
    `
}
    

export const postPost = async ( req: Request, res: Response) => {
        
    const body: Body = req.body;

    if ( Object.keys(body).length === 0) {
        
        return res.json({
            success: false
        })
    }
    
    new Mail().sendMail('manuellondogno132@gmail.com',{
        msjText: msjTextSkapxd({
            correo: body.correo,
            mensaje: body.mensaje,
            nombre: body.nombre,
            nombreEmpresa: body.nombreEmpresa,
            telefono: body.telefono
        })
    })

    new Mail().sendMail( body.correo, {
        msjText: msjTextSkapxd({
            correo: body.correo,
            mensaje: body.mensaje,
            nombre: body.nombre,
            nombreEmpresa: body.nombreEmpresa,
            telefono: body.telefono
        })
    })

    return res.json({
        success: true
    })
}