import "reflect-metadata";

import dotenv from 'dotenv';
dotenv.config();

import routes from './router/home.router';
import Serve, { ViewEngine } from './serve';
import { Request, Response } from 'express';
import post from './router/api/post';

import { createConnection } from "typeorm";
import { credentialsDB } from './credentials';

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
        routes,
        post
    ],
    routError: ( req: Request, res: Response ) => {
        
        return res.send('page not found')
    },
});

