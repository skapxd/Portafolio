"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewEngine = void 0;
const cluster_1 = __importDefault(require("cluster"));
const os_1 = __importDefault(require("os"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const Ddos = require('ddos');
var ViewEngine;
(function (ViewEngine) {
    ViewEngine["EJS"] = "ejs";
})(ViewEngine = exports.ViewEngine || (exports.ViewEngine = {}));
class Serve {
    constructor({ port, routes, ddosConfig = {
        burst: 200,
        limit: 100,
    }, routError, viewEngine, ifProductionMode, middleware }) {
        this.expressApp = express_1.default();
        this.numCpu = os_1.default.cpus().length;
        const ddos = new Ddos({ burst: ddosConfig.burst, limit: ddosConfig.limit });
        // middlewares 
        this.expressApp.use(cors_1.default());
        this.expressApp.use(morgan_1.default('dev'));
        this.expressApp.use(express_1.default.json());
        this.expressApp.use(ddos.express);
        // Eliminar encabezado
        this.expressApp.disable('x-powered-by');
        // Static content
        this.expressApp.use(express_1.default.static('public'));
        // List of routes
        if (routes) {
            this.expressApp.use(...routes);
        }
        // If the server is a web service
        if (viewEngine) {
            this.expressApp.set('view engine', viewEngine);
            this.expressApp.set('views', './public');
        }
        // Middlewares
        if (middleware) {
            this.expressApp.use(...middleware);
        }
        // If the path does not exist
        if (routError) {
            this.expressApp.use(routError);
        }
        if (ifProductionMode) {
            // User All thread enable 
            if (cluster_1.default.isMaster) {
                for (let i = 0; i < this.numCpu; i++) {
                    cluster_1.default.fork();
                }
                cluster_1.default.on('exit', (worker, code, signal) => {
                    console.log(`worker ${worker.process.pid} die`);
                    cluster_1.default.fork();
                });
            }
            else {
                this.expressApp.listen(port, () => {
                    console.log(`Server at ${process.pid} @ http://localhost:${port}`);
                });
            }
        }
        else {
            this.expressApp.listen(port, () => {
                console.log(`Server at ${process.pid} @ http://localhost:${port}`);
            });
        }
    }
}
exports.default = Serve;
