const express = require("express");

const cors = require("cors");

const logger = require("morgan");

const cookieParser = require("cookie-parser");

module.exports = (app) => {
	app.set("trust proxy", 1);

	app.use(
		cors({
			credentials: true,
			origin: process.env.ORIGIN || "http://localhost:3000",
		})
	);

	app.use(express.json());
	app.use(express.urlencoded({ extended: false }));
	app.use(logger("dev"));
	app.use(cookieParser());
};
