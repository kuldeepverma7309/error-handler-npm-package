// src/middleware.ts
import { Request, Response, NextFunction } from 'express';
import ErrorHandler from './ErrorHandler';

export const errorMiddleware = (
  err: ErrorHandler,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(err);
  err.message ||= "Internal Server Error";
  err.statusCode ||= 500;

  if (err.name === "CastError") {
    err = new ErrorHandler("Invalid Id", 400);
  }

  res.status(err.statusCode).json({
    success: false,
    error: err.message,
  });
};

export const TryCatch = (
  func: (req: Request, res: Response, next: NextFunction) => Promise<any>
) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await func(req, res, next);
    } catch (err) {
      console.log(err);
      next(err);
    }
  };
};
