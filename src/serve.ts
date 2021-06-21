import cluster from "cluster";
import os from "os";

import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { Router, Request, Response } from 'express';

const Ddos = require('ddos')

export enum ViewEngine{
    EJS = 'ejs' 
}

interface DDos {
    burst?: number 
    limit?: number
}

interface Constructor {
    ddosConfig?: DDos
    routes?: Router[]
    port: string | number 
    viewEngine?: ViewEngine
    ifProductionMode?: boolean
    routError?: (req: Request, res: Response) => void;
}


export default class Serve {

    public expressApp = express();
    private numCpu = os.cpus().length;
    

    constructor({
        port,
        routes,
        ddosConfig = {
            burst: 200,
            limit: 100,
        },
        routError, 
        viewEngine,
        ifProductionMode: productionMode
    } : Constructor ) {

        const ddos = new Ddos({burst: ddosConfig.burst, limit: ddosConfig.limit})
        
        // middlewares 
        this.expressApp.use( cors() );
        this.expressApp.use( morgan('dev') );
        this.expressApp.use( express.json() );
        this.expressApp.use( ddos.express );

        // Eliminar encabezado
        this.expressApp.disable('x-powered-by');

        // Static content
        this.expressApp.use( express.static( 'public' ) );
        
        // List of routes
        if (routes) {

            this.expressApp.use(...routes)
        }

        // If the server is a web service
        if (viewEngine) {
            
            this.expressApp.set('view engine', viewEngine);
            this.expressApp.set('views', './public');
        }
        
        // If the path does not exist
        if (routError) {

            this.expressApp.use(routError);
        } 

        if (productionMode) {

            // User All thread enable
            if (cluster.isMaster) {
                for (let i = 0; i < this.numCpu; i++) {
                    
                    cluster.fork();
                }
                cluster.on('exit', (worker, code, signal) => {
                    console.log(`worker ${ worker.process.pid } die`);
                    cluster.fork();
                })
            
            } else {
                this.expressApp.listen( port, () => {
                    console.log(`Server at ${ process.pid } @ http://localhost:${ port }`)
                });
            }
            
        } else {

            this.expressApp.listen( port, () => {
                console.log(`Server at ${ process.pid } @ http://localhost:${ port }`)
            });
        }
    }
}