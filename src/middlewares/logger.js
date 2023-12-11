import { http } from "../utils/logger.js";

const loggerMiddleware = (req, res, next) => {
  const method = req.method;
  const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;

  http(`method: ${method}, ip: ${ip}`);
  next();
};

export default loggerMiddleware;
