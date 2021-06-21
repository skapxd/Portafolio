import { Router } from 'express';
import { getHome } from '../controller/home.controller';
import { cache, finalParagraphInterceptor } from '../middleware/memory_cache';

// const cache = require('express-redis-cache');

const router = Router();

// const cache = ExpressRedisCache();

router.get(
    /* Nombre de ruta -->*/ '/', 
    // [ /* Array de middlewares*/ cache.route() ],  
    // cache.route('/'),
    // cache().route('hola'),
    cache(10),
    /* Controller -->*/ getHome ,
);

export default router;

