import routes from './router/home.router';
import Serve, { ViewEngine } from './serve';
import { Request, Response } from 'express';
import post from './router/api/post';

const ifProductionMode = true ?? process.env.PORT ? true : false

new Serve({
    ifProductionMode: ifProductionMode,
    port: process.env.PORT || 3000,
    viewEngine: ViewEngine.EJS,
    routes: [
        routes,
        post
    ],
    routError: ( req: Request, res: Response ) => {
        
        return res.send('page not found')
    }
});

