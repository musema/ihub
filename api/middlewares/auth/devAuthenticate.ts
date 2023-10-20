import express from "express";

export const devAuthenticate = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  // skip or add authentication logic for development
  next();
};
