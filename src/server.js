import sirv from "sirv";
import express from "express";
import compression from "compression";
import * as sapper from "@sapper/server";
import logger from "./utils/logger";
import morgan from "morgan";

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === "development";

const app = express();

app.use(
  morgan("combined", { stream: logger.stream }),
  compression({ threshold: 0 }),
  sirv("static", { dev }),
  sapper.middleware()
);

app.listen(3000, err => {
  if (err) logger.error(err);
});
