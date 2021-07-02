import { Request, Response } from 'express';
import moment from 'moment';
import { getRepository } from 'typeorm';
import { Contact } from '../../entity/Contact';
import { ContactI } from '../../interfaces/contact';
import stringFilter from '../../utils/filter.string';

export const getRoot = async ( req: Request, res: Response) : Promise<void> => {

    return res.render('pyndele/principal/home/home',{})
}

export const getThankYou = async ( req: Request, res: Response) : Promise<void> => {

    return res.render('root/thank-you/thank-you',{})
}

export const postForm = async (req: Request, res: Response ) : Promise<Response> => {
    
    try {
        
        let body : ContactI = {
            nombre: stringFilter(req.body['nombre']),
            temas: stringFilter(req.body['temas']),
            correo: stringFilter(req.body['correo']),
            // terminos: stringFilter(req.body['terminos']),
            fecha: moment().subtract(5, 'hours').format('YYYY[-]MM[-]DD HH:mm:ss')
        }

        console.log(body)

        // if ( !body.terminos || body.terminos === null ) {
        //     return res.status(200).json({
        //         terms: false
        //     });
        // }

        const newContact = getRepository(Contact).create( body ); 

        const result = await getRepository(Contact).save( newContact );
    
    
        return res.status(200).json({
            success: true
        });    

    } catch (error) {
        
        return res.status(400).json({
            success: false,
            error
        })
    }
}
