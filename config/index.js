const express = require("express");

const cors = require("cors");

const logger = require("morgan");

module.exports = (app) => {
	app.use(
		cors({
			credentials: true,
			origin: process.env.ORIGIN || "http://localhost:3000",
		})
	);

	app.use(express.json());

	app.use(logger("dev"));
};
