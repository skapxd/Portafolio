import mcache from "memory-cache";
import { Request, Response } from 'express';
import { minify } from "html-minifier";

export const getHome = async ( req: Request, res: Response) => {
        
    let key = '__express__' + req.originalUrl || req.url

    return res.render( 
        'home/home',
        {},
        (err: Error, html: string) => {

            html = minify(
                html,
                {
                    collapseInlineTagWhitespace: true,
                    collapseWhitespace: true,
                    minifyCSS: true,
                    minifyJS: true
                } 
            );

            // mcache.put(key, html, 1000 * 1000, );

            res.send(html)
        }
    )
}