// index.js
import express from "express";
import loggerMiddleware from "./middlewares/logger.js";

const app = express();

app.use(loggerMiddleware);

// Sunucuyu başlat
const port = 3000;
app.listen(port, () => {
  console.log(`Server running in port ${port}`);
});
