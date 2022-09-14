import { Request, Response, NextFunction } from 'express';
import HttpExeption from '../shared/http.exeption';

const HttpErrorMiddleware = (err: Error, req: Request, res: Response, _next: NextFunction) => {
  const { status, message } = err as HttpExeption;
  res.status(status || 500).json({ message });
};

export default HttpErrorMiddleware;