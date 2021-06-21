import mcache from "memory-cache";
import { Request, Response } from 'express';

export const getHome = async ( req: Request, res: Response) => {
        
    let key = '__express__' + req.originalUrl || req.url

    return res.render(
        'home/home',
        // {},
        (err: Error, html: string) => {

            mcache.put(key, html, 1000 * 1000, );

            res.send(html)
        }
    )
}