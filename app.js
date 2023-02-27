const express = require("express");

const app = express();

require("./config")(app);

require("dotenv/config");

const emailRouter = require("./routes/email.routes");
app.use("/", emailRouter);

module.exports = app;
