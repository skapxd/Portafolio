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
const credentials_1 = require("./credentials");
typeorm_1.createConnection({
    type: "mysql",
    port: 3306,
    host: credentials_1.credentialsDB.host,
    username: credentials_1.credentialsDB.username,
    password: credentials_1.credentialsDB.password,
    database: credentials_1.credentialsDB.database,
    entities: ["dist/entity/**/*.js"],
    synchronize: true,
})
    .then(() => console.log(`Connection success `))
    .catch(err => console.log('Connection err: ', err));
const ifProductionMode = false;
// const ifProductionMode = true ?? process.env.PORT ? true : false
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNEJBQTBCO0FBRTFCLG9EQUE0QjtBQUM1QixnQkFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRWhCLHVFQUEwQztBQUMxQyxpREFBNEM7QUFFNUMsNkRBQXFDO0FBRXJDLHFDQUEyQztBQUMzQywrQ0FBOEM7QUFFOUMsMEJBQWdCLENBQUM7SUFDYixJQUFJLEVBQUUsT0FBTztJQUNiLElBQUksRUFBRSxJQUFJO0lBQ1YsSUFBSSxFQUFFLDJCQUFhLENBQUMsSUFBSTtJQUN4QixRQUFRLEVBQUUsMkJBQWEsQ0FBQyxRQUFRO0lBQ2hDLFFBQVEsRUFBRSwyQkFBYSxDQUFDLFFBQVE7SUFDaEMsUUFBUSxFQUFFLDJCQUFhLENBQUMsUUFBUTtJQUNoQyxRQUFRLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztJQUNqQyxXQUFXLEVBQUUsSUFBSTtDQUVwQixDQUFDO0tBQ0QsSUFBSSxDQUFFLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUcsQ0FBQztLQUNqRCxLQUFLLENBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFHckQsTUFBTSxnQkFBZ0IsR0FBSyxLQUFLLENBQUE7QUFDaEMsbUVBQW1FO0FBRW5FLElBQUksZUFBSyxDQUFDO0lBQ04sZ0JBQWdCLEVBQUUsZ0JBQWdCO0lBQ2xDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJO0lBQzlCLFVBQVUsRUFBRSxrQkFBVSxDQUFDLEdBQUc7SUFDMUIsTUFBTSxFQUFFO1FBQ0oscUJBQU07UUFDTixjQUFJO0tBQ1A7SUFDRCxTQUFTLEVBQUUsQ0FBRSxHQUFZLEVBQUUsR0FBYSxFQUFHLEVBQUU7UUFFekMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUE7SUFDckMsQ0FBQztDQUNKLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcInJlZmxlY3QtbWV0YWRhdGFcIjtcclxuXHJcbmltcG9ydCBkb3RlbnYgZnJvbSAnZG90ZW52JztcclxuZG90ZW52LmNvbmZpZygpO1xyXG5cclxuaW1wb3J0IHJvdXRlcyBmcm9tICcuL3JvdXRlci9ob21lLnJvdXRlcic7XHJcbmltcG9ydCBTZXJ2ZSwgeyBWaWV3RW5naW5lIH0gZnJvbSAnLi9zZXJ2ZSc7XHJcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCBwb3N0IGZyb20gJy4vcm91dGVyL2FwaS9wb3N0JztcclxuXHJcbmltcG9ydCB7IGNyZWF0ZUNvbm5lY3Rpb24gfSBmcm9tIFwidHlwZW9ybVwiO1xyXG5pbXBvcnQgeyBjcmVkZW50aWFsc0RCIH0gZnJvbSAnLi9jcmVkZW50aWFscyc7XHJcblxyXG5jcmVhdGVDb25uZWN0aW9uKHtcclxuICAgIHR5cGU6IFwibXlzcWxcIiwgXHJcbiAgICBwb3J0OiAzMzA2LCAgXHJcbiAgICBob3N0OiBjcmVkZW50aWFsc0RCLmhvc3QsXHJcbiAgICB1c2VybmFtZTogY3JlZGVudGlhbHNEQi51c2VybmFtZSwgIFxyXG4gICAgcGFzc3dvcmQ6IGNyZWRlbnRpYWxzREIucGFzc3dvcmQsXHJcbiAgICBkYXRhYmFzZTogY3JlZGVudGlhbHNEQi5kYXRhYmFzZSwgXHJcbiAgICBlbnRpdGllczogW1wiZGlzdC9lbnRpdHkvKiovKi5qc1wiXSxcclxuICAgIHN5bmNocm9uaXplOiB0cnVlLFxyXG5cclxufSlcclxuLnRoZW4oICgpID0+IGNvbnNvbGUubG9nKGBDb25uZWN0aW9uIHN1Y2Nlc3MgYCAgKSkgXHJcbi5jYXRjaCggZXJyID0+IGNvbnNvbGUubG9nKCdDb25uZWN0aW9uIGVycjogJywgZXJyKSk7IFxyXG5cclxuXHJcbmNvbnN0IGlmUHJvZHVjdGlvbk1vZGUgPSAgIGZhbHNlXHJcbi8vIGNvbnN0IGlmUHJvZHVjdGlvbk1vZGUgPSB0cnVlID8/IHByb2Nlc3MuZW52LlBPUlQgPyB0cnVlIDogZmFsc2VcclxuXHJcbm5ldyBTZXJ2ZSh7XHJcbiAgICBpZlByb2R1Y3Rpb25Nb2RlOiBpZlByb2R1Y3Rpb25Nb2RlLFxyXG4gICAgcG9ydDogcHJvY2Vzcy5lbnYuUE9SVCB8fCAzMDAwLFxyXG4gICAgdmlld0VuZ2luZTogVmlld0VuZ2luZS5FSlMsXHJcbiAgICByb3V0ZXM6IFtcclxuICAgICAgICByb3V0ZXMsXHJcbiAgICAgICAgcG9zdFxyXG4gICAgXSxcclxuICAgIHJvdXRFcnJvcjogKCByZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UgKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHJlcy5zZW5kKCdwYWdlIG5vdCBmb3VuZCcpXHJcbiAgICB9LFxyXG59KTtcclxuXHJcbiJdfQ==