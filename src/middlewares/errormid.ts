import { Request, Response, NextFunction } from 'express';
interface Error {
  status: number;
  name: string;
  message: string;
  stack?: string;
}
const errormid = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = error.status || 500;
  const message =
    error.message || 'An error Occurred, please contact the support';
  res.status(status).json({ status, message: message });
  next();
};

export default errormid;
