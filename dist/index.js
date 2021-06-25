"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const home_router_1 = __importDefault(require("./router/home.router"));
const serve_1 = __importStar(require("./serve"));
const post_1 = __importDefault(require("./router/api/post"));
const typeorm_1 = require("typeorm");
typeorm_1.createConnection({
    type: "sqlite",
    // type: "mysql", 
    // port: 3306,  
    // host: credentialsDB.host,
    // username: credentialsDB.username,  
    // password: credentialsDB.password,
    database: 'credentialsDB.database',
    synchronize: true,
    logging: false,
    entities: ["dist/entity/**/*.js"],
})
    .then(() => console.log(`Connection success `))
    .catch(err => console.log('Connection err: ', err));
const ifProductionMode = (true !== null && true !== void 0 ? true : process.env.PORT) ? true : false;
new serve_1.default({
    ifProductionMode: ifProductionMode,
    port: process.env.PORT || 3000,
    viewEngine: serve_1.ViewEngine.EJS,
    routes: [
        home_router_1.default,
        post_1.default
    ],
    routError: (req, res) => {
        return res.send('page not found');
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNEJBQTBCO0FBRTFCLG9EQUE0QjtBQUM1QixnQkFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRWhCLHVFQUEwQztBQUMxQyxpREFBNEM7QUFFNUMsNkRBQXFDO0FBRXJDLHFDQUEyQztBQUcxQywwQkFBZ0IsQ0FBQztJQUNkLElBQUksRUFBRSxRQUFRO0lBQ2Qsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQiw0QkFBNEI7SUFDNUIsc0NBQXNDO0lBQ3RDLG9DQUFvQztJQUNwQyxRQUFRLEVBQUUsd0JBQXdCO0lBQ2xDLFdBQVcsRUFBRSxJQUFJO0lBQ2pCLE9BQU8sRUFBRSxLQUFLO0lBQ2QsUUFBUSxFQUFFLENBQUMscUJBQXFCLENBQUM7Q0FFcEMsQ0FBQztLQUNELElBQUksQ0FBRSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFHLENBQUM7S0FDakQsS0FBSyxDQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBR3JELE1BQU0sZ0JBQWdCLEdBQUcsQ0FBQSxJQUFJLGFBQUosSUFBSSxjQUFKLElBQUksR0FBSSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUE7QUFFaEUsSUFBSSxlQUFLLENBQUM7SUFDTixnQkFBZ0IsRUFBRSxnQkFBZ0I7SUFDbEMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUk7SUFDOUIsVUFBVSxFQUFFLGtCQUFVLENBQUMsR0FBRztJQUMxQixNQUFNLEVBQUU7UUFDSixxQkFBTTtRQUNOLGNBQUk7S0FDUDtJQUNELFNBQVMsRUFBRSxDQUFFLEdBQVksRUFBRSxHQUFhLEVBQUcsRUFBRTtRQUV6QyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtJQUNyQyxDQUFDO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwicmVmbGVjdC1tZXRhZGF0YVwiO1xyXG5cclxuaW1wb3J0IGRvdGVudiBmcm9tICdkb3RlbnYnO1xyXG5kb3RlbnYuY29uZmlnKCk7XHJcblxyXG5pbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVyL2hvbWUucm91dGVyJztcclxuaW1wb3J0IFNlcnZlLCB7IFZpZXdFbmdpbmUgfSBmcm9tICcuL3NlcnZlJztcclxuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IHBvc3QgZnJvbSAnLi9yb3V0ZXIvYXBpL3Bvc3QnO1xyXG5cclxuaW1wb3J0IHsgY3JlYXRlQ29ubmVjdGlvbiB9IGZyb20gXCJ0eXBlb3JtXCI7XHJcbmltcG9ydCB7IGNyZWRlbnRpYWxzREIgfSBmcm9tICcuL2NyZWRlbnRpYWxzJztcclxuXHJcbiBjcmVhdGVDb25uZWN0aW9uKHtcclxuICAgIHR5cGU6IFwic3FsaXRlXCIsIFxyXG4gICAgLy8gdHlwZTogXCJteXNxbFwiLCBcclxuICAgIC8vIHBvcnQ6IDMzMDYsICBcclxuICAgIC8vIGhvc3Q6IGNyZWRlbnRpYWxzREIuaG9zdCxcclxuICAgIC8vIHVzZXJuYW1lOiBjcmVkZW50aWFsc0RCLnVzZXJuYW1lLCAgXHJcbiAgICAvLyBwYXNzd29yZDogY3JlZGVudGlhbHNEQi5wYXNzd29yZCxcclxuICAgIGRhdGFiYXNlOiAnY3JlZGVudGlhbHNEQi5kYXRhYmFzZScsIFxyXG4gICAgc3luY2hyb25pemU6IHRydWUsXHJcbiAgICBsb2dnaW5nOiBmYWxzZSxcclxuICAgIGVudGl0aWVzOiBbXCJkaXN0L2VudGl0eS8qKi8qLmpzXCJdLFxyXG5cclxufSlcclxuLnRoZW4oICgpID0+IGNvbnNvbGUubG9nKGBDb25uZWN0aW9uIHN1Y2Nlc3MgYCAgKSlcclxuLmNhdGNoKCBlcnIgPT4gY29uc29sZS5sb2coJ0Nvbm5lY3Rpb24gZXJyOiAnLCBlcnIpKTtcclxuXHJcblxyXG5jb25zdCBpZlByb2R1Y3Rpb25Nb2RlID0gdHJ1ZSA/PyBwcm9jZXNzLmVudi5QT1JUID8gdHJ1ZSA6IGZhbHNlXHJcblxyXG5uZXcgU2VydmUoe1xyXG4gICAgaWZQcm9kdWN0aW9uTW9kZTogaWZQcm9kdWN0aW9uTW9kZSxcclxuICAgIHBvcnQ6IHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMCxcclxuICAgIHZpZXdFbmdpbmU6IFZpZXdFbmdpbmUuRUpTLFxyXG4gICAgcm91dGVzOiBbXHJcbiAgICAgICAgcm91dGVzLFxyXG4gICAgICAgIHBvc3RcclxuICAgIF0sXHJcbiAgICByb3V0RXJyb3I6ICggcmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlICkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiByZXMuc2VuZCgncGFnZSBub3QgZm91bmQnKVxyXG4gICAgfSxcclxufSk7XHJcblxyXG4iXX0=