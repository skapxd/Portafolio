import { Router } from 'express'
import { getRoot, getThankYou, postForm } from '../../controller/pyndele/principal';

const pyndelePrincipal = Router()

pyndelePrincipal.get(
    /* Nombre de ruta -->*/ '/principal', 
    [ /* Array de middlewares*/ ],  
    /* Controller -->*/ getRoot 
);

pyndelePrincipal.get(
    /* Nombre de ruta -->*/ '/gracias', 
    [ /* Array de middlewares*/ ],  
    /* Controller -->*/ getThankYou 
);


pyndelePrincipal.post(
    /* Nombre de ruta -->*/ '/form', 
    [ /* Array de middlewares*/ ],  
    /* Controller -->*/ postForm 
);

export default pyndelePrincipal;