import { Router, Request, Response } from 'express';
export declare enum ViewEngine {
    EJS = "ejs"
}
interface DDos {
    burst?: number;
    limit?: number;
}
interface Constructor {
    ddosConfig?: DDos;
    routes?: Router[];
    port: string | number;
    viewEngine?: ViewEngine;
    ifProductionMode?: boolean;
    middleware?: any[];
    routError?: (req: Request, res: Response) => void;
}
export default class Serve {
    expressApp: import("express-serve-static-core").Express;
    private numCpu;
    constructor({ port, routes, ddosConfig, routError, viewEngine, ifProductionMode, middleware }: Constructor);
}
export {};
//# sourceMappingURL=serve.d.ts.map