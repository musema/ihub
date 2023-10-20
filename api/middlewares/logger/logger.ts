import express from "express";

export const loggerMiddleware = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  // we intercept and log the request, however you need make sure you're not logging sensitive data
  next();
};
