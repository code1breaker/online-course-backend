import { Request, Response } from "express";

export const error = (err: any, req: Request, res: Response) => {
  let status = err.getCode() || 500;
  let msg = err.message || "Internal Serval Error";

  res.status(status).json({ success: false, message: msg });
};
