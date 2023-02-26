const router = require("express").Router();

router.post("/contact", (req, res) => {
	console.log(req.body);

	res.status(200).json("hi");
});
