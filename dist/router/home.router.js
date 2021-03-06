"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const home_controller_1 = require("../controller/home.controller");
const memory_cache_1 = require("../middleware/memory_cache");
const router = express_1.Router();
router.get(
/* Nombre de ruta -->*/ '/', [/* Array de middlewares*/ memory_cache_1.cache(10)], 
/* Controller -->*/ home_controller_1.getHome);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5yb3V0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGVyL2hvbWUucm91dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQWlDO0FBQ2pDLG1FQUF3RDtBQUN4RCw2REFBbUQ7QUFFbkQsTUFBTSxNQUFNLEdBQUcsZ0JBQU0sRUFBRSxDQUFDO0FBRXhCLE1BQU0sQ0FBQyxHQUFHO0FBQ04sdUJBQXVCLENBQUMsR0FBRyxFQUMzQixDQUFFLHlCQUF5QixDQUFDLG9CQUFLLENBQUMsRUFBRSxDQUFDLENBQUU7QUFDdkMsbUJBQW1CLENBQUMseUJBQU8sQ0FDOUIsQ0FBQztBQUVGLGtCQUFlLE1BQU0sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgeyBnZXRIb21lIH0gZnJvbSAnLi4vY29udHJvbGxlci9ob21lLmNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBjYWNoZSB9IGZyb20gJy4uL21pZGRsZXdhcmUvbWVtb3J5X2NhY2hlJztcclxuXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpO1xyXG5cclxucm91dGVyLmdldChcclxuICAgIC8qIE5vbWJyZSBkZSBydXRhIC0tPiovICcvJywgXHJcbiAgICBbIC8qIEFycmF5IGRlIG1pZGRsZXdhcmVzKi8gY2FjaGUoMTApIF0sICBcclxuICAgIC8qIENvbnRyb2xsZXIgLS0+Ki8gZ2V0SG9tZSAsXHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XHJcblxyXG4iXX0=