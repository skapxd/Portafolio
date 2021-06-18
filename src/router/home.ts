import { Router } from 'express'
import { getHome } from '../controller/home';

const router = Router();

router.get(
    /* Nombre de ruta -->*/ '/', 
    [ /* Array de middlewares*/ ],  
    /* Controller -->*/ getHome 
);

export default router;