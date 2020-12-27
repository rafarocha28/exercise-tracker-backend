const express = require("express");

const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const connection = require("./db/connection");
const debug = require("debug")("exercise:*");
const Utils = require("./utils/Utils");

const app = express();
app.disable("etag");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
if (Utils.isDevelopmentEnv()) {
  app.use(
    morgan(
      ":date[iso] :remote-addr :remote-user :method :url :status :res[content-length] - :response-time ms"
    )
  );
}

const routes = require("./routes");
app.use("/tracker", routes);

const port = process.env.PORT || 5000;
app.listen(port, () =>
  debug(`${Utils.getLocalAddress()} - Listening on port ${port}...`)
);
