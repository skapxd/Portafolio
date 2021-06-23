"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cache = void 0;
const memory_cache_1 = __importDefault(require("memory-cache"));
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
