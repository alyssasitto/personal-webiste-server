const express = require("express");

const app = express();

require("dotenv/config");
require("./config")(app);

const emailRouter = require("./routes/email.routes");
app.use("/", emailRouter);

module.exports = app;
