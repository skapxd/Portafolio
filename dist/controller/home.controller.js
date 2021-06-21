"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHome = void 0;
const memory_cache_1 = __importDefault(require("memory-cache"));
const getHome = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let key = '__express__' + req.originalUrl || req.url;
    return res.render('home/home', 
    // {},
    (err, html) => {
        memory_cache_1.default.put(key, html, 1000 * 1000);
        res.send(html);
    });
});
exports.getHome = getHome;
