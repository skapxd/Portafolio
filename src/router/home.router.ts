import { Router } from 'express';
import { getHome } from '../controller/home.controller';
import { cache } from '../middleware/memory_cache';

const portafolio = Router();

portafolio.get(
    /* Nombre de ruta -->*/ '/', 
    [ /* Array de middlewares*/ cache(10) ],  
    /* Controller -->*/ getHome ,
);

export default portafolio;

