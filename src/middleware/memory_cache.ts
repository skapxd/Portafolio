import mcache from "memory-cache";
import { Request, Response, NextFunction, Send } from 'express';

const interceptor = require('express-interceptor');

export const finalParagraphInterceptor = ( duration: number ) => {
    
    return interceptor(  ( req: Request, res: Response ) => {

        return {
            // Only HTML responses will be intercepted
            isInterceptable: function(){
                return /text\/html/.test(res.get('Content-Type'));
            },
            
            // Appends a paragraph at the end of the response body
            intercept: function(body: any, send: any) {

                let key = '__express__' + req.originalUrl || req.url
        
                let cachedBody = mcache.get(key)
                
                if (cachedBody) {

                    console.log('Cache');
                
                    return res.send(cachedBody)

                } else {

                    mcache.put(key, body, 100 * 1000, );

                    res.send(body)
                    
                    // next()
                }
            }
        };
    })
} 

export const cache = (duration: number) => {

    return (req: Request, res: Response, next: NextFunction) => {
        
        let key = '__express__' + req.originalUrl || req.url
        
        let cachedBody = mcache.get(key)
        
        if (cachedBody) {

            console.log('Cache');
        
            return res.send(cachedBody)

        } else {
            
            next()
        }
    
    }
    
}
    
    