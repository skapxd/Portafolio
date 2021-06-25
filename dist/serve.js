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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvc2VydmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsc0RBQThCO0FBQzlCLDRDQUFvQjtBQUVwQixzREFBOEI7QUFDOUIsb0RBQTRCO0FBQzVCLGdEQUF3QjtBQUd4QixNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUE7QUFFNUIsSUFBWSxVQUVYO0FBRkQsV0FBWSxVQUFVO0lBQ2xCLHlCQUFXLENBQUE7QUFDZixDQUFDLEVBRlcsVUFBVSxHQUFWLGtCQUFVLEtBQVYsa0JBQVUsUUFFckI7QUFrQkQsTUFBcUIsS0FBSztJQUt0QixZQUFZLEVBQ1IsSUFBSSxFQUNKLE1BQU0sRUFDTixVQUFVLEdBQUc7UUFDVCxLQUFLLEVBQUUsR0FBRztRQUNWLEtBQUssRUFBRSxHQUFHO0tBQ2IsRUFDRCxTQUFTLEVBQ1QsVUFBVSxFQUNWLGdCQUFnQixFQUNoQixVQUFVLEVBQ0M7UUFkUixlQUFVLEdBQUcsaUJBQU8sRUFBRSxDQUFDO1FBQ3RCLFdBQU0sR0FBRyxZQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDO1FBZTlCLE1BQU0sSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsQ0FBQyxLQUFLLEVBQUMsQ0FBQyxDQUFBO1FBRXpFLGVBQWU7UUFDZixJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBRSxjQUFJLEVBQUUsQ0FBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFFLGdCQUFNLENBQUMsS0FBSyxDQUFDLENBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBRSxpQkFBTyxDQUFDLElBQUksRUFBRSxDQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBRSxDQUFDO1FBRXBDLHNCQUFzQjtRQUN0QixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBRSxjQUFjLENBQUUsQ0FBQztRQUUxQyxpQkFBaUI7UUFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUUsaUJBQU8sQ0FBQyxNQUFNLENBQUUsUUFBUSxDQUFFLENBQUUsQ0FBQztRQUVsRCxpQkFBaUI7UUFDakIsSUFBSSxNQUFNLEVBQUU7WUFFUixJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFBO1NBQ2pDO1FBRUQsaUNBQWlDO1FBQ2pDLElBQUksVUFBVSxFQUFFO1lBRVosSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQztTQUM1QztRQUVELGNBQWM7UUFDZCxJQUFJLFVBQVUsRUFBRTtZQUVaLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsVUFBVSxDQUFDLENBQUM7U0FDdEM7UUFFRCw2QkFBNkI7UUFDN0IsSUFBSSxTQUFTLEVBQUU7WUFFWCxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNsQztRQUVELElBQUksZ0JBQWdCLEVBQUU7WUFFbEIsMEJBQTBCO1lBQzFCLElBQUksaUJBQU8sQ0FBQyxRQUFRLEVBQUU7Z0JBQ2xCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUVsQyxpQkFBTyxDQUFDLElBQUksRUFBRSxDQUFDO2lCQUNsQjtnQkFDRCxpQkFBTyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxFQUFFO29CQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFJLE1BQU0sQ0FBQyxDQUFDO29CQUNsRCxpQkFBTyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNuQixDQUFDLENBQUMsQ0FBQTthQUVMO2lCQUFNO2dCQUNILElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7b0JBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYyxPQUFPLENBQUMsR0FBSSx1QkFBd0IsSUFBSyxFQUFFLENBQUMsQ0FBQTtnQkFDMUUsQ0FBQyxDQUFDLENBQUM7YUFDTjtTQUVKO2FBQU07WUFFSCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO2dCQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWMsT0FBTyxDQUFDLEdBQUksdUJBQXdCLElBQUssRUFBRSxDQUFDLENBQUE7WUFDMUUsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7Q0FDSjtBQW5GRCx3QkFtRkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2x1c3RlciBmcm9tIFwiY2x1c3RlclwiO1xyXG5pbXBvcnQgb3MgZnJvbSBcIm9zXCI7XHJcblxyXG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IG1vcmdhbiBmcm9tICdtb3JnYW4nO1xyXG5pbXBvcnQgY29ycyBmcm9tICdjb3JzJztcclxuaW1wb3J0IHsgUm91dGVyLCBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xyXG5cclxuY29uc3QgRGRvcyA9IHJlcXVpcmUoJ2Rkb3MnKVxyXG5cclxuZXhwb3J0IGVudW0gVmlld0VuZ2luZXtcclxuICAgIEVKUyA9ICdlanMnIFxyXG59XHJcblxyXG5pbnRlcmZhY2UgRERvcyB7XHJcbiAgICBidXJzdD86IG51bWJlciBcclxuICAgIGxpbWl0PzogbnVtYmVyXHJcbn1cclxuXHJcbmludGVyZmFjZSBDb25zdHJ1Y3RvciB7XHJcbiAgICBkZG9zQ29uZmlnPzogRERvc1xyXG4gICAgcm91dGVzPzogUm91dGVyW11cclxuICAgIHBvcnQ6IHN0cmluZyB8IG51bWJlciBcclxuICAgIHZpZXdFbmdpbmU/OiBWaWV3RW5naW5lXHJcbiAgICBpZlByb2R1Y3Rpb25Nb2RlPzogYm9vbGVhblxyXG4gICAgbWlkZGxld2FyZT86IGFueVtdXHJcbiAgICByb3V0RXJyb3I/OiAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB2b2lkO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VydmUge1xyXG5cclxuICAgIHB1YmxpYyBleHByZXNzQXBwID0gZXhwcmVzcygpO1xyXG4gICAgcHJpdmF0ZSBudW1DcHUgPSBvcy5jcHVzKCkubGVuZ3RoO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHtcclxuICAgICAgICBwb3J0LFxyXG4gICAgICAgIHJvdXRlcyxcclxuICAgICAgICBkZG9zQ29uZmlnID0ge1xyXG4gICAgICAgICAgICBidXJzdDogMjAwLFxyXG4gICAgICAgICAgICBsaW1pdDogMTAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcm91dEVycm9yLCBcclxuICAgICAgICB2aWV3RW5naW5lLFxyXG4gICAgICAgIGlmUHJvZHVjdGlvbk1vZGUsXHJcbiAgICAgICAgbWlkZGxld2FyZVxyXG4gICAgfSA6IENvbnN0cnVjdG9yICkge1xyXG5cclxuICAgICAgICBjb25zdCBkZG9zID0gbmV3IERkb3Moe2J1cnN0OiBkZG9zQ29uZmlnLmJ1cnN0LCBsaW1pdDogZGRvc0NvbmZpZy5saW1pdH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gbWlkZGxld2FyZXMgXHJcbiAgICAgICAgdGhpcy5leHByZXNzQXBwLnVzZSggY29ycygpICk7XHJcbiAgICAgICAgdGhpcy5leHByZXNzQXBwLnVzZSggbW9yZ2FuKCdkZXYnKSApO1xyXG4gICAgICAgIHRoaXMuZXhwcmVzc0FwcC51c2UoIGV4cHJlc3MuanNvbigpICk7XHJcbiAgICAgICAgdGhpcy5leHByZXNzQXBwLnVzZSggZGRvcy5leHByZXNzICk7XHJcblxyXG4gICAgICAgIC8vIEVsaW1pbmFyIGVuY2FiZXphZG9cclxuICAgICAgICB0aGlzLmV4cHJlc3NBcHAuZGlzYWJsZSggJ3gtcG93ZXJlZC1ieScgKTtcclxuXHJcbiAgICAgICAgLy8gU3RhdGljIGNvbnRlbnRcclxuICAgICAgICB0aGlzLmV4cHJlc3NBcHAudXNlKCBleHByZXNzLnN0YXRpYyggJ3B1YmxpYycgKSApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIExpc3Qgb2Ygcm91dGVzXHJcbiAgICAgICAgaWYgKHJvdXRlcykge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5leHByZXNzQXBwLnVzZSguLi5yb3V0ZXMpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiB0aGUgc2VydmVyIGlzIGEgd2ViIHNlcnZpY2VcclxuICAgICAgICBpZiAodmlld0VuZ2luZSkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5leHByZXNzQXBwLnNldCgndmlldyBlbmdpbmUnLCB2aWV3RW5naW5lKTtcclxuICAgICAgICAgICAgdGhpcy5leHByZXNzQXBwLnNldCgndmlld3MnLCAnLi9wdWJsaWMnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIE1pZGRsZXdhcmVzXHJcbiAgICAgICAgaWYgKG1pZGRsZXdhcmUpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuZXhwcmVzc0FwcC51c2UoLi4ubWlkZGxld2FyZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIElmIHRoZSBwYXRoIGRvZXMgbm90IGV4aXN0XHJcbiAgICAgICAgaWYgKHJvdXRFcnJvcikge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5leHByZXNzQXBwLnVzZShyb3V0RXJyb3IpO1xyXG4gICAgICAgIH0gXHJcblxyXG4gICAgICAgIGlmIChpZlByb2R1Y3Rpb25Nb2RlKSB7XHJcblxyXG4gICAgICAgICAgICAvLyBVc2VyIEFsbCB0aHJlYWQgZW5hYmxlIFxyXG4gICAgICAgICAgICBpZiAoY2x1c3Rlci5pc01hc3Rlcikge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bUNwdTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY2x1c3Rlci5mb3JrKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjbHVzdGVyLm9uKCdleGl0JywgKHdvcmtlciwgY29kZSwgc2lnbmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYHdvcmtlciAkeyB3b3JrZXIucHJvY2Vzcy5waWQgfSBkaWVgKTtcclxuICAgICAgICAgICAgICAgICAgICBjbHVzdGVyLmZvcmsoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5leHByZXNzQXBwLmxpc3RlbiggcG9ydCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBTZXJ2ZXIgYXQgJHsgcHJvY2Vzcy5waWQgfSBAIGh0dHA6Ly9sb2NhbGhvc3Q6JHsgcG9ydCB9YClcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmV4cHJlc3NBcHAubGlzdGVuKCBwb3J0LCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgU2VydmVyIGF0ICR7IHByb2Nlc3MucGlkIH0gQCBodHRwOi8vbG9jYWxob3N0OiR7IHBvcnQgfWApXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==