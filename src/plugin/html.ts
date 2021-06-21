import { minify } from "html-minifier";

interface AttrI {
    value: string
    name: string
}

export const Attr  = ( {name, value} : AttrI) => {
    return  {name, value}
}

interface CreateSingleTagI {
    attr?: AttrI[] | undefined
    tag?: string | undefined
}

interface CreateDoubleTagI {
    attr?: AttrI[] | undefined
    tag?: string | undefined
    children?: any[] | undefined
}

export class CreateSingleTag{

    public tag: string

    constructor(
        private CreateSingleTag: CreateSingleTagI
    ){
        this.CreateSingleTag.tag = this.CreateSingleTag.tag ?? 'div' 
        this.CreateSingleTag.attr = this.CreateSingleTag.attr ?? [] 


        this.tag = `
        <${this.CreateSingleTag.tag} 
            ${
                this.attr(this.CreateSingleTag.attr)
            }
            >


        </${this.CreateSingleTag.tag}>
        `
    }

    
    public attr( attr : AttrI[] ){

        return attr.map( (e) => {
            return `${e.name}="${e.value}" `
        })
        .toString()
        .replace(/,/g, '')
    }

    public getTag(){

        return minify(
            this.tag,
            {
                collapseInlineTagWhitespace: true,
                collapseWhitespace: true,
                minifyCSS: true,
                minifyJS: true
          
            } 
        );
    }
}

export class CreateDoubleTag extends CreateSingleTag{

    constructor(
        private CreateElement : CreateDoubleTagI 
    ) {

        super({});

        this.CreateElement.tag = this.CreateElement.tag ?? 'div' 
        this.CreateElement.attr = this.CreateElement.attr ?? [] 
        this.CreateElement.children = this.CreateElement.children ?? [] 


        this.tag = `
        <${this.CreateElement.tag} 
            ${
                this.attr(this.CreateElement.attr)
            }
            >

            ${
                this.children(this.CreateElement.children)
            }

        </${this.CreateElement.tag}>
        `
    }

    public children( children : string[]){
        
        return children.map( (e) => {
            return `${e}`
        })
        .toString()
        .replace(/,/g, '')
    }
}



interface HtmlTagI extends 
    Omit< CreateDoubleTagI, "tag"> {
    
    head: HeadTagI
    body: string[]
    lang?: string
}

export const HtmlTag = ( args: HtmlTagI ) => {

    const attr = args.attr

    attr?.push(
        Attr({
            name: 'lang',
            value: args.lang ?? 'en'
        })
    )

    return new CreateDoubleTag({
        attr: attr,
        tag: 'html',
        children: [
            args.head,
            // args.body
        ]
    }).getTag()
}


interface HeadTagI extends 
    Omit< CreateDoubleTagI, "tag" | "attr"> {
    
    title: string
    meta: AttrI[]
}

export const HeadTag = ( args: HeadTagI ) => {

    return new CreateSingleTag({
        attr: args.meta,
        tag: 'head'
    }).getTag()
}

interface MetaTagI extends Omit< CreateSingleTagI, "tag"> {}

export const MetaTag = ( args: MetaTagI ) => {

    return new CreateSingleTag({
        attr: args.attr,
        tag: 'meta'
    }).getTag()
}

