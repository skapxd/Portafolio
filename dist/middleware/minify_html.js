"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.minifyHtml2 = exports.minifyHtml = void 0;
const html_minifier_1 = require("html-minifier");
const { requestHandler, responseHandler } = require("express-intercept");
exports.minifyHtml = responseHandler()
    .if((res) => {
    return /html/i.test(res.getHeader("content-type"));
})
    .replaceString((body, req, res) => {
    // return body.replace(/MacBook/g, "Surface")
    const body2 = html_minifier_1.minify(body, {
        collapseInlineTagWhitespace: true,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true
    });
    // res.send(body2)
    return body2;
});
const minifyHtml2 = (req, res, next) => {
    let oldSend = res.send;
    res.send = function (data) {
        console.log(data); // do something with the data
        res.send = oldSend; // set function back to avoid the 'double-send'
        return res.send(data); // just call as normal with data
    };
    next();
};
exports.minifyHtml2 = minifyHtml2;
// export const minifyHtml =  responseHandler()
//     .if( (res: Response) => /html/i.test(res.getHeader("content-type")))
//     .replaceString((body: string) => body.replace(/MacBook/g, "Surface"))
// const body2 = minify(
//     body,
//     {
//         collapseInlineTagWhitespace: true,
//         collapseWhitespace: true,
//         minifyCSS: true,
//         minifyJS: true
//     } 
// );
