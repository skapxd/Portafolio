import { Request, Response, NextFunction } from 'express';
export declare const cache: (duration: number) => (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=memory_cache.d.ts.map