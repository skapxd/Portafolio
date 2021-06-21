"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const post_1 = require("../../controller/api/post");
const post = express_1.Router();
post.post(
/* Nombre de ruta -->*/ '/post', [ /* Array de middlewares*/], 
/* Controller -->*/ post_1.postPost);
exports.default = post;
