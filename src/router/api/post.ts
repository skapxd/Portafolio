import { Router } from 'express';
import { postPost } from '../../controller/api/post';

const post = Router();

post.post(
    /* Nombre de ruta -->*/ '/post', 
    [ /* Array de middlewares*/  ],  
    /* Controller -->*/  postPost,
);

export default post;

