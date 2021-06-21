"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetaTag = exports.HeadTag = exports.HtmlTag = exports.CreateDoubleTag = exports.CreateSingleTag = exports.Attr = void 0;
const html_minifier_1 = require("html-minifier");
const Attr = ({ name, value }) => {
    return { name, value };
};
exports.Attr = Attr;
class CreateSingleTag {
    constructor(CreateSingleTag) {
        var _a, _b;
        this.CreateSingleTag = CreateSingleTag;
        this.CreateSingleTag.tag = (_a = this.CreateSingleTag.tag) !== null && _a !== void 0 ? _a : 'div';
        this.CreateSingleTag.attr = (_b = this.CreateSingleTag.attr) !== null && _b !== void 0 ? _b : [];
        this.tag = `
        <${this.CreateSingleTag.tag} 
            ${this.attr(this.CreateSingleTag.attr)}
            >


        </${this.CreateSingleTag.tag}>
        `;
    }
    attr(attr) {
        return attr.map((e) => {
            return `${e.name}="${e.value}" `;
        })
            .toString()
            .replace(/,/g, '');
    }
    getTag() {
        return html_minifier_1.minify(this.tag, {
            collapseInlineTagWhitespace: true,
            collapseWhitespace: true,
            minifyCSS: true,
            minifyJS: true
        });
    }
}
exports.CreateSingleTag = CreateSingleTag;
class CreateDoubleTag extends CreateSingleTag {
    constructor(CreateElement) {
        var _a, _b, _c;
        super({});
        this.CreateElement = CreateElement;
        this.CreateElement.tag = (_a = this.CreateElement.tag) !== null && _a !== void 0 ? _a : 'div';
        this.CreateElement.attr = (_b = this.CreateElement.attr) !== null && _b !== void 0 ? _b : [];
        this.CreateElement.children = (_c = this.CreateElement.children) !== null && _c !== void 0 ? _c : [];
        this.tag = `
        <${this.CreateElement.tag} 
            ${this.attr(this.CreateElement.attr)}
            >

            ${this.children(this.CreateElement.children)}

        </${this.CreateElement.tag}>
        `;
    }
    children(children) {
        return children.map((e) => {
            return `${e}`;
        })
            .toString()
            .replace(/,/g, '');
    }
}
exports.CreateDoubleTag = CreateDoubleTag;
const HtmlTag = (args) => {
    var _a;
    const attr = args.attr;
    attr === null || attr === void 0 ? void 0 : attr.push(exports.Attr({
        name: 'lang',
        value: (_a = args.lang) !== null && _a !== void 0 ? _a : 'en'
    }));
    return new CreateDoubleTag({
        attr: attr,
        tag: 'html',
        children: [
            args.head,
            // args.body
        ]
    }).getTag();
};
exports.HtmlTag = HtmlTag;
const HeadTag = (args) => {
    return new CreateSingleTag({
        attr: args.meta,
        tag: 'head'
    }).getTag();
};
exports.HeadTag = HeadTag;
const MetaTag = (args) => {
    return new CreateSingleTag({
        attr: args.attr,
        tag: 'meta'
    }).getTag();
};
exports.MetaTag = MetaTag;
