"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.html = void 0;
const html_1 = require("../plugin/html");
exports.html = html_1.HtmlTag({
    lang: 'es',
    // attr
    head: {
        title: 'hola',
        meta: [
            html_1.Attr({
                name: 'charset',
                value: 'UTF-8'
            })
        ]
    },
    body: [
        new html_1.CreateDoubleTag({
            children: ['hola']
        }).getTag()
    ]
});
