import routes from './router/home';
import Serve, { ViewEngine } from './serve';
import { Request, Response } from 'express';

new Serve({
    ifProductionMode: process.env.PORT ? true : false ,
    port: process.env.PORT || 3000,
    viewEngine: ViewEngine.EJS,
    routes: [
        routes,
    ],
    routError: ( req: Request, res: Response ) => {
        
        return res.send('page not found')
    }
});
