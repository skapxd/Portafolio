import "reflect-metadata";

import dotenv from 'dotenv';
dotenv.config();

import portafolio from './router/home.router';
import Serve, { ViewEngine } from './serve';
import { Request, Response } from 'express';
import apiPortafolioPostForm from './router/api/post';

import { createConnection } from "typeorm";
import { credentialsDB } from './credentials';
import pyndelePrincipal from "./router/pyndele/principal.router";

createConnection({
    type: "mysql", 
    port: 3306,  
    host: credentialsDB.host,
    username: credentialsDB.username,  
    password: credentialsDB.password,
    database: credentialsDB.database, 
    entities: ["dist/entity/**/*.js"],
    synchronize: true,

})
.then( () => console.log(`Connection success `  )) 
.catch( err => console.log('Connection err: ', err)); 


const ifProductionMode =   false
// const ifProductionMode = true ?? process.env.PORT ? true : false

new Serve({
    ifProductionMode: ifProductionMode,
    port: process.env.PORT || 3000,
    viewEngine: ViewEngine.EJS,
    routes: [
        // Portafolio
        portafolio,
        apiPortafolioPostForm,

        // Pyndele
        pyndelePrincipal,

        // Tecnología media celular

    ],
    routError: ( req: Request, res: Response ) => {
        
        return res.send('page not found')
    },
});

