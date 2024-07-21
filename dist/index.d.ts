// src/index.d.ts
declare module '@kuldeepverma/errorhandler' {
    import { Request, Response, NextFunction } from 'express';
  
    export class ErrorHandler extends Error {
      constructor(message: string, statusCode: number);
      statusCode: number;
    }
  
    export function errorMiddleware(
      err: ErrorHandler,
      req: Request,
      res: Response,
      next: NextFunction
    ): void;
  
    export function TryCatch(
      func: (req: Request, res: Response, next: NextFunction) => Promise<any>
    ): (req: Request, res: Response, next: NextFunction) => Promise<void>;
  }
  