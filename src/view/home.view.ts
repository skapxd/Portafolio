import { Attr, CreateDoubleTag, HtmlTag, MetaTag } from "../plugin/html";

export const html = HtmlTag({
    lang: 'es',
    // attr
    
    head: {
        title: 'hola',
            
        meta: [
            Attr({
                name: 'charset',
                value: 'UTF-8'
            })
        ]
    },
    body: [
        new CreateDoubleTag({
            children: ['hola']
        }).getTag()
    ]
})