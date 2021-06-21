"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const home_controller_1 = require("../controller/home.controller");
const memory_cache_1 = require("../middleware/memory_cache");
// const cache = require('express-redis-cache');
const router = express_1.Router();
// const cache = ExpressRedisCache();
router.get(
/* Nombre de ruta -->*/ '/', 
// [ /* Array de middlewares*/ cache.route() ],  
// cache.route('/'),
// cache().route('hola'),
memory_cache_1.cache(10), 
/* Controller -->*/ home_controller_1.getHome);
exports.default = router;
