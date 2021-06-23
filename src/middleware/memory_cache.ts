import mcache from "memory-cache";
import { Request, Response, NextFunction } from 'express';


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
    
    