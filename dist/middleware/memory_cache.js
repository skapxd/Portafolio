"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cache = exports.finalParagraphInterceptor = void 0;
const memory_cache_1 = __importDefault(require("memory-cache"));
const interceptor = require('express-interceptor');
const finalParagraphInterceptor = (duration) => {
    return interceptor((req, res) => {
        return {
            // Only HTML responses will be intercepted
            isInterceptable: function () {
                return /text\/html/.test(res.get('Content-Type'));
            },
            // Appends a paragraph at the end of the response body
            intercept: function (body, send) {
                let key = '__express__' + req.originalUrl || req.url;
                let cachedBody = memory_cache_1.default.get(key);
                if (cachedBody) {
                    console.log('Cache');
                    return res.send(cachedBody);
                }
                else {
                    memory_cache_1.default.put(key, body, 100 * 1000);
                    res.send(body);
                    // next()
                }
            }
        };
    });
};
exports.finalParagraphInterceptor = finalParagraphInterceptor;
const cache = (duration) => {
    return (req, res, next) => {
        let key = '__express__' + req.originalUrl || req.url;
        let cachedBody = memory_cache_1.default.get(key);
        if (cachedBody) {
            console.log('Cache');
            return res.send(cachedBody);
        }
        else {
            next();
        }
    };
};
exports.cache = cache;
